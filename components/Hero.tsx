import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="inicio" className="relative mx-auto max-w-[1440px] px-4 pt-16 sm:px-6 sm:pt-20 lg:px-[170px]">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1
              className="font-heading text-[35px] font-normal leading-[1.05] tracking-normal text-heading sm:text-[48px] sm:leading-[1]"
              style={{ WebkitTextStroke: "0.9px currentColor", paintOrder: "stroke fill" }}
            >
              Confidencialidad que{" "}
              <span className="font-accent text-[42px] leading-none text-[#CA29FF] sm:text-[58px]">
                no depende
              </span>{" "}
              de la suerte.
            </h1>
            <p className="max-w-[575px] text-base leading-[1.4] text-body">
              <span className="font-bold">nova</span> protege la información confidencial en su
              dispositivo móvil con una arquitectura de seguridad construida para
              profesionales que no pueden permitirse una filtración.
            </p>
            <p className="text-sm font-semibold italic text-body">*sólo disponible para Android</p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="#precios" className="btn-primary">
              Conseguir nova
            </Link>
            <Link href="#funciones" className="btn-outline">
              Saber más...
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[440px] lg:max-w-none">
          <Image
            src="/images/imagen-hero.webp"
            alt="nova en tu dispositivo móvil"
            width={1988}
            height={1762}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
