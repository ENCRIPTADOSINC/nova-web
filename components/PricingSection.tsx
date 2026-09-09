import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

type Plan = {
  title: string;
  price: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  order: string;
};

const plans: Plan[] = [
  {
    title: "Función individual",
    price: "$30/función de por vida",
    features: [
      "Eliges las funciones que necesites",
      "Las funciones quedarán activas de por vida en el dispositivo. Si lo eliminas o reinicias el sistema, perderás el acceso a ellas.",
    ],
    cta: "Elegir individual",
    order: "order-2 lg:order-1",
  },
  {
    title: "Premium",
    price: "$150/de por vida",
    features: [
      "Todas las funciones disponibles",
      "Activas o desactivas las funciones que necesites",
      "Soporte preferencial",
      "Las funciones quedarán activas de por vida en el dispositivo. Si lo eliminas o reinicias el sistema, perderás el acceso a ellas.",
    ],
    cta: "Elegir Premium",
    highlighted: true,
    order: "order-1 lg:order-2",
  },
  {
    title: "Solo de borrado",
    price: "$80/paquete de por vida",
    features: [
      "Eliminación al detectar un cable de datos",
      "Eliminación al manipular la eSIM o SIM",
      "Eliminación de emergencia por combinación de botones",
      "Las funciones quedarán activas de por vida en el dispositivo. Si lo eliminas o reinicias el sistema, perderás el acceso a ellas.",
    ],
    cta: "Elegir sólo las de borrado",
    order: "order-3",
  },
];

export default function PricingSection() {
  return (
    <section id="precios" className="mx-auto max-w-[1440px] px-4 pt-24 sm:px-6 lg:px-[170px] lg:pt-32">
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:items-center lg:gap-4 lg:overflow-visible lg:pb-0">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className={`flex w-[85%] shrink-0 snap-center flex-col justify-between gap-16 rounded-2xl p-6 lg:w-auto lg:shrink lg:p-8 ${plan.order} ${
              plan.highlighted
                ? "bg-navy text-white lg:scale-105 lg:py-16 lg:shadow-2xl"
                : "bg-white text-[#0B0914]"
            }`}
          >
            <div className="flex flex-col gap-8">
              <h3 className="font-sans text-2xl font-bold sm:text-[32px]">{plan.title}</h3>
              <ul className="flex flex-col gap-3 sm:gap-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle2
                      size={20}
                      className={`mt-0.5 shrink-0 ${plan.highlighted ? "text-white" : "text-[#35353F]"}`}
                    />
                    <span className={`text-sm sm:text-base ${plan.highlighted ? "text-white" : "text-[#35353F]"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6 sm:gap-8">
              <p className="text-2xl font-bold sm:text-[32px]">{plan.price}</p>
              {plan.highlighted ? (
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-[#CA29FF] px-8 py-4 text-center font-heading text-lg text-white shadow-[0_12px_32px_rgba(190,35,241,0.5)] transition-opacity hover:opacity-90"
                >
                  {plan.cta}
                </Link>
              ) : (
                <Link href="#" className="btn-outline text-center font-heading text-lg !text-[#0B0641]">
                  {plan.cta}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
