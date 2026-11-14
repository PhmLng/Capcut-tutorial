(function () {
    const $ = (s) => document.querySelector(s);
    const id = new URLSearchParams(location.search).get("b");
    const lesson = LESSONS.find((l) => l.id === id);

    // Trải phẳng: phần -> mục con -> bước thành một danh sách các bước theo thứ tự
    const parts = lesson ? lesson.parts : [];
    const flat = [], firstOfPart = {}, firstOfSub = {}, partCount = {};
    parts.forEach((p, pi) => {
        partCount[pi] = 0;
        p.subs.forEach((sb, si) => {
            sb.steps.forEach((s, ki) => {
                if (!(pi in firstOfPart)) firstOfPart[pi] = flat.length;
                if (!((pi + "-" + si) in firstOfSub)) firstOfSub[pi + "-" + si] = flat.length;
                flat.push(Object.assign({}, s, { pi: pi, si: si, ki: ki, k: partCount[pi] + 1 }));
                partCount[pi]++;
            });
        });
    });

    if (!lesson || !flat.length) {
        document.querySelector(".layout").innerHTML =
            '<p class="lead">Không tìm thấy bài này.</p><a class="btn" href="index.html">Về danh sách bài</a>';
        return;
    }

    const stage = $("#stage"), shot = $("#shot"), spot = $("#spot"), arrow = $("#arrow"), tip = $("#tip");
    const prev = $("#prev"), next = $("#next"), toc = $("#toc"), tocList = $("#tocList"), caption = $("#caption");
    const narrow = matchMedia("(max-width: 999px)");
    const calm = matchMedia("(prefers-reduced-motion: reduce)");
    const GAP = 78; // khoảng chừa cho mũi tên (px) giữa vùng được chỉ và bong bóng chú thích
    let i = 0;

    document.title = lesson.title + " - Hướng dẫn CapCut";
    $("#title").textContent = lesson.title;
    document.documentElement.style.setProperty("--r", lesson.ratio);
    toc.open = !narrow.matches; // máy tính: mục lục mở sẵn, điện thoại: thu gọn

    // Mục lục: mỗi phần là một nhóm, chỉ phần đang học mở ra
    let html = "";
    parts.forEach((p, pi) => {
        const has = pi in firstOfPart;
        html += '<div class="part' + (has ? "" : " is-empty") + '" data-p="' + pi + '">' +
            '<button type="button" class="part-head"' + (has ? ' data-part="' + pi + '"' : " disabled") + ">" +
            '<span class="n">' + (pi + 1) + '</span><span class="pt">' + p.title + '</span><span class="pp"></span></button>';
        if (has) {
            html += '<ol class="subs">';
            p.subs.forEach((sb, si) => {
                const k = pi + "-" + si, ok = k in firstOfSub;
                html += '<li><button type="button" class="sub' + (ok ? "" : " is-empty") + '" data-ps="' + k + '"' +
                    (ok ? ' data-sub="' + k + '"' : " disabled") + '><span class="sn">' + (pi + 1) + "." + (si + 1) + "</span>" +
                    sb.title + (ok ? "" : ' <em class="soon">(sắp có)</em>') + "</button></li>";
            });
            html += "</ol>";
        }
        html += "</div>";
    });
    tocList.innerHTML = html;
    const partEls = tocList.querySelectorAll(".part");
    const subEls = tocList.querySelectorAll(".sub");

    tocList.addEventListener("click", (e) => {
        const b = e.target.closest("button[data-part],button[data-sub]");
        if (!b) return;
        i = b.dataset.part !== undefined ? firstOfPart[b.dataset.part] : firstOfSub[b.dataset.sub];
        if (narrow.matches) toc.open = false;
        show(true);
    });

    shot.addEventListener("error", () => stage.classList.add("is-empty"));
    shot.addEventListener("load", () => stage.classList.remove("is-empty"));

    // Điện thoại: kéo cả cụm (vùng được chỉ + mũi tên + bong bóng) vào giữa phần màn hình còn trống phía trên thanh nút.
    // Tính theo phần trăm của khung ảnh (không đọc vị trí đang chạy hiệu ứng của vùng sáng).
    function placeInView(s, above) {
        const sr = stage.getBoundingClientRect();
        const ty = sr.top + (sr.height * s.y) / 100;
        const tb = ty + (sr.height * s.h) / 100;
        const top = above ? ty - GAP - tip.offsetHeight : ty;
        const bottom = above ? tb : tb + GAP + tip.offsetHeight;
        const free = window.innerHeight - caption.offsetHeight - 12;
        const delta = bottom - top > free ? top - 6 : (top + bottom) / 2 - (free / 2 + 6);
        window.scrollBy({ top: delta, behavior: calm.matches ? "auto" : "smooth" });
    }

    function show(scroll) {
        const s = flat[i];
        if (shot.getAttribute("src") !== s.img) shot.setAttribute("src", s.img);
        $("#noimg").textContent = "Chưa có ảnh: " + s.img;

        spot.style.left = s.x + "%";
        spot.style.top = s.y + "%";
        spot.style.width = s.w + "%";
        spot.style.height = s.h + "%";

        // Vùng ở nửa dưới ảnh: mũi tên và bong bóng nằm phía trên. Nửa trên: nằm phía dưới.
        const above = s.y + s.h / 2 >= 50;
        arrow.classList.toggle("above", above);
        arrow.style.left = s.x + s.w / 2 + "%";
        arrow.style.top = (above ? s.y : s.y + s.h) + "%";

        $("#tipTitle").textContent = s.title;
        $("#tipText").textContent = s.text;
        if (above) { tip.style.top = "auto"; tip.style.bottom = "calc(" + (100 - s.y) + "% + " + GAP + "px)"; }
        else { tip.style.bottom = "auto"; tip.style.top = "calc(" + (s.y + s.h) + "% + " + GAP + "px)"; }

        const n = partCount[s.pi];
        $("#counter").textContent = "Phần " + (s.pi + 1) + "/" + parts.length + " · Bước " + s.k + "/" + n;
        $("#barFill").style.width = (s.k / n) * 100 + "%";
        $("#stepTitle").textContent = s.title;
        $("#text").textContent = s.text;
        prev.disabled = i === 0;
        next.textContent = i === flat.length - 1 ? "Xong rồi" : "Tiếp tục";

        partEls.forEach((el) => {
            const pi = +el.dataset.p, has = pi in firstOfPart;
            el.classList.toggle("is-open", pi === s.pi);
            el.classList.toggle("is-current", pi === s.pi);
            el.classList.toggle("is-done", has && pi < s.pi);
            el.querySelector(".pp").textContent = !has ? "Sắp có" : pi < s.pi ? "Xong" : pi === s.pi ? s.k + "/" + n : "";
        });
        subEls.forEach((el) => {
            if (el.disabled) return;
            const ps = el.dataset.ps.split("-").map(Number);
            const isCur = ps[0] === s.pi && ps[1] === s.si;
            el.classList.toggle("is-current", isCur);
            el.classList.toggle("is-done", ps[0] < s.pi || (ps[0] === s.pi && ps[1] < s.si));
            if (isCur) el.setAttribute("aria-current", "step"); else el.removeAttribute("aria-current");
        });
        history.replaceState(null, "", "#" + (s.pi + 1) + "-" + (s.si + 1) + "-" + (s.ki + 1));

        if (scroll && narrow.matches) placeInView(s, above);
    }

    function go(d) {
        const t = i + d;
        if (t < 0) return;
        if (t >= flat.length) { location.href = "index.html"; return; }
        i = t;
        show(true);
    }

    const advance = () => { if (i < flat.length - 1) go(1); };
    stage.addEventListener("click", advance);
    stage.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); advance(); }
    });
    next.addEventListener("click", () => go(1));
    prev.addEventListener("click", () => go(-1));
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
    });

    // Địa chỉ dạng #phần-mục-bước, ví dụ #2-2-1
    const h = location.hash.slice(1).split("-").map(Number);
    const hit = flat.findIndex((s) => s.pi === h[0] - 1 && s.si === h[1] - 1 && s.ki === h[2] - 1);
    if (hit >= 0) i = hit;
    show(false);
})();