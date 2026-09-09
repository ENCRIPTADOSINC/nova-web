import Image from "next/image";
import Link from "next/link";
import { Cable } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative mx-auto max-w-[1440px] px-4 pt-16 sm:px-6 sm:pt-20 lg:px-[170px]">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="font-heading text-[40px] leading-[1] text-heading">
              Confidencialidad que no depende de la suerte.
            </h1>
            <p className="max-w-[575px] text-base leading-[1.4] text-body">
              nova protege la información confidencial en su dispositivo móvil con una
              arquitectura de seguridad construida para profesionales que no pueden
              permitirse una filtración.
            </p>
            <p className="text-sm font-semibold text-body">*sólo disponible para Android</p>
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
            src="/images/hero-phone-mobile.png"
            alt="nova en tu dispositivo móvil"
            width={351}
            height={312}
            className="mx-auto w-full max-w-[400px] lg:hidden"
            priority
          />

          <div className="relative hidden aspect-[479/440] w-full lg:block">
            <Image
              src="/images/hero-phone-desktop.png"
              alt="nova en tu dispositivo móvil"
              width={443}
              height={440}
              className="absolute h-auto"
              style={{ left: "2.7%", top: "0%", width: "92.5%" }}
              priority
            />

            <div
              className="absolute flex items-center justify-center rounded-3xl border-2 border-[#BEC6FF]"
              style={{ left: "6.7%", top: "13.6%", width: "36.5%", height: "39.8%" }}
            >
              <Image
                src="/images/hero-app-icon.png"
                alt="Ícono de la app nova"
                width={151}
                height={151}
                className="h-[86%] w-[86%] rounded-2xl object-contain"
              />
            </div>

            <Image
              src="/images/hero-chip-1.png"
              alt=""
              width={57}
              height={57}
              className="absolute drop-shadow-lg"
              style={{ left: "3.5%", top: "63%", width: "11.9%", height: "12.9%" }}
            />
            <Image
              src="/images/hero-chip-3.png"
              alt=""
              width={57}
              height={57}
              className="absolute drop-shadow-lg"
              style={{ left: "51.1%", top: "68.4%", width: "11.9%", height: "12.9%" }}
            />
            <Image
              src="/images/hero-chip-2.png"
              alt=""
              width={57}
              height={57}
              className="absolute drop-shadow-lg"
              style={{ left: "51.1%", top: "83.4%", width: "11.9%", height: "12.9%" }}
            />
            <Image
              src="/images/hero-chip-4.png"
              alt=""
              width={57}
              height={57}
              className="absolute drop-shadow-lg"
              style={{ left: "0%", top: "83.4%", width: "11.9%", height: "12.9%" }}
            />

            <div
              className="absolute flex items-center gap-3 rounded-xl bg-white p-2 shadow-[2px_4px_16px_rgba(155,146,166,0.41)]"
              style={{ left: "59.5%", top: "21.1%", width: "40.5%" }}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#12187E] to-[#4A5FE7]">
                <Cable size={16} className="text-white" />
              </span>
              <div className="flex flex-1 flex-col gap-2">
                <p className="text-xs leading-tight text-[#312A41]">
                  Eliminación al detectar un cable de datos
                </p>
                <span className="w-fit rounded-full bg-chip px-2 py-1 text-[10px] font-medium text-[#312A41]">
                  Desactivada
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
