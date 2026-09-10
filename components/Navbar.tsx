"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#funciones", label: "Funciones" },
  { href: "#precios", label: "Precios" },
  { href: "#faqs", label: "FAQs" },
  { href: "#soporte", label: "Soporte" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-8 z-50 mx-auto max-w-[1164px] px-4 sm:px-6 lg:px-0">
      <nav className="flex items-center justify-between rounded-[20px] bg-white px-4 py-4 shadow-[0_0_48px_rgba(6,28,61,0.05)] sm:px-6 lg:h-[74px] lg:px-[26px] lg:py-0">
        <button
          className="flex h-6 w-6 items-center justify-center text-[#6923DD] lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <Link href="#inicio" className="flex items-center">
          <Image src="/images/logo-nova.png" alt="nova" width={104} height={32} className="h-7 w-auto sm:h-8" priority />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-[#838E9E] transition-colors hover:text-heading"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="#precios"
          className="btn-primary !min-h-[40px] !px-5 text-sm sm:!min-h-[51px] sm:!px-8 sm:text-base"
        >
          <span className="hidden sm:inline">Conseguir Nova</span>
          <span className="sm:hidden">Comprar</span>
        </Link>
      </nav>

      {open && (
        <div className="mt-2 flex flex-col gap-1 rounded-2xl bg-white p-4 shadow-[0_0_48px_rgba(6,28,61,0.08)] lg:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-medium text-[#838E9E] hover:bg-chip hover:text-heading"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
