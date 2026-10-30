import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "JitakuTrack — Gestiona. Organiza. Crece.",
  description:
    "Plataforma de gestión inmobiliaria: dueños, inquilinos, contratos, pagos, liquidaciones y portal para inquilinos.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-surface text-ink">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
