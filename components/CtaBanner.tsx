import Link from "next/link";
import { Lock } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 pt-24 sm:px-6 lg:px-[170px] lg:pt-32">
      <div className="relative flex flex-col items-center gap-10 overflow-hidden rounded-[32px] bg-linear-to-br from-[#201349] to-[#6423DC] px-6 py-10 text-center sm:px-14 sm:py-14">
        <div
          className="pointer-events-none absolute -left-1/4 -top-1/2 h-[80%] w-[150%] rounded-full bg-linear-to-br from-[#4238FF] to-[#CC35FF] opacity-30 blur-3xl"
          aria-hidden
        />

        <div className="relative flex max-w-[988px] flex-col items-center gap-4">
          <Lock size={40} className="text-white" />
          <h2 className="font-heading text-[28px] leading-tight text-white sm:text-4xl">
            Proteja lo que no puede permitirse perder.
          </h2>
        </div>

        <Link
          href="#precios"
          className="relative inline-flex items-center justify-center rounded-full bg-green px-8 py-6 font-semibold text-[#312A41] transition-opacity hover:opacity-90 sm:py-4"
        >
          Solicitar acceso
        </Link>
      </div>
    </section>
  );
}
