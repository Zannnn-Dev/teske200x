# 🌟 Web Store Sederhana

![Website Preview](https://github.com/DikaMods)  
*Preview tampilan website*

## 📌 Overview

Website store sederhana untuk menampilkan produk dan metode pembayaran dalam **satu file HTML** saja. Dibangun dengan HTML, CSS, dan JavaScript.

## ✨ Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| �️ **Hero Section** | Dengan video background dinamis |
| 🌗 **Dark/Light Mode** | Tema yang bisa disesuaikan |
| 💳 **Metode Pembayaran** | Support DANA, GOPAY, QRIS |
| 🛒 **Kartu Produk** | Tampilan produk yang menarik |
| 📋 **Auto Copy** | Tombol salin nomor rekening otomatis |
| 📱 **Responsif** | Tampilan optimal di mobile & desktop |
| ✨ **Animasi** | Transisi dan efek yang smooth |

## 🚀 Panduan Instalasi

1. Clone repository:
   ```bash
   git clone https://github.com/DikaMods/WEB-STORE-SEDERHANA.git
   ```
2. Buka file `index.html` di browser favorit Anda

## ⚙️ Konfigurasi

### 🔧 Personalisasi Dasar
- **Nomor Rekening**: Edit di bagian HTML (cari `081318753654`)
- **Logo**: Ganti link di `<img src="https://pomf2.lain.la/f/b4k5if9w.png"`
- **QRIS**: Update di `<img src="https://raw.githubusercontent.com/NdikzDatabase/Database/main/Database/1756360247456-qs58aw.jpg"`

### 🖼 Customisasi Konten
```html
<!-- Contoh Produk -->
{
    id: "c1p1",
    name: "Nama Produk",
    price: "Rp 999.000",
    description: "Deskripsi produk Anda",
    image: "link-gambar-produk",
    checkoutUrl: "link-checkout"
}

<!-- Contoh Testimoni -->
{
    id: "t1",
    name: "Nama Klien",
    image: "link-foto-klien",
    alt: "Testimonial Klien"
}
```

### 🎨 Customisasi Tampilan
```css
/* Ganti warna tema */
:root {
    --primary-gradient: linear-gradient(to right, #a78bfa, #60a5fa);
}

/* Ganti video background */
<source src="link-video-baru.mp4" type="video/mp4">
```

## 📂 Struktur File
```
Web-payment-list/
└── index.html          # File utama (HTML+CSS+JS)
└── webnya.png          # Screenshot preview
```

## 💡 Tips & Trik
- Untuk video background, gunakan sumber gratis dari [Pexels](https://www.pexels.com/)
- Tambahkan metode pembayaran baru dengan menduplikasi elemen `<div class="payment-row">`
- Gunakan tool seperti [TinyPNG](https://tinypng.com/) untuk optimasi gambar

## 🙏 Credit
Dikembangkan oleh [DikaMods](https://github.com/Zannnn'Dev)  
Dibuat dengan ❤️ untuk komunitas open source

---

**🎉 Siap digunakan!** Cukup modifikasi sesuai kebutuhan Anda dan website siap di-deploy!
