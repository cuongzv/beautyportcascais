# Beauty Port Cascais — Website (bản HTML tách phần)

Website tĩnh của salon Beauty Port Cascais, được tách từ code trang chủ đã gửi
ngày 02/11/2026, giữ nguyên giao diện teal như bản gốc. Không cần build, không
cần cơ sở dữ liệu: chỉ cần đưa các file này lên hosting là chạy.

- Trang chính (tiếng Bồ Đào Nha, PT): `/`
- Tiếng Ukraina (UA): `/uk/`
- Tiếng Anh (EN): `/en/`
- Bản xem trước trên GitHub Pages:
  `https://cuongzv.github.io/beautyportcascais/`
  (thêm `/uk/` hoặc `/en/` ở cuối để xem bản dịch)
- Domain chính: `https://beautyportcascais.com/`
  (cần nối Cloudflare Pages với repo này thì domain chính mới hiển thị bản mới)

## 1. Cấu trúc thư mục

```text
index.html              Khung trang PT: head, CSS, vị trí nạp các partial
uk/index.html           Khung trang UA (tương tự, dùng đường dẫn tương đối ../)
en/index.html           Khung trang EN (tương tự)
partials/               10 phần của trang PT
  header.html           Logo, menu, chuyển ngôn ngữ, nút Marcar
  hero.html             Ảnh bìa + tiêu đề chính
  services.html         6 dịch vụ: Cabelo, Cor, Unhas, Rosto, Massagem, Mais
  space.html            Phần "O espaço" (không gian salon)
  prices.html           Bảng giá, 14 nhóm tab
  portfolio.html        Ảnh portfolio + lightbox
  team.html             9 thành viên team + dịch vụ tại nhà
  contact.html          5 kênh liên hệ
  visit.html            Địa chỉ, giờ mở cửa, nút gọi / Maps
  footer.html           Footer + nút Marcar trên mobile
uk/partials/            10 partial tương ứng, bằng tiếng Ukraina
en/partials/            10 partial tương ứng, bằng tiếng Anh
css/style.css           CSS duy nhất đang chạy (CSS gốc của site live, bản teal)
js/loader.js            Nạp các partial vào khung trang
js/main.js              Logic dùng chung: tab giá, portfolio/lightbox, tracking click liên hệ
image-site/             Ảnh dùng chung: logo, ảnh hero, ảnh portfolio, ảnh space/team
beauty-port-logo.svg    BẮT BUỘC GIỮ LẠI ở thư mục gốc (CSS dùng làm họa tiết nền mờ)
favicon.svg             Favicon của site
```

## 2. Nguyên tắc hoạt động — đọc trước khi sửa

1. **Khung + partial:** `index.html` chỉ là khung. Nội dung thật nằm trong
   `partials/`. `js/loader.js` nạp các partial vào khung rồi mới chạy
   `js/main.js`.
2. **Dùng chung 1 bộ, dịch 3 nơi:** CSS, JavaScript và ảnh chỉ có 1 bộ, sửa 1
   lần là cả 3 ngôn ngữ cùng đổi. Ngược lại, **chữ và nội dung phải sửa ở cả
   3 nơi** (`partials/`, `uk/partials/`, `en/partials/`).
3. **Không chèn `<script>` vào partial:** script nằm trong partial nạp bằng
   fetch sẽ không tự chạy. Muốn thêm logic, sửa trong `js/main.js`.
4. **Không dùng chung với bộ kit cream/bronze cũ:** CSS và class của 2 bản
   khác nhau hoàn toàn. Bản này chỉ dùng `css/style.css` (teal).
5. **Không mở `index.html` trực tiếp bằng `file://`:** trình duyệt sẽ chặn nạp
   partial. Muốn xem thử trên máy, chạy server cục bộ trong thư mục này rồi mở
   `http://localhost:8000/`:
   ```bash
   python3 -m http.server 8000
   ```

## 3. Sửa nội dung — mở file nào

| Muốn sửa | Mở file (sửa cả 3 ngôn ngữ nếu là chữ) |
|---|---|
| Giá một dịch vụ | `prices.html` — tìm đúng nhóm tab (ví dụ "Cortes Femininos"), sửa dòng tên dịch vụ và `<strong>giá €</strong>` tương ứng |
| Tên / mô tả dịch vụ | `services.html` |
| Tiêu đề, ảnh hero | `hero.html`; thay ảnh thì chép file mới vào `image-site/` rồi đổi tên file trong đó |
| Ảnh portfolio | `portfolio.html` — ảnh lấy từ `image-site/` |
| Thành viên team | `team.html` |
| Số điện thoại / WhatsApp | Sửa cả 2 chỗ: `contact.html` (link `wa.me/…`, `tel:+…`, số hiển thị) và `visit.html` (số hiển thị + link `tel:`) |
| Địa chỉ, giờ mở cửa | `visit.html` |
| Link Instagram / Telegram / Maps | `contact.html` |
| Màu, font, bố cục | `css/style.css` — chỉ sửa khi thật cần, vì đây là CSS gốc của site live |
| Logic tab giá / portfolio / tracking | `js/main.js` |

Thông tin liên hệ hiện tại (để đối chiếu khi sửa):

- WhatsApp / Điện thoại: +351 913 440 980 (`https://wa.me/351913440980`)
- Instagram: @beautyport.cascais
- Telegram: @alyona_filonenko
- Google Maps: `https://maps.app.goo.gl/1NHgSxnDMhKRUUwT9?g_st=ic`
- Địa chỉ: Rua Frederico Arouca 41 A, Cascais
- Giờ mở cửa: Thứ 2 – Thứ 7: 08:00–21:00, Chủ nhật: theo lịch hẹn

## 4. Thêm mới

### Thêm một dịch vụ / một dòng giá

1. Thêm dòng giá vào nhóm tab tương ứng trong `prices.html` (cả 3 ngôn ngữ).
2. Nếu là dịch vụ lớn, thêm 1 bài viết vào `services.html` (cả 3 ngôn ngữ).

### Thêm một nhóm tab giá mới

1. Copy nguyên 1 nút tab và 1 `<section class="inline-price-panel">` trong
   `prices.html`, đổi số thứ tự và id cho khớp nhau.
2. Làm tương tự ở bản UA và EN.

### Thêm ảnh portfolio

1. Chép file ảnh (nên dùng WebP, đã nén nhẹ) vào `image-site/`.
2. Thêm 1 ô `<img>` trỏ tới file đó trong `portfolio.html` (cả 3 ngôn ngữ,
   vì portfolio dùng chung ảnh nhưng mỗi ngôn ngữ có 1 file partial riêng).

### Thêm thành viên team

Thêm 1 khối thành viên vào `team.html` (cả 3 ngôn ngữ), kèm ảnh trong
`image-site/` nếu có.

## 5. Hình ảnh

- Ảnh nên nén trước khi up: mỗi ảnh WebP vài trăm KB là đủ đẹp cho web.
  Đừng up ảnh gốc nặng, video, hay file RAW vào repo — repo và site đều có
  giới hạn 1 GB, và ảnh nặng làm trang load chậm.
- Tên file ảnh trong `image-site/` là tên gốc đã có sẵn trong repo, đừng đổi
  tên hàng loạt nếu không đổi kèm đường dẫn trong các partial.
- Ảnh space và ảnh team hiện dùng file trong `image-site/` của repo này.
- **Không xóa:** `beauty-port-logo.svg` ở thư mục gốc và `css/style.css`.
  Xóa 2 file này là mất họa tiết nền và toàn bộ giao diện.

## 6. Những dòng nhạy cảm — bắt buộc kiểm tra khi nhân bản hoặc lên domain chính

Trong code, các dòng này đã có chú thích `KHI NHÂN BẢN` ngay phía trên để khỏi
quên. Bảng dưới đây tóm tắt giá trị hiện tại và việc cần làm:

| Dòng | File | Giá trị hiện tại | Khi nào phải đổi |
|---|---|---|---|
| `robots` | `index.html`, `uk/index.html`, `en/index.html` | `noindex, nofollow` | **Bắt buộc bỏ** khi đưa lên domain chính, nếu không Google sẽ không index web |
| `canonical` | 3 khung trang | `https://example.com/` (+ `/uk/`, `/en/`) | **Bắt buộc đổi** thành `https://beautyportcascais.com/` (+ `/uk/`, `/en/`) khi lên domain chính |
| `og:url` | 3 khung trang | `https://example.com/` (+ `/uk/`, `/en/`) | Đổi cùng với `canonical` |
| Google Ads `gtag` | 3 khung trang | `AW-18306026037` | Giữ nguyên nếu vẫn chạy Ads cho salon này; đổi sang mã tài khoản Ads mới nếu đổi tài khoản |
| Cloudflare Insights beacon | 3 khung trang | token `feaf43d132af4a53b01e6fa3b353b29c` | Đổi token nếu đổi tài khoản Cloudflare; xóa cũng được, web vẫn chạy |
| Chuyển đổi Ads `send_to` | `js/main.js` | `AW-18306026037/ftDqCPqBofBcELWU_5hE` | Đổi **cả chuỗi** (mã tài khoản + mã hành động) khi sang tài khoản Ads khác; chỉ đổi đúng dòng `send_to`, các dòng `event_category`, `event_label`, `event_callback`, `event_timeout` giữ nguyên. File này dùng chung cho cả 3 ngôn ngữ nên đổi 1 lần là đủ |
| Tên salon, số điện thoại, địa chỉ, link liên hệ, logo, ảnh | Các partial `contact.html`, `visit.html`, `team.html` (3 ngôn ngữ) | Thông tin của Beauty Port Cascais | Chỉ đổi khi nhân bản cho một salon khác, không phải khi chỉ đổi domain |

Lưu ý khi nhân bản cho salon khác: đừng để 2 domain chạy cùng 1 nội dung mà cả
2 đều là domain chính. Chọn 1 domain chính, domain còn lại chuyển hướng về
domain chính để tránh trùng lặp nội dung trên Google.

## 7. Checklist trước khi đưa lên domain chính

- [ ] Đã bỏ `noindex, nofollow` trong cả 3 khung trang.
- [ ] Đã đổi `canonical` và `og:url` sang domain chính (PT, UA, EN đúng đường dẫn).
- [ ] Đã kiểm tra mã Ads / beacon còn đúng tài khoản đang dùng không.
- [ ] Đã deploy và kiểm tra trên domain chính: bấm menu PT → UA → EN, thử 1
      tab giá, thử portfolio/lightbox, thử nút WhatsApp / gọi điện.
- [ ] Đã kiểm tra trên điện thoại: nút Marcar, menu mobile, ảnh không bị vỡ.

## 8. Deploy

- **GitHub Pages (bản xem trước):** mỗi lần push lên nhánh `main` là GitHub
  tự deploy lại. Không cần lệnh build.
- **Cloudflare Pages (domain chính):** nối project Pages với repo này, nhánh
  `main`, không cần lệnh build, thư mục output là thư mục gốc (`/`).
- **Chuyển domain sang tài khoản Cloudflare khác:** việc chuyển đăng ký domain
  là riêng, không tự động chuyển code hay project Pages theo. Sau khi chuyển
  domain xong vẫn phải nối lại Pages và kiểm tra DNS, custom domain.

## 9. Những việc không làm

- Không chèn `<script>` vào partial.
- Không thay `css/style.css` bằng CSS của bộ kit cũ.
- Không xóa `beauty-port-logo.svg` ở thư mục gốc, `css/style.css`,
  `js/loader.js`, `js/main.js`.
- Không sửa giá trị trong `js/main.js` ngoài dòng `send_to` khi đổi tài khoản Ads.
- Không chạy quảng cáo Google Ads khi web chính vẫn chưa hiển thị bản mới.

## 10. File thừa trong repo

- `style.css` ở thư mục gốc là file CSS cũ từ lúc up file đơn lên, hiện không
  còn trang nào dùng tới (cả 3 khung trang đều dùng `css/style.css`). Xóa file
  này không ảnh hưởng tới web. Ngược lại, **đừng xóa `css/style.css`**.

---

*Cập nhật: 02/11/2026 — theo đúng bản 3 ngôn ngữ (PT / UA / EN) đang chạy trên
repo này. Khi sửa web, sửa xong nhớ cập nhật lại bảng ở mục 6 nếu mã Ads,
beacon hay số điện thoại thay đổi.*
