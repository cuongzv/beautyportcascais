# Hướng dẫn quản trị nhanh — Beauty Port Cascais

Trang chính `index.html` chỉ là khung, không chứa nội dung.
Muốn sửa chỗ nào thì mở đúng 1 file trong `partials/`, sửa rồi lưu,
upload đè đúng file đó lên Cloudflare Pages là xong — không cần sửa chỗ khác.

| Muốn đổi | Mở file |
|---|---|
| Logo, menu, nút Marcar trên đầu trang | `partials/header.html` |
| Tiêu đề, mô tả đầu trang, ảnh đầu trang | `partials/hero.html` |
| 6 thẻ dịch vụ (Cabelo, Cor, Unhas, Rosto, Massagem, Mais) | `partials/services.html` |
| Khối giới thiệu salon, ảnh interior | `partials/about.html` |
| Bảng giá Cortes Femininos (30€ / desde 35€ / desde 50€) | `partials/pricing.html` |
| Thêm / bớt / đổi tên thành viên team (đang có 9 người) | `partials/team.html` |
| Khối dịch vụ tại nhà (Cascais và Lisboa) | `partials/home-service.html` |
| Địa chỉ, giờ mở cửa, số điện thoại, nút Google Maps | `partials/visit.html` |
| Chân trang, bản quyền | `partials/footer.html` |
| Màu sắc, font, bố cục toàn trang | `css/style.css` |
| Thay ảnh | `images/` (giữ nguyên tên file là khỏi sửa code) |

Thông tin đang dùng trên web (đã đối chiếu web live ngày 02/11/2026):

- Địa chỉ: Rua Frederico Arouca 41 A, Cascais
- Giờ: Seg–Sáb 08:00–21:00, Chủ nhật theo lịch hẹn
- Phone / WhatsApp: +351 913 440 980
- Nút Google Maps: link rút gọn gốc của web
  (https://maps.app.goo.gl/1NHgSxnDMhKRUUwT9?g_st=ic)

Lưu ý khi xem thử trên máy: trình duyệt chặn `fetch()` khi mở file trực tiếp,
nên chạy `python3 -m http.server 8000` trong thư mục này rồi mở
http://localhost:8000 — xem chi tiết trong `README.md`.
