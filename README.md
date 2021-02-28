This project was bootstrapped with [Chakra UI](https://github.com/chakra-ui/chakra-ui/).

Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.

Technical Specs Technical Specs adalah spesifikasi yang diinginkan dari sebuah aplikasi. Jadi, memenuhi spesifikasi yang diminta untuk sebuah project aplikasi adalah tugas dari engineering team dan juga project manager.

Tujuan Membuat sebuah aplikasi web dengan menggunakan React sebagai library, yang berfungsi sebagai news aggregator. Dengan tampilan utama adalah untuk mobile web platform. Tanpa ada tampilan untuk desktop web platform.

Product Features Beberapa fitur yang harus ada di aplikasi adalah:

User dapat melihat berita technology terikini. User dapat membuka link berita ke domain original dari source berita. User dapat melakukan scroll untuk melihat-lihat berita (vertical scrolling). User dapat melihat info seperti tanggal, sumber, penulis, dan deskripsi singkat di masing-masing thumbnail berita. User dapat mengganti berita yang tersaji berdasarkan button category di bagian Navbar. User dapat melihat loading state, dalam bentuk sebuah loader UI, saat proses pengambilan data fetching sedang dalam proses. User dapat melihat error state, dalam bentuk sebuah text UI, saat proses pengambilan data fetching mengalami kegagalan. API Untuk API yang akan digunakan sebagai data-source dari semua berita. Gunakan NewsAPI https://newsapi.org/account. Buat sebuah akun untuk mendapatkan API Key yang dapat dilihat nantinya di halaman https://newsapi.org/account. Gunakan email dan mendaftar-lah seperti biasa. Untuk default berita, dapat mengambil data dari endpoint berikut: https://newsapi.org/v2/everything?q=technology&apiKey={API_KEY}

Untuk default berita, dapat mengambil data dari endpoint berikut: https://newsapi.org/v2/everything?q=technology&apiKey={API_KEY}

Dengan menggunakan endpoint di atas, maka berita-berita yang tersaji sebagai default adalah yang berhubungan dengan technology.

Untuk "bermain" dengan API endpoints, dapat menggunakan tools seperti Postman atau Insomnia.

Tools Untuk membuat project aplikasi ini, dibebaskan untuk membuat React app dengan tools/template yang paling dirasa sesuai dengan keinginan. Bisa menggunakan Create React App, Next.js, Gatsby, atau bahkan jika ingin membuat boilerplate React dari nol dan men-setup webpack, babel, dll sendiri.

Tapi disarankan menggunakan Create React App saja. Karena paling mudah dan tidak ada paksaan untuk membuat aplikasi React yang advanced (SSR atau SSG).

Gunakan axios untuk library fetching. Jangan menggunakan fetch API.

User Interfaces Buatlah sebuah aplikasi dengan UI seperti pada contoh di bawah. Tidak perlu mendesign terlalu mirip. Jika merasa design dengan pendekatan lain lebih bagus. Silahkan gunakan design itu.

Gunakan library styling yang sesuai keinginan. Boleh menggunakan CSS Module jika menggunakan Create React App, styled-components, emotion, TailwindCSS, ataupun Bootstrap (jika dirasa paling familiar).