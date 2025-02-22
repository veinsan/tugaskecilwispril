import Image from "next/image";

export default function Home() {
  return (
    // Container utama dengan background image dari folder public (file: public/background.jpg)
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Overlay untuk menciptakan efek blur dan meredam background */}
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm"></div>

      {/* Konten utama (relative supaya tampil di atas overlay) */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen p-8 sm:p-20">
        {/* Bagian atas (2/3 dari tinggi halaman) */}
        <div className="w-full flex flex-col items-center justify-start" style={{ minHeight: "66vh" }}>
          {/* Profile picture: file gambar di public/fotoprofil.jpg */}
          <Image
            src="/fotoprofil.jpg"
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full border-2 border-foreground"
          />
          <h1 className="mt-4 text-3xl font-bold">Parade Wisuda April 2025</h1>
          <p className="text-xl">Institut Teknologi Bandung</p>

          {/* Daftar website dengan judul yang baru */}
          <div className="mt-10 w-full flex justify-center">
            <a
              href="https://wispril2025.wisudaitb.id"
              className="block bg-foreground text-background px-6 py-4 rounded-md text-center text-lg font-semibold transition-transform transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
            >
              Wispril ITB 2025
            </a>
          </div>
        </div>

        {/* Bagian bawah (1/3 dari tinggi halaman) dibiarkan kosong */}
        <div className="w-full" style={{ minHeight: "33vh" }}>
          {/* Kosong */}
        </div>
      </div>
    </div>
  );
}
