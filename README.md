# Eco Enzim Rumahan - Landing Page

File ini adalah landing page statis untuk promosi Eco Enzim Dusun Demangan.

## Cara menambahkan foto, logo, dan video

### 1) Menambahkan foto dan logo
- Simpan file gambar Anda di folder `assets/images/`.
- Untuk foto produk, gunakan file seperti `product.jpg` atau `product.webp`.
- Untuk logo, gunakan file seperti `logo.png` atau `logo.svg`.
- Setelah itu, edit file [index.html](index.html) dan ubah `src` pada elemen gambar sesuai nama file Anda.

Contoh:
```html
<img src="assets/images/logo.png" alt="Logo Eco Enzim">
```

### 2) Agar hanya pemilik yang bisa ubah saat preview lokal
- Buka halaman dengan query tambahan:
```text
?owner=demangan2026
```
- Setelah itu akan muncul panel “Mode pemilik” di atas halaman.
- Pilih tombol yang sesuai untuk mengubah logo, foto produk, atau galeri.
- Perubahan ini hanya berlaku di browser Anda saat preview lokal.

> Untuk agar semua orang yang membuka link bisa melihat gambar baru, Anda harus mengganti file gambar asli di folder `assets/images/` lalu upload/commit/deploy ulang ke Cloudflare Pages.

### 3) Menambahkan video YouTube
- Tekan tombol “Ganti Video YouTube” di bawah video, lalu tempel URL YouTube.
- Atau edit [index.html](index.html) dan ganti `src` pada elemen `<iframe id="video-iframe">`.

### 4) Mengatur nomor WhatsApp koordinasi
- Edit atribut `data-phone` pada tombol WhatsApp di [index.html](index.html).

### 5) Menjalankan lokal
Ada beberapa cara:

1. Pakai Python (sederhana dan cocok untuk file statis)
```bash
python -m http.server 8000
```
Lalu buka:
```text
http://localhost:8000
```

2. Pakai XAMPP / Apache
- Jalankan Apache di XAMPP.
- Pindahkan folder project ke `C:\xampp\htdocs\`.
- Buka browser ke:
```text
http://localhost/Web_eco-enzim/
```

3. Kalau muncul `refused to connect`
- Pastikan server sudah berjalan.
- Cek apakah port yang dipakai sudah benar, misalnya `8000` atau `80`.
- Jika pakai Python, pastikan command berjalan tanpa error.
- Jika pakai XAMPP, pastikan Apache statusnya Running.

> Jika port 8000 tidak bisa dipakai, coba `python -m http.server 8080` lalu buka `http://localhost:8080`.

### 6) Deploy ke Cloudflare Pages
- Pastikan folder `assets/images/` berisi file gambar yang ingin dipakai.
- Push ke GitHub/GitLab/Bitbucket.
- Deploy ulang di Cloudflare Pages.

File utama:
- [index.html](index.html)
- [assets/css/styles.css](assets/css/styles.css)
- [assets/js/script.js](assets/js/script.js)
- [assets/images](assets/images)
