# 黄金世代 Golden Generation: Mading 1998

Portal penggemar **Uma Musume: Pretty Derby** bertema Jepang era 1998. Halaman utamanya berupa **mading (papan pengumuman) lawas**, dan tiap karakter punya halaman **scrapbook** sendiri.

> Fan project non-komersial. Tidak berafiliasi dengan Cygames, Inc.

## Fitur

- **Home mading**: papan gabus dengan polaroid anggota (filter taktik), duel dua karakter, sejarah gelar G1, dan tabel data.
- **5 halaman scrapbook**: Special Week, Grass Wonder, El Condor Pasa, Seiun Sky, King Halo. Tiap halaman punya pola kertas, stiker, dan catatan sesuai kepribadian karakter.
- **Tema siang/malam**: tombol ☀️/🌙 mengubah langit (matahari dan awan / bulan, bintang, kunang-kunang), pencahayaan, dan teks "vibes" karakter. Pilihan tersimpan di `localStorage`.
- **Animasi**: loading screen ala Windows 98, transisi antarhalaman, teks mengetik, elemen muncul saat scroll, angka naik, progress bar scroll.
- Tanpa framework dan tanpa proses build: HTML, CSS, dan JavaScript murni.

## Struktur

| File | Fungsi |
|---|---|
| `index.html` | Home mading (data 5 anggota ada di dalamnya) |
| `specialweek.html`, `grasswonder.html`, `elcondorpasa.html`, `seiunsky.html`, `kinghalo.html` | Halaman karakter: berisi data `window.D`, lalu dirender oleh `char.js` |
| `char.js` | Template scrapbook karakter |
| `jadul.css` | Gaya tema 1998 (papan, kertas, siang/malam) |
| `jadul.js` | Tema siang/malam, langit, animasi scroll |
| `loader.js` | Loading screen dan transisi halaman |

## Menjalankan

Buka `index.html` langsung di browser, atau jalankan server lokal:

```bash
python3 -m http.server 8000
# lalu buka http://localhost:8000
```

Dibutuhkan koneksi internet untuk Google Fonts, Font Awesome (CDN), dan gambar karakter dari Uma Musume Wiki.

## Deploy ke GitHub Pages

1. Push semua file ke repository.
2. Buka **Settings → Pages**.
3. Pada *Source*, pilih **Deploy from a branch**, lalu branch `main` dan folder `/ (root)`.
4. Simpan. Situs aktif di `https://<username>.github.io/<nama-repo>/`.

## Menambah atau mengubah karakter

Salin salah satu halaman karakter, lalu ubah objek `window.D` di dalamnya (nama, bio, kostum, hubungan, trivia). Bagian `deco` mengatur stiker (`st`), pola kertas (`pat`), dan catatan vibes siang/malam (`day`, `night`). Tambahkan juga datanya di array `G` pada `index.html` dan di daftar `pages` pada `char.js`.

## Kredit

- Data karakter: Uma Musume Official Wiki.
- Karakter dan gambar © Cygames, Inc.
- Dibuat oleh [@Finwahyu](https://github.com/Finwahyu).

## Lisensi

Kode dilisensikan MIT (lihat `LICENSE`). Aset karakter tetap milik pemegang hak ciptanya.
