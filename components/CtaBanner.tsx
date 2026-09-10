import Image from "next/image";
import Link from "next/link";
import { Lock } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 pt-24 sm:px-6 lg:px-[170px] lg:pt-32">
      <div
        className="relative flex flex-col items-center gap-10 overflow-hidden rounded-[32px] px-6 py-10 text-center sm:px-14 sm:py-14"
        style={{ background: "linear-gradient(130.99deg, #201349 5.34%, #6423DC 101.84%)" }}
      >
        <Image
          src="/svg/banner-protege.svg"
          alt=""
          width={467}
          height={313}
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 h-full w-auto select-none"
        />

        <div className="relative flex max-w-[988px] flex-col items-center gap-4">
          <Lock size={40} className="text-white" />
          <h2 className="font-heading text-[28px] leading-tight text-white sm:text-4xl">
            Proteja lo que no puede permitirse perder.
          </h2>
        </div>

        <Link
          href="#precios"
          className="relative inline-flex min-h-[51px] items-center justify-center rounded-full bg-green px-8 py-2 font-semibold leading-tight text-[#312A41] transition-opacity hover:opacity-90"
        >
          Solicitar acceso
        </Link>
      </div>
    </section>
  );
}
