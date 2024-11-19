# Tugas 9 PrakPemMob

## Screenshot

### 1. Tampilan Awal (Login Page)

Login Page merupakan landing page atau halaman pertama yang muncul saat aplikasi dijalankan, Login Page akan menampilkan judul aplikasi dan tombol "Sign In with Google". Tombol ini menggunakan komponen ion-button dan icon Google yang akan mengtrigger proses login apabila diklik.
Apabila terjadi kesalahan saat melakukan proses login maka akan ditampilkan pesan yang memberitahukan bahwa proses login gagal dan user diminta untuk mencoba kembali.

<img src="public/login.png">

### 2. Pilih Akun

Ketika user menekan tombol Sign In With Goole, akan muncul Pop-up untuk memilih akun Google yang ingin digunakan untuk Login, hal ini merupakan interface bawaan dari Google OAuth. Proses ini menggunakan @codetrix-studio/capacitor-google-auth untuk menangani autentikasi pada platform mobile.

<img src="public/select.png">

### 3. Konfirmasi

Setelah memilih akun, user akan diminta untuk mengkonfirmasi sekali lagi sebelum benar-benar masuk menggunakan akun yang dipilih

<img src="public/confirm.png">

### 4. Home Page

Setelah login berhasil, user akan diarahkan ke Home Page, halaman home ini memiliki navigasi di bagian bawah untuk beralih ke halaman profile

<img src="public/home.png">

### 5. Profile Page

Halaman ini menampilkan informasi dari user yang sedang Login, foto profil diambil dari foto akun Google user menggunakan ion-avatar, nama diambil dari username akun google user dengan displayName, dan email diambil dari email Google user. Kemudian terdapat juga tombol Logout pada halaman profile ini.

<img src="public/profile.png">
