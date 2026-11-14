// Cấu trúc: bài (lesson) -> phần (parts) -> mục con (subs) -> bước (steps).
// Mỗi bước là một lần bấm: title, img, x, y, w, h (đơn vị %, tính từ góc trên-trái ảnh), text.
// Ví dụ x:10, y:80, w:20, h:8 nghĩa là ô cách trái 10%, cách trên 80%, rộng 20%, cao 8%.
// Mục con để steps: [] thì mục lục hiện "(sắp có)" cho tới khi bạn thêm ảnh và bước.
const IMG = "img/chinh-sua-video/";
const WS = IMG + "03-khong-gian-lam-viec.jpg";

const LESSONS = [
    {
        id: "chinh-sua-video",
        title: "Dựng video từ A đến Z",
        desc: "Từ lúc mở CapCut đến khi lưu video thành phẩm",
        cover: IMG + "01-man-hinh-chinh.jpg",
        ratio: 0.447, // ảnh điện thoại dọc (720 x 1610)
        parts: [
            {
                title: "Tạo dự án mới", subs: [
                    {
                        title: "Mở CapCut", steps: [
                            {
                                title: "Tạo video mới", img: IMG + "01-man-hinh-chinh.jpg", x: 4.4, y: 11.1, w: 56, h: 14.9,
                                text: "Mở CapCut trên điện thoại. Bấm vào ô Video mới để bắt đầu một dự án."
                            }
                        ]
                    },
                    {
                        title: "Chọn video từ thư viện", steps: [
                            {
                                title: "Chọn video", img: IMG + "02-chon-video.jpg", x: 0.4, y: 16.8, w: 32.5, h: 14.5,
                                text: "Bấm vào video bạn muốn dùng. Vòng tròn ở góc video sẽ đổi thành số khi đã chọn."
                            },
                            {
                                title: "Bấm Thêm", img: IMG + "02-chon-video.jpg", x: 76, y: 93.2, w: 20, h: 4.8,
                                text: "Chọn xong thì bấm nút Thêm ở góc dưới bên phải."
                            }
                        ]
                    },
                    {
                        title: "Làm quen màn hình chỉnh sửa", steps: [
                            {
                                title: "Khung xem trước", img: WS, x: 20.4, y: 10.2, w: 59.2, h: 47,
                                text: "Đây là khung xem trước. Video của bạn hiện ở đây."
                            },
                            {
                                title: "Phát và hoàn tác", img: WS, x: 3, y: 57.4, w: 94, h: 3.8,
                                text: "Bấm tam giác để phát video. Hai mũi tên cong bên phải dùng để quay lại hoặc làm lại bước vừa rồi."
                            },
                            {
                                title: "Dòng thời gian", img: WS, x: 49.8, y: 66.5, w: 50.2, h: 8,
                                text: "Dải hình nhỏ là video của bạn. Vạch trắng dọc là vị trí đang xem."
                            },
                            {
                                title: "Thêm âm thanh và chữ", img: WS, x: 49.8, y: 75.2, w: 50.2, h: 8.5,
                                text: "Bấm vào đây để thêm nhạc hoặc thêm chữ vào video."
                            },
                            {
                                title: "Thanh công cụ", img: WS, x: 0, y: 91.4, w: 100, h: 8.4,
                                text: "Các công cụ chính nằm ở hàng dưới cùng: Chỉnh sửa, Âm thanh, Văn bản, Hiệu ứng, Lớp phủ, Phụ đề. Vuốt sang trái để xem thêm."
                            }
                        ]
                    }
                ]
            },

            {
                title: "Cắt ghép & xóa đoạn thừa", subs: [
                    {
                        title: "Xác định điểm cắt", steps: [
                            {
                                title: "Chọn video để cắt", img: WS, x: 49.8, y: 66.5, w: 50.2, h: 8,
                                text: "Bấm vào dải hình nhỏ để chọn video. Video được chọn sẽ có viền trắng."
                            },
                            {
                                title: "Đặt vạch trắng đúng chỗ cắt", img: IMG + "p2-01-clip-da-chon.jpg", x: 48.9, y: 65.5, w: 2.2, h: 25.3,
                                text: "Vuốt dòng thời gian sang trái hoặc phải. Vạch trắng dừng ở đâu thì video sẽ được cắt ở đó."
                            }
                        ]
                    },
                    {
                        title: "Tách và xóa khung hình lỗi", steps: [
                            {
                                title: "Bấm nút Tách", img: IMG + "p2-01-clip-da-chon.jpg", x: 17.4, y: 92.7, w: 10.4, h: 6.2,
                                text: "Bấm Tách để cắt video tại vạch trắng."
                            },
                            {
                                title: "Xóa đoạn thừa", img: IMG + "p2-03-sau-khi-tach.jpg", x: 88.5, y: 92.7, w: 11.5, h: 6.2,
                                text: "Video đã được cắt làm hai. Đoạn có viền trắng là đoạn đang chọn. Nếu đó là đoạn thừa thì bấm Xóa. Không muốn xóa thì bấm Tiếp tục để làm chuyển cảnh."
                            }
                        ]
                    }
                ]
            },

            {
                title: "Hiệu ứng chuyển cảnh", subs: [
                    {
                        title: "Chọn nút chuyển cảnh giữa 2 clip", steps: [
                            {
                                title: "Thoát công cụ cắt", img: IMG + "p2-03-sau-khi-tach.jpg", x: 2.8, y: 92.1, w: 8.9, h: 7.1,
                                text: "Nếu không muốn xóa đoạn nào, bấm mũi tên ở góc dưới bên trái để thoát. Sau đó ta làm hiệu ứng chuyển cảnh giữa hai đoạn video."
                            },
                            {
                                title: "Tìm chỗ nối hai đoạn", img: IMG + "p3-01-cho-noi-hai-doan.jpg", x: 40.5, y: 66.5, w: 9, h: 8.2,
                                text: "Giữa hai đoạn video có một ô vuông nhỏ ở chỗ nối. Bấm vào ô đó để chọn chuyển cảnh."
                            }
                        ]
                    },
                    {
                        title: "Chọn hiệu ứng & chỉnh thời lượng", steps: [
                            {
                                title: "Chọn hiệu ứng", img: IMG + "p3-02-chon-hieu-ung.jpg", x: 3, y: 43.5, w: 94, h: 53,
                                text: "Chạm vào một hiệu ứng để chọn. Khung xem trước phía trên sẽ cho bạn xem thử."
                            },
                            {
                                title: "Chỉnh thời gian chuyển cảnh", img: IMG + "p3-03-chinh-thoi-luong.jpg", x: 6, y: 91.8, w: 88, h: 5.6,
                                text: "Kéo nút tròn để đổi thời gian chuyển cảnh, từ 0,1 đến 0,9 giây. Kéo sang phải thì chuyển cảnh chậm hơn."
                            },
                            {
                                title: "Xác nhận", img: IMG + "p3-03-chinh-thoi-luong.jpg", x: 88, y: 65.5, w: 10.2, h: 4.6,
                                text: "Hài lòng thì bấm dấu ✓ để lưu hiệu ứng."
                            }
                        ]
                    }
                ]
            },

            {
                title: "Nhạc & âm thanh", subs: [
                    {
                        title: "Tắt âm thanh gốc của video", steps: [
                            {
                                title: "Tắt tiếng video", img: IMG + "p4-01-thanh-cong-cu.jpg", x: 2.8, y: 67.7, w: 7.6, h: 5.6,
                                text: "Bấm Tắt tiếng bên trái dòng thời gian để tắt âm thanh gốc của video. Bấm thêm lần nữa nếu muốn bật lại."
                            }
                        ]
                    },
                    {
                        title: "Chèn bài hát nền", steps: [
                            {
                                title: "Bấm Âm thanh", img: IMG + "p4-01-thanh-cong-cu.jpg", x: 20.1, y: 92.5, w: 14.3, h: 6.2,
                                text: "Muốn thêm nhạc nền thì bấm Âm thanh ở hàng công cụ dưới cùng."
                            },
                            {
                                title: "Mở kho nhạc", img: IMG + "p4-03-menu-am-thanh.jpg", x: 32.2, y: 92.5, w: 13.9, h: 6.2,
                                text: "Bấm tiếp Âm thanh để mở kho nhạc."
                            },
                            {
                                title: "Thêm bài nhạc", img: IMG + "p4-04-chon-bai-hat.jpg", x: 87.5, y: 74.2, w: 9, h: 4.4,
                                text: "Chạm vào một bài để nghe thử. Thích bài nào thì bấm dấu + màu xanh bên phải để thêm vào video."
                            },
                            {
                                title: "Nhạc đã vào video", img: IMG + "p4-05-nhac-tren-timeline.jpg", x: 44.4, y: 75.3, w: 55.6, h: 4.3,
                                text: "Bài nhạc nằm dưới video, là dải màu xanh. Nhạc thường dài hơn video nên ta sẽ cắt bớt phần thừa."
                            }
                        ]
                    },
                    {
                        title: "Cắt bớt nhạc thừa & điều chỉnh âm lượng", steps: [
                            {
                                title: "Chọn chỗ cắt nhạc", img: IMG + "p4-06-chon-nhac.jpg", x: 48.9, y: 65.5, w: 2.2, h: 25.3,
                                text: "Bấm vào dải nhạc để chọn (có viền trắng). Vuốt dòng thời gian để vạch trắng dừng ở chỗ bạn muốn nhạc kết thúc."
                            },
                            {
                                title: "Bấm Tách", img: IMG + "p4-06-chon-nhac.jpg", x: 37.5, y: 92.5, w: 9.4, h: 6.2,
                                text: "Bấm Tách để cắt nhạc tại vạch trắng."
                            },
                            {
                                title: "Xóa nhạc thừa", img: IMG + "p4-07-sau-khi-tach-nhac.jpg", x: 85.5, y: 92.5, w: 10.5, h: 6.2,
                                text: "Nhạc đã bị cắt làm hai. Đoạn có viền trắng là đoạn đang chọn. Nếu đó là phần nhạc thừa thì bấm Xóa."
                            }
                        ]
                    }
                ]
            },

            {
                title: "Chữ & hiệu ứng chữ", subs: [
                    {
                        title: "Nhập nội dung văn bản", steps: [
                            {
                                title: "Bấm Văn bản", img: IMG + "p5-01-thanh-cong-cu-van-ban.jpg", x: 37.2, y: 92.5, w: 13.6, h: 6.3,
                                text: "Muốn thêm chữ thì bấm Văn bản ở hàng công cụ dưới cùng."
                            },
                            {
                                title: "Bấm Thêm văn bản", img: IMG + "p5-02-them-van-ban.jpg", x: 13.9, y: 92.5, w: 21.1, h: 6.3,
                                text: "Bấm Thêm văn bản để viết chữ lên video."
                            },
                            {
                                title: "Mở ô nhập chữ", img: IMG + "p5-03-o-nhap-chu.jpg", x: 4, y: 63.2, w: 82, h: 5,
                                text: "Bấm vào ô Nhập văn bản. Phía dưới là các mẫu chữ làm sẵn, bạn có thể chọn sau."
                            },
                            {
                                title: "Gõ chữ", img: IMG + "p5-04-go-chu.jpg", x: 4, y: 37.4, w: 82, h: 5.4,
                                text: "Gõ nội dung bạn muốn. Chữ sẽ hiện ngay trong khung xem trước phía trên."
                            }
                        ]
                    },
                    {
                        title: "Chọn phông chữ, màu sắc & hiệu ứng động", steps: [
                            {
                                title: "Bấm tab Phông chữ", img: IMG + "p5-04-go-chu.jpg", x: 16, y: 45.4, w: 21.8, h: 4.6,
                                text: "Phía trên bàn phím có một hàng tab. Bấm Phông chữ để chọn kiểu chữ."
                            },
                            {
                                title: "Chọn phông chữ", img: IMG + "p5-05-phong-chu.jpg", x: 4.2, y: 82.5, w: 91.5, h: 17,
                                text: "Chạm vào kiểu chữ bạn thích. Chữ trong khung xem trước sẽ đổi ngay."
                            },
                            {
                                title: "Bấm tab Phong cách", img: IMG + "p5-05-phong-chu.jpg", x: 40.6, y: 71.5, w: 24, h: 4.2,
                                text: "Bấm tab Phong cách để đổi kiểu và màu chữ."
                            },
                            {
                                title: "Chọn kiểu chữ", img: IMG + "p5-06-phong-cach.jpg", x: 4.2, y: 77.3, w: 95.8, h: 4.7,
                                text: "Chạm vào một ô Aa để đổi kiểu viền và màu cho chữ."
                            },
                            {
                                title: "Chọn màu chữ", img: IMG + "p5-06-phong-cach.jpg", x: 3, y: 90.4, w: 97, h: 4.2,
                                text: "Kéo ngang dòng chấm tròn và chạm vào màu bạn thích."
                            },
                            {
                                title: "Bấm tab Hiệu ứng", img: IMG + "p5-06-phong-cach.jpg", x: 64.2, y: 71.5, w: 18.9, h: 4.2,
                                text: "Bấm tab Hiệu ứng để thêm viền hoặc nền trang trí cho chữ."
                            },
                            {
                                title: "Thêm hiệu ứng cho chữ", img: IMG + "p5-07-hieu-ung-chu.jpg", x: 4.2, y: 82.6, w: 91.7, h: 17,
                                text: "Chạm vào một mẫu để chữ có viền hoặc nền trang trí. Không thích thì bỏ qua bước này."
                            },
                            {
                                title: "Bấm tab Hiệu ứng động", img: IMG + "p5-07-hieu-ung-chu.jpg", x: 61.8, y: 71.5, w: 29.2, h: 4.2,
                                text: "Bấm tab Hiệu ứng động để chữ chuyển động khi hiện lên."
                            },
                            {
                                title: "Chọn kiểu chuyển động", img: IMG + "p5-08-hieu-ung-dong.jpg", x: 27, y: 77.6, w: 41, h: 4,
                                text: "Vào là lúc chữ xuất hiện, Ra là lúc chữ biến mất, Vòng lặp là chữ chuyển động liên tục."
                            },
                            {
                                title: "Chọn hiệu ứng động", img: IMG + "p5-08-hieu-ung-dong.jpg", x: 4.2, y: 82.9, w: 91.7, h: 8.8,
                                text: "Chạm vào một hiệu ứng để xem thử. Ô đầu tiên (hình tròn gạch chéo) là không dùng hiệu ứng."
                            },
                            {
                                title: "Chỉnh tốc độ hiệu ứng", img: IMG + "p5-08-hieu-ung-dong.jpg", x: 13, y: 91.8, w: 74, h: 4.3,
                                text: "Kéo nút tròn để chỉnh hiệu ứng chạy nhanh hay chậm."
                            },
                            {
                                title: "Lưu chữ", img: IMG + "p5-08-hieu-ung-dong.jpg", x: 87, y: 63, w: 10, h: 4.5,
                                text: "Làm xong thì bấm dấu ✓ để lưu chữ vào video."
                            }
                        ]
                    },
                    {
                        title: "Căn chỉnh thời lượng xuất hiện của chữ", steps: [
                            {
                                title: "Dải chữ trên dòng thời gian", img: IMG + "p5-09-dai-chu-tren-timeline.jpg", x: 11.1, y: 75.8, w: 70.1, h: 4,
                                text: "Dải màu cam là chữ của bạn. Dải dài bao nhiêu thì chữ hiện trên video bấy nhiêu lâu."
                            },
                            {
                                title: "Kéo hai đầu dải chữ", img: IMG + "p5-09-dai-chu-tren-timeline.jpg", x: 74.7, y: 75.5, w: 7.2, h: 4.4,
                                text: "Kéo đầu trái hoặc đầu phải của dải để chữ hiện ngắn hơn hoặc lâu hơn. Giữ và kéo cả dải để đổi thời điểm chữ xuất hiện."
                            }
                        ]
                    }
                ]
            },

            {
                title: "Xuất & lưu video", subs: [
                    {
                        title: "Cấu hình xuất gợi ý (1080P)", steps: [
                            {
                                title: "Mở tùy chọn xuất", img: WS, x: 52.8, y: 5.4, w: 22.2, h: 3.9,
                                text: "Trước khi xuất, bấm vào nút AI UHD cạnh nút Xuất để mở các tùy chọn."
                            },
                            {
                                title: "AI Ultra HD", img: IMG + "xuatvideo.jpg", x: 3, y: 13.7, w: 94, h: 8.1,
                                text: "Gợi ý: để như trong hình, nút gạt đang bật. Tính năng này giúp video rõ nét và mượt hơn."
                            },
                            {
                                title: "Độ phân giải: 1080p", img: IMG + "xuatvideo.jpg", x: 3, y: 24.2, w: 94, h: 11.8,
                                text: "Gợi ý: kéo nút tròn tới 1080p. Mức này đủ nét cho hầu hết video đăng mạng xã hội mà file không quá nặng."
                            },
                            {
                                title: "Tỷ lệ khung hình", img: IMG + "xuatvideo.jpg", x: 3, y: 39, w: 94, h: 8.7,
                                text: "Gợi ý: kéo tới 60 để video phát mượt hơn. Đây là số hình hiển thị mỗi giây."
                            },
                            {
                                title: "Luồng quang học", img: IMG + "xuatvideo.jpg", x: 3, y: 50.6, w: 94, h: 5.6,
                                text: "Gợi ý: để tắt như trong hình."
                            },
                            {
                                title: "Tốc độ bit và dung lượng", img: IMG + "xuatvideo.jpg", x: 3, y: 60.6, w: 94, h: 14.3,
                                text: "Gợi ý: để theo mức CapCut khuyên dùng cho video này (trong hình là 18). Dòng bên dưới cho biết dung lượng file ước tính. Số càng lớn thì video càng nét nhưng file càng nặng."
                            }
                        ]
                    },
                    {
                        title: "Xuất file & kiểm tra trong Thư viện ảnh", steps: [
                            {
                                title: "Bấm Xuất", img: IMG + "xuatvideo.jpg", x: 77.8, y: 5.4, w: 17.8, h: 3.9,
                                text: "Cài đặt xong thì bấm Xuất để bắt đầu lưu video."
                            }
                        ]
                    }
                ]
            }
        ]
    }
];