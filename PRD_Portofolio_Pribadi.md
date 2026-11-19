# Product Requirements Document (PRD)

## Website Portofolio Pribadi --- Web Developer & UI/UX Enthusiast

**Versi:** 1.0\
**Status:** Draft awal / Tahap 1\
**Platform:** Website statis, responsif\
**Target deployment:** GitHub Pages

------------------------------------------------------------------------

## 1. Ringkasan Produk

Website portofolio pribadi merupakan website statis satu halaman
(*single-page portfolio*) yang berfungsi memperkenalkan identitas
profesional, latar belakang, dan kompetensi teknis pemilik website
kepada dosen, rekan komunitas, serta rekruter magang.

Website dibangun menggunakan HTML5 semantik, Tailwind CSS melalui CDN
resmi, dan Vanilla JavaScript tanpa framework JavaScript berat. Struktur
awal pada tahap pertama berfokus pada kerangka halaman dan kesan
profesional dalam 10 detik pertama setelah halaman dibuka.

### 1.1 Latar Belakang

Portofolio digital dibutuhkan sebagai media representasi kemampuan dan
identitas profesional mahasiswa Sistem Informasi. Website harus mampu
menyampaikan informasi utama secara cepat, mudah dipindai, dan tetap
nyaman digunakan pada perangkat desktop maupun mobile.

### 1.2 Tujuan Produk

1.  Memperkenalkan identitas pemilik website secara profesional.
2.  Menampilkan peran sebagai **Web Developer & UI/UX Enthusiast**.
3.  Menjelaskan latar belakang singkat melalui bagian Tentang Saya.
4.  Menampilkan kompetensi teknis melalui bagian Keahlian.
5.  Menyediakan navigasi yang jelas menuju bagian Proyek dan Kontak
    sebagai area pengembangan berikutnya.
6.  Menghasilkan website statis yang mudah dipelihara dan di-deploy
    melalui GitHub Pages.

### 1.3 Indikator Keberhasilan

-   Pengunjung dapat mengenali nama, peran, dan fokus keahlian pemilik
    dalam sekitar 10 detik.
-   Seluruh navigasi utama dapat digunakan, termasuk menu hamburger pada
    layar kecil.
-   Konten terbaca dan tata letak tetap berfungsi pada ponsel, tablet,
    dan desktop.
-   Tidak ada kesalahan JavaScript yang mengganggu fungsi halaman.
-   Website dapat dibuka melalui GitHub Pages tanpa proses build atau
    server backend.

------------------------------------------------------------------------

## 2. Target Pengguna

  -----------------------------------------------------------------------
  Pengguna                            Kebutuhan utama
  ----------------------------------- -----------------------------------
  Dosen                               Melihat identitas, latar belakang
                                      akademik, dan kompetensi mahasiswa.

  Rekan komunitas SIKOKI              Mengenal fokus teknis dan minat
                                      pengembangan pemilik portofolio.

  Rekruter magang                     Memahami profil, peran, dan
                                      kompetensi awal kandidat secara
                                      cepat.

  Pengunjung umum                     Menjelajahi profil dan menemukan
                                      informasi lanjutan dengan mudah.
  -----------------------------------------------------------------------

### 2.1 Skenario Penggunaan

1.  Pengunjung membuka halaman portofolio.
2.  Pengunjung melihat nama, peran, deskripsi singkat, foto profil, dan
    tombol CTA pada Hero Section.
3.  Pengunjung memilih navigasi Tentang atau Keahlian untuk membaca
    informasi lebih lanjut.
4.  Pengunjung menggunakan menu Proyek atau Kontak sebagai jalur menuju
    bagian yang akan dikembangkan pada tahap selanjutnya.

------------------------------------------------------------------------

## 3. Ruang Lingkup

### 3.1 Cakupan Tahap 1

Tahap pertama hanya membangun kerangka dan konten awal untuk empat area
berikut:

1.  Navbar lengket (*sticky navigation*).
2.  Hero Section.
3.  Tentang Saya (*About*).
4.  Keahlian (*Tech Stack*).

### 3.2 Di Luar Cakupan Tahap 1

Fitur berikut belum perlu diimplementasikan secara penuh pada tahap
pertama:

-   Daftar dan detail proyek.
-   Formulir kontak yang mengirim pesan ke server.
-   Blog atau artikel.
-   CMS atau dashboard admin.
-   Backend, database, autentikasi, dan API.
-   Animasi kompleks atau library JavaScript tambahan.

Menu **Proyek** dan **Kontak** tetap ditampilkan pada navbar sebagai
struktur navigasi untuk tahap pengembangan berikutnya. Selama section
terkait belum tersedia, tautan dapat diarahkan ke placeholder yang jelas
atau dibiarkan sebagai item nonaktif yang tidak menyesatkan pengguna.
Jangan membuat tautan mati tanpa penanganan.

------------------------------------------------------------------------

## 4. Struktur Halaman dan Persyaratan Fungsional

### 4.1 Navbar

**Tujuan:** Menyediakan identitas singkat dan akses cepat ke bagian
utama website.

**Elemen:** - Logo teks berupa nama pemilik website di sisi kiri. - Menu
navigasi di sisi kanan: Tentang, Keahlian, Proyek, dan Kontak. - Tombol
hamburger untuk tampilan mobile. - Navbar menggunakan posisi `sticky` di
bagian atas halaman. - Latar navbar selaras dengan tema gelap dan
memiliki pembeda visual yang halus, misalnya transparansi atau blur.

**Persyaratan fungsional:** - Klik menu Tentang menggulir ke section
About. - Klik menu Keahlian menggulir ke section Tech Stack. - Menu
Proyek dan Kontak disiapkan untuk section tahap berikutnya. - Pada layar
mobile, tombol hamburger membuka dan menutup menu navigasi. - Menu
mobile tertutup setelah salah satu tautan navigasi dipilih. - Tombol
hamburger memiliki `aria-label`, `aria-expanded`, dan hubungan ke panel
menu melalui `aria-controls`. - Navigasi tetap dapat digunakan dengan
keyboard.

**Kriteria penerimaan:** - Navbar tetap berada di bagian atas saat
halaman digulir. - Tidak terjadi tumpang tindih antara navbar dan judul
section ketika navigasi anchor digunakan. - Menu mobile dapat dibuka,
ditutup, dan dipilih dengan baik.

### 4.2 Hero Section

**Tujuan:** Menyampaikan identitas dan nilai profesional pemilik secara
cepat.

**Elemen konten:** - Sapaan singkat, misalnya "Halo, saya". - Nama
lengkap pemilik website --- gunakan placeholder sampai nama final
dimasukkan. - Peran: **Web Developer & UI/UX Enthusiast**. - Deskripsi
singkat maksimal dua kalimat. - Tombol CTA dengan label **"Lihat
Proyek"**. - Foto profil dalam bingkai berbentuk lingkaran.

**Persyaratan tampilan:** - Nama menjadi elemen teks paling menonjol. -
Peran dan deskripsi memiliki hierarki visual yang jelas. - Aksen emerald
dan cyan digunakan secara terukur untuk menekankan informasi penting. -
Foto profil memiliki ukuran dan pemotongan yang konsisten
(`object-fit: cover`). - Pada desktop, teks dan foto dapat disusun
berdampingan; pada mobile, susunan berubah menjadi satu kolom.

**Persyaratan fungsional:** - CTA "Lihat Proyek" mengarah ke section
Proyek ketika section tersebut tersedia. - Jika section Proyek belum
dibuat, CTA tidak boleh mengarah ke `#` tanpa perilaku yang jelas.
Gunakan anchor placeholder yang direncanakan atau tandai fitur sebagai
belum tersedia sampai tahap berikutnya.

**Kriteria penerimaan:** - Pengunjung dapat mengenali nama dan peran
tanpa harus menggulir halaman. - Deskripsi tidak lebih dari dua
kalimat. - Foto profil tampil proporsional dan tidak terdistorsi.

### 4.3 Tentang Saya (About)

**Tujuan:** Memberikan konteks singkat mengenai latar belakang akademik,
minat, dan aktivitas pemilik.

**Informasi yang disiapkan:** - Status sebagai mahasiswa Program Studi
Sistem Informasi semester 5. - Universitas Nusantara PGRI Kediri. -
Keterlibatan dalam komunitas koding SIKOKI. - Minat pada pengembangan
web dan UI/UX. - Ringkasan tujuan belajar atau arah pengembangan
profesional.

**Persyaratan konten:** - Ditulis dalam bahasa Indonesia yang
profesional, natural, dan ringkas. - Fokus pada informasi yang relevan
bagi dosen, komunitas, dan rekruter. - Hindari klaim keahlian atau
pengalaman yang belum dapat dibuktikan.

**Kriteria penerimaan:** - Informasi akademik dan minat utama dapat
dipahami dengan cepat. - Teks mudah dibaca dan tidak menjadi satu blok
paragraf yang terlalu panjang.

### 4.4 Keahlian (Tech Stack)

**Tujuan:** Memperlihatkan teknologi dan kompetensi yang sedang dikuasai
atau dipelajari.

**Konten awal yang disarankan:** - HTML5 - CSS3 - Tailwind CSS -
JavaScript - Git dan GitHub - UI/UX Design

Daftar tersebut merupakan konten awal yang perlu dikonfirmasi dan
disesuaikan dengan kemampuan aktual pemilik website.

**Persyaratan tampilan:** - Setiap keahlian ditampilkan dalam kartu atau
elemen visual yang konsisten. - Kartu menggunakan permukaan slate-900
dan border slate-800. - Ikon atau label teknologi harus mudah
dikenali. - Susunan kartu menggunakan grid responsif. - Jangan
menampilkan persentase kemampuan tanpa dasar pengukuran yang jelas.

**Kriteria penerimaan:** - Semua item keahlian terbaca pada desktop dan
mobile. - Kartu memiliki kontras yang memadai dan gaya visual
konsisten. - Konten mudah ditambah atau diubah melalui HTML.

------------------------------------------------------------------------

## 5. Persyaratan Desain UI/UX

### 5.1 Arah Visual

Tema utama adalah **elegant dark mode** dengan kesan modern, minimalis,
dan profesional.

  Elemen                   Spesifikasi
  ------------------------ --------------------------
  Latar utama              `slate-950`
  Permukaan kartu          `slate-900`
  Border                   `slate-800`
  Aksen utama              `emerald-400`
  Aksen sekunder           `cyan-400`
  Judul                    Plus Jakarta Sans
  Paragraf dan teks umum   Inter
  Ikon                     Lucide Icons melalui CDN

### 5.2 Tipografi

-   Gunakan Google Fonts **Plus Jakarta Sans** untuk judul dan heading.
-   Gunakan **Inter** untuk paragraf, label, navigasi, dan teks umum.
-   Terapkan ukuran, ketebalan, dan jarak baris secara konsisten.
-   Pastikan teks tetap nyaman dibaca pada layar kecil.

### 5.3 Layout dan Responsivitas

-   Gunakan pendekatan *mobile-first*.
-   Konten memiliki lebar maksimum agar baris teks tidak terlalu
    panjang.
-   Gunakan container dengan padding horizontal yang konsisten.
-   Hero, About, dan Tech Stack harus menyesuaikan lebar viewport.
-   Hindari horizontal scrolling pada ukuran layar umum.
-   Sediakan ruang vertikal yang cukup antar-section.

**Breakpoint acuan Tailwind CSS:** - `sm`: 640px - `md`: 768px - `lg`:
1024px - `xl`: 1280px

Breakpoint dapat disesuaikan berdasarkan hasil pengujian layout, bukan
sekadar mengikuti angka secara kaku.

### 5.4 Aksesibilitas

-   Gunakan elemen HTML semantik seperti `header`, `nav`, `main`,
    `section`, dan `footer` bila diperlukan.
-   Gunakan satu `h1` utama untuk nama pemilik pada Hero Section.
-   Pastikan urutan heading logis.
-   Semua gambar memiliki teks alternatif (`alt`) yang sesuai.
-   Tombol dan tautan memiliki nama yang jelas.
-   Sediakan indikator fokus keyboard yang terlihat.
-   Pastikan kontras teks dan latar memadai.
-   Ikon dekoratif diberi `aria-hidden="true"`; ikon yang menyampaikan
    fungsi harus memiliki label aksesibel.
-   Hormati preferensi `prefers-reduced-motion` jika transisi atau
    animasi digunakan.

------------------------------------------------------------------------

## 6. Persyaratan Teknis

### 6.1 Teknologi

  -----------------------------------------------------------------------
  Teknologi                           Penggunaan
  ----------------------------------- -----------------------------------
  HTML5                               Struktur dokumen dan elemen
                                      semantik.

  Tailwind CSS CDN resmi              Utility styling dan responsive
                                      layout.

  Vanilla JavaScript                  Interaksi menu hamburger dan
                                      perilaku UI sederhana.

  Google Fonts                        Pemuatan Plus Jakarta Sans dan
                                      Inter.

  Lucide Icons CDN                    Ikon navigasi dan elemen antarmuka.

  GitHub Pages                        Hosting website statis.
  -----------------------------------------------------------------------

### 6.2 Struktur File

``` text
portfolio/
├── index.html
└── script.js
```

Aset tambahan seperti foto profil dapat ditambahkan kemudian. Jika aset
lokal digunakan, struktur dapat dikembangkan menjadi:

``` text
portfolio/
├── index.html
├── script.js
└── assets/
    └── profile.jpg
```

### 6.3 Ketentuan Implementasi

-   Seluruh struktur halaman berada di `index.html`.
-   Interaksi JavaScript berada di `script.js`.
-   Gunakan HTML5 semantik dan hindari penggunaan elemen hanya demi
    styling.
-   Gunakan Tailwind CSS melalui CDN resmi sesuai dokumentasi yang
    berlaku.
-   Muat `script.js` dengan `defer` agar parsing HTML tidak terhambat.
-   Hindari framework JavaScript seperti React, Vue, atau Angular.
-   Hindari dependensi yang tidak diperlukan.
-   Gunakan `id` yang unik untuk setiap section tujuan navigasi.
-   Berikan komentar HTML singkat pada awal setiap section agar mudah
    dipelajari.
-   Pastikan seluruh resource eksternal menggunakan URL HTTPS.
-   Jangan menyimpan data rahasia atau kredensial di dalam file
    frontend.

**Catatan deployment:** Tailwind CDN cocok untuk prototipe dan proyek
sederhana. Untuk optimasi produksi lebih lanjut, pertimbangkan proses
build Tailwind agar CSS yang dikirim hanya berisi utility yang
digunakan. Namun, proses build tidak termasuk kebutuhan tahap pertama
ini.

------------------------------------------------------------------------

## 7. Kebutuhan Konten dan Aset

Konten berikut perlu disiapkan sebelum website dianggap siap
dipublikasikan:

  -----------------------------------------------------------------------
  Konten/aset             Status awal             Catatan
  ----------------------- ----------------------- -----------------------
  Nama lengkap            Perlu diisi             Gunakan ejaan resmi.

  Foto profil             Perlu disiapkan         Disarankan foto jelas
                                                  dengan pencahayaan
                                                  baik.

  Sapaan hero             Dapat menggunakan draft Singkat dan personal.

  Deskripsi hero          Perlu difinalisasi      Maksimal dua kalimat.

  Bio About               Draft awal tersedia     Periksa kembali agar
                          dari konteks            akurat dan mutakhir.

  Daftar Tech Stack       Perlu dikonfirmasi      Cantumkan teknologi
                                                  yang benar-benar
                                                  dikenal.

  Tautan proyek           Tahap berikutnya        Siapkan URL demo dan
                                                  repository jika ada.

  Kontak profesional      Tahap berikutnya        Misalnya email atau
                                                  profil profesional.
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 8. Navigasi dan Arsitektur Informasi

Urutan section yang direncanakan:

``` text
Website
├── Navbar
│   ├── Logo / Nama
│   ├── Tentang
│   ├── Keahlian
│   ├── Proyek
│   └── Kontak
├── Main
│   ├── Hero
│   ├── Tentang Saya
│   ├── Keahlian / Tech Stack
│   ├── Proyek (tahap berikutnya)
│   └── Kontak (tahap berikutnya)
└── Footer (tahap berikutnya)
```

Gunakan navigasi anchor untuk perpindahan antar-section. Tambahkan
`scroll-margin-top` pada section agar judul tidak tertutup navbar
sticky.

------------------------------------------------------------------------

## 9. Non-Functional Requirements

### 9.1 Performa

-   Halaman awal harus ringan dan tidak memuat library JavaScript besar.
-   Hindari gambar berukuran berlebihan; kompres foto profil sebelum
    digunakan.
-   Gunakan atribut `loading="lazy"` untuk gambar non-kritis jika
    nantinya ada.
-   Hindari animasi berat yang mengganggu perangkat mobile.

### 9.2 Kompatibilitas

-   Targetkan browser modern: Chrome, Edge, Firefox, dan Safari.
-   Layout harus berfungsi pada viewport ponsel, tablet, dan desktop.
-   Fitur inti tidak boleh bergantung pada hover saja.

### 9.3 Pemeliharaan

-   Pisahkan markup dan JavaScript sesuai struktur file.
-   Gunakan penamaan class, ID, dan variabel yang konsisten.
-   Tambahkan komentar singkat pada bagian penting.
-   Hindari duplikasi markup dan kode JavaScript yang tidak perlu.

### 9.4 SEO Dasar

-   Tentukan `title` dan `meta description` yang relevan.
-   Gunakan struktur heading yang logis.
-   Atur `lang="id"` pada elemen `html`.
-   Gunakan teks tautan yang deskriptif.
-   Pastikan halaman memiliki satu judul utama yang jelas.

------------------------------------------------------------------------

## 10. Rencana Pengujian dan Acceptance Criteria

  -----------------------------------------------------------------------
  ID                      Skenario pengujian      Kriteria lulus
  ----------------------- ----------------------- -----------------------
  AC-01                   Membuka halaman         Halaman tampil tanpa
                                                  error fatal.

  AC-02                   Memeriksa Hero          Nama, peran, deskripsi,
                                                  CTA, dan foto profil
                                                  terlihat.

  AC-03                   Memeriksa deskripsi     Deskripsi tidak lebih
                          Hero                    dari dua kalimat.

  AC-04                   Navigasi desktop        Tautan Tentang dan
                                                  Keahlian menuju section
                                                  yang benar.

  AC-05                   Navigasi mobile         Hamburger membuka dan
                                                  menutup menu.

  AC-06                   Memilih tautan mobile   Menu menutup setelah
                                                  tautan dipilih.

  AC-07                   Sticky navbar           Navbar tetap terlihat
                                                  di bagian atas saat
                                                  scroll.

  AC-08                   Responsivitas           Tidak ada elemen utama
                                                  yang terpotong atau
                                                  menyebabkan scroll
                                                  horizontal.

  AC-09                   Aksesibilitas keyboard  Tautan dan tombol dapat
                                                  diakses dengan keyboard
                                                  dan memiliki fokus
                                                  terlihat.

  AC-10                   Tech Stack              Kartu keahlian tersusun
                                                  rapi dan terbaca.

  AC-11                   Konsol browser          Tidak ada error
                                                  JavaScript yang
                                                  mengganggu fungsi
                                                  utama.

  AC-12                   GitHub Pages            Website dapat diakses
                                                  melalui URL publik
                                                  GitHub Pages.
  -----------------------------------------------------------------------

### 10.1 Ukuran Viewport Pengujian

Lakukan pemeriksaan minimal pada ukuran berikut: - Mobile kecil: 360 ×
800 px. - Mobile umum: 390 × 844 px. - Tablet: 768 × 1024 px. - Laptop:
1366 × 768 px. - Desktop lebar: 1920 × 1080 px.

------------------------------------------------------------------------

## 11. Risiko dan Mitigasi

  -----------------------------------------------------------------------
  Risiko                  Dampak                  Mitigasi
  ----------------------- ----------------------- -----------------------
  Foto profil belum       Hero terlihat kurang    Gunakan placeholder
  tersedia                personal                visual sementara dan
                                                  ganti sebelum
                                                  publikasi.

  Konten terlalu panjang  Informasi utama sulit   Batasi deskripsi Hero
                          dipindai                dan ringkas About.

  Menu mobile tidak       Pengalaman navigasi     Uji state buka/tutup
  berfungsi               terganggu               dan interaksi keyboard.

  Tautan Proyek/Kontak    Pengunjung menemui      Hubungkan saat section
  belum memiliki tujuan   tautan kosong           tersedia atau tampilkan
                                                  status yang jelas.

  CDN atau resource       Font, ikon, atau        Sediakan fallback font
  eksternal gagal dimuat  styling tidak tampil    dan pastikan struktur
                          optimal                 HTML tetap terbaca.

  Kontras warna kurang    Aksesibilitas menurun   Periksa kontras teks,
                                                  ikon, dan elemen
                                                  interaktif.
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 12. Tahapan Pengerjaan

### Tahap 1 --- Fondasi dan Kerangka Halaman

-   Membuat `index.html`.
-   Membuat `script.js`.
-   Mengatur metadata, font, Tailwind CDN, dan Lucide Icons.
-   Membangun Navbar, Hero, About, dan Tech Stack.
-   Mengimplementasikan menu hamburger.
-   Menambahkan komentar HTML pada awal setiap section.

### Tahap 2 --- Proyek dan Kontak

-   Membuat daftar proyek.
-   Menambahkan ringkasan, teknologi, tautan demo, dan repository.
-   Membuat informasi kontak dan tautan profil profesional.

### Tahap 3 --- Penyempurnaan UI/UX

-   Memoles spacing, responsivitas, dan interaksi.
-   Menambahkan transisi ringan bila dibutuhkan.
-   Melakukan audit aksesibilitas dan performa.
-   Memastikan konsistensi visual seluruh section.

### Tahap 4 --- Deployment

-   Membuat repository GitHub.
-   Mengunggah file website.
-   Mengaktifkan GitHub Pages dari branch dan folder yang sesuai.
-   Menguji URL publik pada desktop dan mobile.

------------------------------------------------------------------------

## 13. Definisi Selesai (Definition of Done)

Tahap pertama dinyatakan selesai apabila:

-   [ ] File `index.html` dan `script.js` tersedia.
-   [ ] Navbar sticky tampil dan berfungsi.
-   [ ] Menu hamburger berfungsi pada layar mobile.
-   [ ] Hero memuat sapaan, nama, peran, deskripsi maksimal dua kalimat,
    CTA, dan foto profil.
-   [ ] Section About memuat ringkasan latar belakang yang akurat.
-   [ ] Section Tech Stack menampilkan daftar keahlian awal.
-   [ ] Tampilan mengikuti tema dark mode yang ditentukan.
-   [ ] Font Plus Jakarta Sans dan Inter diterapkan sesuai
    peruntukannya.
-   [ ] Ikon Lucide tampil dengan benar.
-   [ ] Setiap section memiliki komentar HTML singkat di awalnya.
-   [ ] Navigasi keyboard dan indikator fokus tersedia.
-   [ ] Tampilan telah diuji pada mobile, tablet, dan desktop.
-   [ ] Tidak ada error JavaScript yang mengganggu fungsi utama.

------------------------------------------------------------------------

## 14. Asumsi dan Keputusan yang Perlu Dikonfirmasi

1.  Nama lengkap yang akan ditampilkan pada navbar dan Hero Section.
2.  Foto profil final yang akan digunakan.
3.  Deskripsi Hero maksimal dua kalimat.
4.  Daftar teknologi yang benar-benar dikuasai atau sedang dipelajari.
5.  Apakah seluruh konten akan menggunakan bahasa Indonesia atau
    kombinasi Indonesia-Inggris.
6.  URL GitHub dan tautan profesional yang akan ditampilkan pada tahap
    pengembangan berikutnya.

**Keputusan default untuk tahap awal:** gunakan bahasa Indonesia,
pertahankan peran "Web Developer & UI/UX Enthusiast", gunakan
placeholder untuk nama dan foto sampai aset final tersedia, serta
tampilkan hanya teknologi yang relevan dan dapat dipertanggungjawabkan.

------------------------------------------------------------------------

## 15. Referensi Teknis

-   HTML Living Standard: https://html.spec.whatwg.org/
-   Tailwind CSS Documentation: https://tailwindcss.com/docs
-   Tailwind CSS Play CDN:
    https://tailwindcss.com/docs/installation/play-cdn
-   Google Fonts: https://fonts.google.com/
-   Lucide Icons: https://lucide.dev/
-   GitHub Pages Documentation: https://docs.github.com/en/pages

------------------------------------------------------------------------

**Akhir dokumen --- PRD Website Portofolio Pribadi, Versi 1.0**
