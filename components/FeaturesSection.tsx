import Image from "next/image";

type Feature = {
  eyebrow: string;
  title: string;
  description: string;
  graphic?: "cable" | "sim";
};

const topFeatures: Feature[] = [
  {
    eyebrow: "01 // ELIMINACIÓN",
    title: "Eliminación al detectar un cable de datos",
    description:
      "Al detectar una conexión no autorizada por cable, NOVA bloquea la transferencia de datos, elimina los permisos de acceso y restaura tu dispositivo de fábrica antes de que se filtre información.",
    graphic: "cable",
  },
  {
    eyebrow: "02 // ELIMINACIÓN",
    title: "Eliminación cuando manipulan la eSIM o SIM",
    description:
      "Protege tu dispositivo evitando que accedan a tu eSIM o manipulando la SIM física",
    graphic: "sim",
  },
];

const bottomFeatures: Feature[] = [
  {
    eyebrow: "03 // ELIMINACIÓN",
    title: "Elimina por combinación de subir y bajar volumen",
    description:
      "Mantén presionados volumen + y - durante 5 segundos para iniciar el borrado total de tu dispositivo, sin marcha atrás.",
  },
  {
    eyebrow: "04 // PRIVACIDAD",
    title: "Bloquea capturas de pantalla y grabaciones",
    description:
      "Cualquier intento de captura o grabación de pantalla se bloquea al instante, generando una imagen en blanco sin contenido visible.",
  },
  {
    eyebrow: "05 // PRIVACIDAD",
    title: "Desactiva la cámara y micrófono de tu dispositivo",
    description:
      "Al activarla, ninguna app puede acceder a tu cámara ni micrófono. Si algo lo intenta, NOVA lo bloquea de inmediato y te notifica.",
  },
];

function FeatureTitle({ eyebrow, title }: Pick<Feature, "eyebrow" | "title">) {
  return (
    <div className="flex flex-col gap-2">
      <p
        className="text-gradient-brand text-[12px] font-semibold leading-[1.2]"
        style={{
          letterSpacing: "0.1em",
          backgroundImage: "linear-gradient(93.33deg, #A71FE8 5.8%, #4F24D8 100%)",
        }}
      >
        {eyebrow}
      </p>
      <h3
        className="font-heading text-[20px] font-normal leading-[1.3] tracking-normal text-[#312A41]"
        style={{ WebkitTextStroke: "0.6px currentColor", paintOrder: "stroke fill" }}
      >
        {title}
      </h3>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="funciones" className="mx-auto max-w-[1440px] px-4 pt-24 sm:px-6 lg:px-[170px] lg:pt-32">
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.43fr_1fr]">
          <div className="relative overflow-hidden rounded-3xl bg-white p-8 lg:pr-[200px]">
            <div className="flex max-w-[401px] flex-col gap-6">
              <FeatureTitle eyebrow={topFeatures[0].eyebrow} title={topFeatures[0].title} />
              <p className="text-[14px] leading-[1.3] text-[#312A41]">{topFeatures[0].description}</p>
            </div>
            <Image
              src="/svg/cable.svg"
              alt=""
              width={208}
              height={208}
              aria-hidden
              className="pointer-events-none absolute -right-2 -top-6 hidden w-[230px] select-none lg:block"
            />
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-white p-8 lg:pr-[150px]">
            <div className="flex max-w-[261px] flex-col gap-6">
              <FeatureTitle eyebrow={topFeatures[1].eyebrow} title={topFeatures[1].title} />
              <p className="text-[14px] leading-[1.3] text-[#312A41]">{topFeatures[1].description}</p>
            </div>
            <Image
              src="/svg/esim-sim.svg"
              alt=""
              width={119}
              height={148}
              aria-hidden
              className="pointer-events-none absolute right-0 top-7 hidden w-[125px] select-none lg:block"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {bottomFeatures.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-6 rounded-3xl bg-white p-8">
              <FeatureTitle eyebrow={feature.eyebrow} title={feature.title} />
              <p className="text-[14px] leading-[1.3] text-[#312A41]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
