import type { Config } from "tailwindcss";

export default {
  // nentuin file2 yang bakal discan sama Tailwind buat ngapus CSS yg ga kepake
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // pake variabel buat warna biar konsisten sm globals.css
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
