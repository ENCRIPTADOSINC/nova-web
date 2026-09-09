export default function RiskSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 pt-24 sm:px-6 lg:px-[327px] lg:pt-32">
      <div className="mx-auto flex max-w-[723px] flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-2">
          <p className="text-gradient-brand text-sm font-semibold tracking-wide">EL RIESGO</p>
          <h2 className="font-heading text-2xl leading-snug text-heading sm:text-[32px] sm:leading-[1.3]">
            Un dispositivo perdido no debería significar un secreto expuesto.
          </h2>
        </div>
        <p className="max-w-[786px] text-base leading-[1.4] text-body">
          Todos los días, profesionales que manejan información confidencial en un solo
          dispositivo. Un teléfono robado, extraviado o comprometido físicamente puede
          convertirse en una filtración irreversible, no por falta de cuidado, sino por falta
          de una defensa diseñada para este riesgo. Por eso nova diseñó funciones que protegen
          tu información
        </p>
      </div>
    </section>
  );
}
