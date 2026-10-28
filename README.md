# List Project Portfolio

Trang giới thiệu (landing page) liệt kê các mẫu website MC trong `Template_portfolio`.
HTML + CSS + JavaScript thuần: không cần cài đặt, không cần build.

## Xem thử

Mở trực tiếp file `index.html` bằng trình duyệt.

## Cấu trúc

| File | Nội dung |
|---|---|
| `index.html` | Hero tiêu đề lớn + danh sách thẻ dự án |
| `style.css` | Màu và font khai báo ở `:root` đầu file |
| `main.js` | Hiệu ứng chữ bay từ 2 bên vào giữa, thẻ hiện dần khi cuộn |

## Thêm / sửa một mẫu

Trong `index.html`, copy một khối `<li class="card"> … </li>` rồi sửa:

- `--tpl-bg`, `--tpl-fg`, `--tpl-font`: nền, màu chữ "Aa" và font của mẫu (font phải có trong link Google Fonts ở `<head>`)
- `href`: link GitHub Pages của mẫu
- số thứ tự, tên, mô tả, 3 ô màu `<i style="background:…">`

Nhớ thêm tên mẫu vào dải chữ chạy ngang (`.ticker__track`, 2 lần).

## Chỉnh hiệu ứng tiêu đề

Ở đầu `main.js`:

- `LINE_GAP`: khoảng cách thời gian giữa các dòng
- `CHAR_STAGGER`: độ trễ giữa các chữ cái

Hướng bay của mỗi dòng đặt bằng `data-from="left"` / `data-from="right"` trong `index.html`.

## Đưa lên GitHub Pages

Đẩy thư mục này lên một repo, vào **Settings → Pages → Source: Deploy from a branch**, chọn nhánh `main`, thư mục `/ (root)`.
