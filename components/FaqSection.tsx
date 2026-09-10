"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

const faqs = [
  "¿Qué dispositivos son compatibles?",
  "¿Qué tan seguro es Nova?",
  "¿Cómo es su política de reembolsos?",
  "¿Qué pasa con mi información? ¿se almacena?",
  "Si se borra el dispositivo ¿puedo recuperar la información?",
  "Si sacan una nueva funcionalidad, ¿la obtendré?",
  "¿Puedo instalar nova en un Iphone?",
  "¿Pierdo los accesos de mis apps al eliminar el sistema?",
];

function FaqItem({ question, open, onToggle }: { question: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border-muted">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-base text-[#626262]">{question}</span>
        <Plus
          size={18}
          className={`shrink-0 text-[#081C59] transition-transform ${open ? "rotate-45" : ""}`}
        />
      </button>
      {open && (
        <p className="pb-4 text-sm leading-relaxed text-[#626262]">
          Próximamente encontrarás la respuesta a esta pregunta. Escríbenos a soporte si la
          necesitas ahora mismo.
        </p>
      )}
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const columns = [faqs.slice(0, 4), faqs.slice(4)];

  return (
    <section id="faqs" className="mx-auto max-w-[1440px] px-4 pt-24 sm:px-6 lg:px-[170px] lg:pt-32">
      <div className="flex flex-col items-center gap-10">
        <h2
          className="font-heading text-2xl text-heading sm:text-[32px]"
          style={{ WebkitTextStroke: "0.7px currentColor", paintOrder: "stroke fill" }}
        >
          ¿Tienes dudas de nova?
        </h2>

        <div className="grid w-full grid-cols-1 gap-x-8 lg:grid-cols-2">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col">
              {column.map((question, i) => {
                const index = colIndex * 4 + i;
                return (
                  <FaqItem
                    key={question}
                    question={question}
                    open={openIndex === index}
                    onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                  />
                );
              })}
            </div>
          ))}
        </div>

        <Link href="#soporte" className="btn-outline !text-[#421EF2]">
          Contactar a soporte
        </Link>
      </div>
    </section>
  );
}
