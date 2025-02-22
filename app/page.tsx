import Image from "next/image";

export default function Home() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* overlay gelap */}
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm"></div>

      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen p-8 sm:p-20">
        <div
          className="w-full flex flex-col items-center justify-start"
          style={{ minHeight: "66vh" }}
        >
          <Image
            src="/fotoprofil.jpg"
            alt="Foto Profil"
            width={150}
            height={150}
            className="rounded-full border-2 border-foreground"
          />
          <h1 className="mt-4 text-3xl font-bold text-center">
            Parade Wisuda April 2025
          </h1>
          <p className="text-xl text-center">Institut Teknologi Bandung</p>

          <div className="mt-10 w-full flex justify-center">
            <a
              href="https://wispril2025.wisudaitb.id"
              className="block bg-foreground text-background px-6 py-4 rounded-md text-center text-lg font-semibold transition-transform transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
            >
              Wispril ITB 2025
            </a>
          </div>
        </div>

        <div className="w-full" style={{ minHeight: "33vh" }}>
        </div>
      </div>
    </div>
  );
}
