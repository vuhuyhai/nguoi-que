# NGƯỜI QUE

Công cụ dựng video hoạt hình người que từ một ý tưởng. Nhập một câu chủ đề, nhận về tiêu đề, kịch bản chia cảnh, hình minh hoạ, giọng đọc, phụ đề và một file video hoàn chỉnh.

Chạy hoàn toàn trong trình duyệt. Không có máy chủ, không có tài khoản, không thu thập gì.

**Dùng thử:** https://nguoi-que.netlify.app

---

## Bảy bước

| Bước | Việc |
|---|---|
| 01 Chủ đề | ngôn ngữ, giọng văn, thời lượng, giây mỗi cảnh, khung hình dọc hay ngang |
| 02 Tiêu đề | 5 gợi ý, bấm chọn hoặc tự viết |
| 03 Kịch bản | sửa lời đọc, sửa mô tả hình, thêm bớt và đổi thứ tự cảnh |
| 04 Hình ảnh | tạo bằng AI, hoặc tự tải ảnh của bạn lên |
| 05 Thumbnail | ảnh bìa |
| 06 Giọng đọc | đọc riêng từng cảnh, chốt một giọng cho cả bài |
| 07 Xuất | dựng video ngay tại chỗ, hoặc tải gói ZIP nguyên liệu |

Hỗ trợ tiếng Việt, tiếng Anh và tiếng Nhật.

---

## Cần chuẩn bị

Một API key của Google AI Studio. Lấy miễn phí tại https://aistudio.google.com/apikey

Mở app, bấm **Cài đặt** ở góc trên, dán key vào, bấm **Kiểm tra key**. App tự dò danh sách model còn dùng được theo key đó và chọn giúp.

Key nằm trong bộ nhớ trình duyệt trên máy bạn. Nó chỉ đi thẳng tới máy chủ của Google, không qua bất kỳ trung gian nào. Mã nguồn nằm cả trong repo này, đọc được để kiểm chứng.

**Bậc miễn phí của Google không cho tạo ảnh.** Chữ, giọng đọc và phụ đề chạy miễn phí. Riêng phần vẽ ảnh cần bật thanh toán cho dự án Google Cloud của key, hoặc dùng một trong hai cách khác bên dưới.

---

## Ba cách có ảnh

**1. Tự tải ảnh lên.** Mỗi cảnh có nút tải ảnh riêng. Không cần key, không cần gì thêm. Hợp với ai đã có sẵn bộ ảnh.

**2. API Gemini.** Cần key đã bật thanh toán. Bấm một nút, app vẽ hết các cảnh còn thiếu.

**3. Extension Chrome (tuỳ chọn).** Dùng tài khoản ChatGPT hoặc Gemini web của bạn thay cho API, không tốn hạn mức trả phí. Cần cài thêm extension, xem mục dưới.

Để loạt ảnh nhìn cùng một nét, vẽ một cảnh trước, thấy ưng thì bấm nút ngôi sao trên thẻ cảnh đó để chọn làm **ảnh mẫu**, rồi mới vẽ cả loạt. Các cảnh sau sẽ bám theo nét của ảnh mẫu.

---

## Dựng video

Bấm **Dựng video** ở bước 07. Trình duyệt tự vẽ từng khung, phát tiếng và quay lại thành file. Xong hiện ô xem thử, ưng thì lưu về máy.

Ra file **MP4** (H.264 + AAC) trên Chrome và Edge bản mới. Trình duyệt khác ra WebM, vẫn đăng lên YouTube, TikTok, Facebook được.

Chọn được trong Cài đặt:

| Mục | Có gì |
|---|---|
| Hiệu ứng chuyển cảnh | cắt thẳng · mờ dần · trượt ngang · xoá ngang · nháy trắng |
| Tiếng động chuyển cảnh | không · tách nhẹ · vút qua · gõ bút |
| Nhạc nền | file bất kỳ trên máy, tự lặp và tắt dần ở cuối |
| Phụ đề | dải riêng ở đáy, hoặc đè lên hình, hoặc tắt |

Hai điều cần biết:

- **Quay theo thời gian thật.** Video 60 giây mất 60 giây để quay. Trình duyệt không có cách quay nhanh hơn.
- **Giữ tab ở phía trước.** Chuyển sang tab khác thì hiệu ứng chuyển cảnh bị bỏ qua và hình có thể giật. App phát hiện được và báo lại.

Không muốn chờ thì bấm **Tải toàn bộ (.zip)** để lấy nguyên liệu rồi tự dựng bằng phần mềm khác.

---

## Trong gói ZIP

```
anh/canh-01.png …        ảnh từng cảnh
audio/canh-01.wav …      giọng đọc từng cảnh
audio/ca-bai.wav         ghép liền theo đúng dòng thời gian
phu-de.srt               phụ đề, mốc giờ lấy từ thời lượng giọng đọc thật
kich-ban.txt             kịch bản có mốc giờ
bang-dung.csv            bảng dựng, mở bằng Excel
du-an.json               mở lại sau
dung-video.bat           dựng bằng ffmpeg trên Windows
danh-sach-anh.txt        bảng thời lượng cho ffmpeg
thumbnail.png
```

`bang-dung.csv` là thứ đáng dùng nhất khi lên dòng thời gian trong phần mềm dựng: mỗi dòng một cảnh, có sẵn mốc bắt đầu, mốc kết thúc, tên file ảnh và tên file audio.

Hình, tiếng và phụ đề dùng chung một dòng thời gian nên luôn khớp nhau.

---

## Extension Chrome (tuỳ chọn)

Không bắt buộc. Nó chỉ thay cho phần API vẽ ảnh, giúp không tốn hạn mức trả phí.

Extension mở tab ChatGPT, gửi từng prompt, chờ vẽ, rồi bắn ảnh ngược về app và lấp thẳng vào lưới. Không phải chép prompt, không phải chọn thư mục.

Cài xong sẽ thấy dòng **"Extension ChatGPT đã nối"** ở bước 04 và nút đổi thành *Vẽ tự động bằng ChatGPT*.

> Extension chỉ tự nhận ra app ở những địa chỉ khai trong `manifest.json` của nó. Mặc định là `localhost` và `nguoi-que.netlify.app`. Tự dựng bản riêng ở tên miền khác thì thêm tên miền đó vào rồi tải lại extension.

Không cài extension thì khối đó vẫn hiện, ghi rõ là tuỳ chọn, và app tự lùi về API hoặc để bạn tải ảnh lên.

---

## Chạy tại máy

Không muốn dùng bản web thì tải repo về:

```bash
node may-chu.js
```

Mở `http://localhost:3020`. Trên Windows nhấp đúp `chay.bat` cũng được. Cần Node.js.

> Đừng mở thẳng `index.html` bằng cách nhấp đúp. Ở địa chỉ `file://`, trình duyệt chặn bộ nhớ lưu dự án nên đóng tab là mất hết.

---

## Kỹ thuật

Một file HTML. Không có bước build, không có `node_modules`, không có thư viện ngoài. Bộ ghi ZIP, bộ ghi WAV, bộ dựng video và bộ tạo tiếng động đều viết tay trong file.

| File | Việc |
|---|---|
| `index.html` | toàn bộ app |
| `may-chu.js` | máy chủ tĩnh, chỉ dùng khi chạy tại máy |
| `chay.bat` | nhấp đúp để chạy trên Windows |
| `netlify.toml` | cấu hình deploy và header bảo mật |

Dữ liệu lưu trong IndexedDB của trình duyệt, gồm cả ảnh và giọng đọc. Đóng tab mở lại vẫn còn. Cài đặt và API key lưu trong localStorage. Nút **Xoá toàn bộ dữ liệu trong máy** trong Cài đặt dọn sạch mọi thứ.

---

## Giấy phép

MIT. Xem [LICENSE](LICENSE).

---

Một sản phẩm của **Vũ Hải** — Vận hành Xuất sắc ngành Fitness.
Liên hệ: 0344 444 000 · fitnessviet@gmail.com · [facebook.com/vuhai.fitness](https://www.facebook.com/vuhai.fitness/)
