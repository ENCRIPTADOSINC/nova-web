import Image from "next/image";
import Link from "next/link";

const menu = [
  { href: "#", label: "Privacidad" },
  { href: "#", label: "Términos" },
  { href: "#", label: "Contácto" },
];

export default function Footer() {
  return (
    <footer
      id="soporte"
      className="mx-auto mt-24 max-w-[1440px] border-t border-border-muted px-4 py-8 sm:px-6 lg:mt-32 lg:px-[170px]"
    >
      <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
        <Image src="/images/logo-nova.png" alt="nova" width={104} height={32} className="h-8 w-auto" />
        <p className="text-base text-body">© 2026 NOVA. Todos los derechos reservados.</p>
        <div className="flex items-center gap-4">
          {menu.map((item) => (
            <Link key={item.label} href={item.href} className="text-base text-[#5420B9] hover:opacity-80">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
