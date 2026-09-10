export default function BackgroundBlobs() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[2600px] overflow-hidden" aria-hidden>
      {/* 1 — wash del hero: frío a la izquierda, violeta a la derecha, se desvanece hacia el centro */}
      <div
        className="absolute left-1/2 top-[-260px] h-[1000px] w-[1700px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(58% 55% at 16% 20%, rgba(103, 232, 249, 0.38) 0%, rgba(192, 132, 252, 0.42) 45%, rgba(192, 132, 252, 0) 78%)",
          filter: "blur(60px)",
        }}
      />

      {/* 2 — bloom violeta arriba a la derecha, detrás del teléfono */}
      <div
        className="absolute right-[-200px] top-[-180px] h-[760px] w-[860px]"
        style={{
          background:
            "radial-gradient(50% 50% at 58% 38%, rgba(168, 85, 247, 0.40) 0%, rgba(192, 132, 252, 0.26) 42%, rgba(192, 132, 252, 0) 75%)",
          filter: "blur(80px)",
        }}
      />

      {/* 3 — banda diagonal que cruza de lado a lado: cyan (izq, funciones) a violeta (der, planes) */}
      <div
        className="absolute top-[980px] h-[1300px]"
        style={{
          left: "-15%",
          width: "130%",
          background:
            "radial-gradient(46% 62% at 10% 42%, rgba(103, 232, 249, 0.38) 0%, rgba(103, 232, 249, 0) 68%), " +
            "radial-gradient(50% 66% at 90% 58%, rgba(192, 132, 252, 0.38) 0%, rgba(192, 132, 252, 0) 70%)",
          filter: "blur(120px)",
          transform: "rotate(9deg)",
        }}
      />
    </div>
  );
}
