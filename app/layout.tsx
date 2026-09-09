import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const calSans = localFont({
  src: "./fonts/CalSans-Regular.woff2",
  variable: "--font-cal-sans",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "nova — Confidencialidad que no depende de la suerte",
  description:
    "nova protege la información confidencial en tu dispositivo móvil con una arquitectura de seguridad construida para profesionales que no pueden permitirse una filtración.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${inter.variable} ${calSans.variable}`}>
      <body className="min-h-full bg-bg font-sans text-body antialiased">
        {children}
      </body>
    </html>
  );
}
