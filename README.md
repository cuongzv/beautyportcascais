# Beauty Port Cascais — HTML Kit — Hướng dẫn quản trị

Bộ code HTML dựng lại **toàn bộ website Beauty Port Cascais** (nội dung thật của web),
chia thành từng file nhỏ theo bố cục để anh dễ quản trị mà không cần liên hệ admin cũ.

## Cấu trúc thư mục

```
salon-html-kit/
├── index.html            ← trang chính (chỉ chứa khung + gọi các partial)
├── css/
│   └── style.css         ← toàn bộ giao diện (màu sắc, font, responsive)
├── js/
│   └── main.js           ← nạp các partial + menu mobile + năm tự động
├── images/               ← ảnh gốc tải từ web về (logo + 4 ảnh)
│   ├── logo.svg
│   ├── exterior.webp     ← ảnh fachada (hero)
│   ├── interior.webp     ← ảnh interior (khối "O salão")
│   ├── hair-area.webp    ← ảnh khu vực tóc (khối domicílio)
│   └── treatment-room.webp ← ảnh phòng trị liệu (khối visitar)
├── partials/             ← ★ ANH SỬA NỘI DUNG Ở ĐÂY, mỗi file = 1 bố cục
│   ├── header.html       ← logo + menu + nút "Marcar"
│   ├── hero.html         ← khối đầu trang
│   ├── services.html     ← 6 thẻ dịch vụ (Cabelo, Cor, Unhas, Rosto, Massagem, Mais)
│   ├── about.html        ← khối giới thiệu salon
│   ├── pricing.html      ← bảng giá Cortes Femininos
│   ├── team.html         ← danh sách 9 thành viên team
│   ├── home-service.html ← khối "Serviços ao domicílio"
│   ├── visit.html        ← địa chỉ, giờ mở cửa, điện thoại, nút Maps/Ligar
│   └── footer.html       ← chân trang
└── README.md             ← file này
```

## Thông tin đã điền sẵn (lấy từ web thật)

- Tên: Beauty Port Cascais · Địa chỉ: Rua Frederico Arouca 41 A, Cascais
- Giờ: Seg–Sáb 08:00–21:00, Chủ nhật theo lịch hẹn
- Phone/WhatsApp: +351 913 440 980 (các nút Marcar/WhatsApp đã gắn số này)
- Nút "Abrir no Google Maps" dùng đúng link rút gọn gốc của web
  (https://maps.app.goo.gl/1NHgSxnDMhKRUUwT9?g_st=ic) — lấy từ trang live ngày 16/10/2026.

## Sửa nội dung

Muốn đổi chữ ở bố cục nào → mở đúng file trong `partials/` bằng notepad/editor,
sửa chữ rồi lưu, upload đè file đó lên host là xong. Muốn thay ảnh → bỏ ảnh mới
vào thư mục `images/` (giữ nguyên tên file hoặc sửa `src` trong partial).

## Xem thử trên máy

Trình duyệt chặn `fetch()` khi mở file trực tiếp (`file://`), nên chạy qua server local:

```bash
cd salon-html-kit
python3 -m http.server 8000
# rồi mở http://localhost:8000
```

## Đưa lên hosting

Upload **toàn bộ thư mục** (giữ nguyên cấu trúc) lên host là chạy — không cần
build, không cần database. File `index.html` ở document root.
