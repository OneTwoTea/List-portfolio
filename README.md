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

## Danh sách mẫu đã deploy

| # | Thư mục | Tên | Repo | Trang |
|---|---|---|---|---|
| 0 | `Temp_main` | Burgundy Classic | [mc-portfolio-main](https://github.com/OneTwoTea/mc-portfolio-main) | [Xem](https://onetwotea.github.io/mc-portfolio-main/) |
| 1 | `Temp1` | Pastel Light | [mc-portfolio-temp1](https://github.com/OneTwoTea/mc-portfolio-temp1) | [Xem](https://onetwotea.github.io/mc-portfolio-temp1/) |
| 2 | `Temp2` | Paper Pop | [mc-portfolio-temp2](https://github.com/OneTwoTea/mc-portfolio-temp2) | [Xem](https://onetwotea.github.io/mc-portfolio-temp2/) |
| 3 | `Temp3` | Spotlight | [mc-portfolio-temp3](https://github.com/OneTwoTea/mc-portfolio-temp3) | [Xem](https://onetwotea.github.io/mc-portfolio-temp3/) |
| 4 | `Temp4` | Video Text Mask | [mc-portfolio-temp4](https://github.com/OneTwoTea/mc-portfolio-temp4) | [Xem](https://onetwotea.github.io/mc-portfolio-temp4/) |
| 5 | `Temp5` | Xenon Follow-Spot | [mc-portfolio-temp5](https://github.com/OneTwoTea/mc-portfolio-temp5) | [Xem](https://onetwotea.github.io/mc-portfolio-temp5/) |
| 6 | `Temp6` | Prism Aurora | [mc-portfolio-temp6](https://github.com/OneTwoTea/mc-portfolio-temp6) | [Xem](https://onetwotea.github.io/mc-portfolio-temp6/) |
| 7 | `Temp7` | Bento Board | [mc-portfolio-temp7](https://github.com/OneTwoTea/mc-portfolio-temp7) | [Xem](https://onetwotea.github.io/mc-portfolio-temp7/) |
| 8 | `Temp8` | Thiệp Mời | [mc-portfolio-temp8](https://github.com/OneTwoTea/mc-portfolio-temp8) | [Xem](https://onetwotea.github.io/mc-portfolio-temp8/) |

### Deploy một mẫu mới (`TempN`)

Mỗi `TempN` là một repo riêng, build bằng GitHub Actions (`.github/workflows/deploy.yml` → `npm run build` → đăng `dist/`).

```bash
cd TempN
git init -b main && git add -A && git commit -m "Initial commit"
gh repo create OneTwoTea/mc-portfolio-tempN --public --source=. --remote=origin --push
gh api -X POST repos/OneTwoTea/mc-portfolio-tempN/pages -f build_type=workflow
```

Hoặc trên web: **Settings → Pages → Source: GitHub Actions**. Sau 1–2 phút trang có ở
`https://onetwotea.github.io/mc-portfolio-tempN/`. Rồi thêm thẻ vào `index.html` và một dòng vào bảng trên.

## Đưa trang List lên GitHub Pages

Đẩy thư mục này lên một repo, vào **Settings → Pages → Source: Deploy from a branch**, chọn nhánh `main`, thư mục `/ (root)`.
