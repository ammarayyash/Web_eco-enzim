# Eco Enzim Rumahan - Landing Page

File ini adalah landing page statis untuk promosi Eco Enzim Dusun Demangan.

Cara menambahkan foto sendiri dan mengganti video YouTube

1) Menambahkan foto produk / galeri
- Lokasi file gambar placeholder: `assets/images/`.
- Cara cepat (tanpa edit HTML): buka halaman, klik foto placeholder, pilih file gambar dari komputer. Browser akan menampilkan preview langsung.
- Cara permanen (untuk dihosting): ganti file placeholder dengan gambar Anda sendiri menggunakan nama file yang sama, mis. `product-placeholder.svg` atau edit `index.html` dan ubah `src` atribut pada tag `<img>` ke nama file Anda.

2) Menambahkan/ mengganti video YouTube
- Tekan tombol "Ganti Video" di bawah video, lalu tempelkan URL video YouTube (mis. `https://www.youtube.com/watch?v=VIDEO_ID`).
- Atau edit `index.html` lalu ganti `src` pada elemen `<iframe id="video-iframe">` dengan `https://www.youtube.com/embed/VIDEO_ID`.

3) Mengatur nomor WhatsApp koordinasi
- Edit `data-phone` pada elemen `#whatsapp-btn` di `index.html` dan tulis nomor dengan kode negara (mis. `+628123456789`). Contoh:

  <a id="whatsapp-btn" data-phone="+628123456789">Hubungi Pengurus PKK</a>

4) Menjalankan lokal
- Buka `index.html` di browser (double-click) atau jalankan simple HTTP server di folder ini:

```bash
# Python 3
python -m http.server 8000
# lalu buka http://localhost:8000
```

File yang dibuat:
- `index.html` — halaman utama
- `assets/css/styles.css` — gaya
- `assets/js/script.js` — interaksi (ganti foto, ganti video, WA)
- `assets/images/*` — placeholder gambar

Jika mau, saya bisa: menambahkan form pendaftaran, menyiapkan versi cetak poster, atau membantu men-deploy ke GitHub Pages. Mau lanjut ke langkah mana?