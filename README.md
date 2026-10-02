# Portofolio & Profil Profesional — Hendi Junaidy

Aplikasi portofolio kerja modern dan profil profesional dengan estetika minimalis, integrasi sosial media lengkap, serta dukungan mode gelap (*dark mode*) yang dirancang khusus untuk calon perekrut (*recruiters & hiring managers*).

---

## 🚀 Panduan Menjalankan di Localhost

Aplikasi ini dapat dijalankan di komputer lokal Anda menggunakan **Node.js** (versi 18 ke atas disarankan) atau runtime **Bun**.

### 1. Prasyarat
- **Node.js** v18.0.0 atau lebih baru (Unduh di [nodejs.org](https://nodejs.org))
- **npm** (otomatis terpasang bersama Node.js) atau **pnpm** / **yarn** / **bun**

### 2. Instalasi Dependensi
Buka terminal di direktori proyek, lalu jalankan:

```bash
npm install
```

### 3. Menjalankan Aplikasi

Anda dapat memilih salah satu metode di bawah ini:

#### Opsi A: Mode Pengembangan Cepat (Vite Dev Server) — Disarankan
```bash
npm run dev
# atau:
npm start
```
Buka browser Anda di:
👉 **[http://localhost:3000](http://localhost:3000)**

---

#### Opsi B: Mode Full-Stack (Express Server + Vite Middleware)
Jika Anda ingin menjalankan server backend Express lokal:
```bash
npm run server
```
Buka browser Anda di:
👉 **[http://localhost:3000](http://localhost:3000)**

API backend lokal aktif di:
- `http://localhost:3000/api/health`
- `http://localhost:3000/api/contact`

---

#### Opsi C: Build untuk Produksi
```bash
# 1. Build berkas produksi (dist)
npm run build

# 2. Pratinjau build produksi
npm run preview
```

---

## 🌐 Panduan Deploy ke GitHub Pages

Proyek ini telah dikompilasi ke dalam folder **`docs/`** yang siap saji dengan seluruh file JavaScript (`.js`), CSS, dan gambar yang telah di-bundle.

### Cara 1: Menggunakan Folder `/docs` (Paling Cepat & Langsung Jalan)
1. Push seluruh file dan folder `docs/` ke GitHub:
   ```bash
   git add .
   git commit -m "feat: publish docs for github pages"
   git push origin main
   ```
2. Buka repository Anda di GitHub: **Settings** ➔ **Pages**.
3. Di bagian **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main`
   - **Folder**: Ubah dari `/ (root)` menjadi **`/docs`**
4. Klik **Save**. Tunggu 1 menit, dan website akan langsung aktif di:
   `https://hndjjnd15.github.io/profile/`

---

### Cara 2: Otomatis via GitHub Actions
1. Buka repository Anda di GitHub: **Settings** ➔ **Pages**.
2. Pada bagian **Source**, pilih opsi **GitHub Actions**.
3. GitHub Actions otomatis mem-build dari workflow `.github/workflows/deploy.yml`.

---

### Cara 3: Manual via Perintah `npm run deploy`
1. Jalankan perintah deploy di terminal:
   ```bash
   npm run deploy
   ```
2. Di GitHub **Settings** ➔ **Pages**, pilih branch **`gh-pages`** (folder `/ (root)`).

---

## 🛠️ Daftar Perintah NPM yang Tersedia

| Perintah | Deskripsi |
|---|---|
| `npm run dev` | Menjalankan Vite dev server di `localhost:3000` |
| `npm start` | Alias untuk menjalankan server lokal di `localhost:3000` |
| `npm run server` | Menjalankan backend Express dengan Vite middleware |
| `npm run build` | Melakukan build produksi teroptimasi ke folder `dist` |
| `npm run preview` | Menjalankan server lokal untuk menguji build produksi |
| `npm run lint` | Menjalankan pemeriksaan tipe TypeScript (`tsc --noEmit`) |

---

## 📦 Paket & Teknologi Utama

- **Frontend**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite 8](https://vitejs.dev/), [TSX](https://github.com/privatenumber/tsx)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) dengan `@custom-variant dark`
- **Ikon**: [Lucide React](https://lucide.dev/)
- **Backend / Local Server**: [Express 4](https://expressjs.com/), [CORS](https://www.npmjs.com/package/cors), [Dotenv](https://www.npmjs.com/package/dotenv), [Cross-Env](https://www.npmjs.com/package/cross-env)

---

## ✨ Fitur-Fitur Aplikasi

1. **Desain Minimalis & Bebas AI Slop**: Tipografi bersih (*Plus Jakarta Sans*, *Syne*, *JetBrains Mono*) dengan tata letak editorial dan hirarki informasi yang rapi.
2. **Mode Terang & Gelap (Dark/Light Mode)**: Peralihan instan dengan penyimpanan preferensi di `localStorage` dan kompensasi visual untuk kenyamanan mata.
3. **Integrasi Sosial Media**: Akses langsung ke LinkedIn, GitHub, X (Twitter), Blog Teknis, Telegram, dan Email, ditambah fitur **Bagikan Ringkasan Profil**.
4. **Dossier Cepat Perekrut (*Recruiter Fast-Track*)**: Informasi kunci siap kerja (Notice Period, Target Roles, Model Kerja Remote/Hybrid, Ekspektasi Kompensasi).
5. **Modal Studi Kasus & CV Siap Cetak**: Pratinjau studi kasus proyek mendalam dan dokumen resume lengkap yang ramah cetak (Print / PDF).
6. **Kustomisasi Data Langsung**: Kemampuan mengedit profil langsung dari UI dan tersimpan di penyimpanan browser lokal.
