# Basecamp — QR Menu Ordering System

Sistem pemesanan kafe berbasis QR code untuk Basecamp (Ternate).
Customer scan QR di meja → pesan dari HP → realtime ke kasir.

## Fitur

**Customer (`/menu?table=N`)**
- Browse menu dengan kategori (Kopi, Non-Kopi, Makanan, Lainnya)
- 3D product showcase modal dengan atmosfer per kategori
- Cart persist di localStorage, order persist 3 jam
- Rating bintang setelah selesai
- 💬 AI Barista chatbot
- ✨ Rekomendasi cerdas saat di cart

**Kasir (`/kasir`)**
- Realtime order masuk + bunyi notif berulang
- Flow: Diterima → Disiapkan → Siap → Selesai
- Input manual, struk WA ke customer
- Wake Lock (layar tidak mati)
- Tutup Kasir → Smart Daily Report ke WA owner

**Admin (`/admin`)**
- Kelola menu + upload foto (auto-compress)
- Kalkulator HPP per komponen
- ✨ Auto-generate deskripsi (AI)
- Analitik: revenue chart, jam ramai, top item
- 🧠 Menu Engineering AI (BCG matrix)
- Pengaturan jam buka/tutup
- CSV export + cleanup data lama

## Tech Stack

- Next.js 15 (App Router)
- Supabase (Postgres + Realtime + Storage)
- Tailwind CSS
- Anthropic Claude (5 fitur AI)
- Web Push (VAPID)
- PWA-ready

## Setup

1. Buat project di [supabase.com](https://supabase.com/dashboard) → New Project
2. Copy `NEXT_PUBLIC_SUPABASE_URL` dan `NEXT_PUBLIC_SUPABASE_ANON_KEY` dari Settings → API
3. Isi `.env.local` (template sudah tersedia, VAPID keys sudah digenerate)
4. Jalankan `supabase-setup.sql` di Supabase SQL Editor
5. `npm install && npm run dev`

## Credentials Default

```
Admin password : lihat .env.local → ADMIN_PASSWORD
Kasir password : lihat .env.local → KASIR_PASSWORD
```
