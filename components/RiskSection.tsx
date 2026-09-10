export default function RiskSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 pt-24 sm:px-6 lg:px-[327px] lg:pt-32">
      <div className="mx-auto flex max-w-[723px] flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-2">
          <p
            className="text-gradient-brand text-center text-[14px] font-semibold"
            style={{
              lineHeight: "120%",
              letterSpacing: "0.5em",
              textIndent: "0.5em",
              backgroundImage: "linear-gradient(93.33deg, #A71FE8 5.8%, #4F24D8 100%)",
            }}
          >
            EL RIESGO
          </p>
          <h2
            className="font-heading text-2xl font-normal tracking-normal text-heading sm:text-[32px]"
            style={{ lineHeight: "130%", WebkitTextStroke: "0.7px currentColor", paintOrder: "stroke fill" }}
          >
            Un dispositivo perdido no debería significar un secreto expuesto.
          </h2>
        </div>
        <p className="max-w-[723px] text-[16px] text-body" style={{ lineHeight: "140%" }}>
          Todos los días, profesionales que manejan información confidencial en un solo
          dispositivo. Un teléfono robado, extraviado o comprometido físicamente puede
          convertirse en una filtración irreversible, no por falta de cuidado, sino por falta
          de una defensa diseñada para este riesgo.{" "}
          <span className="font-extrabold">
            Por eso nova diseñó funciones que protegen tu información
          </span>
        </p>
      </div>
    </section>
  );
}
