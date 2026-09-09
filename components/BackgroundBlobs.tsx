export default function BackgroundBlobs() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[2200px] overflow-hidden" aria-hidden>
      <div
        className="absolute -left-40 -top-24 h-[420px] w-[420px] rounded-full opacity-60 blur-[110px]"
        style={{ background: "radial-gradient(circle, #67E8F9, #C084FC)" }}
      />
      <div
        className="absolute -top-40 right-[-120px] h-[620px] w-[620px] rounded-full opacity-60 blur-[90px]"
        style={{ background: "radial-gradient(circle, #67E8F9, #C084FC)" }}
      />
      <div
        className="absolute left-1/2 top-[750px] h-[900px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-[140px]"
        style={{ background: "radial-gradient(circle, #67E8F9, #C084FC)" }}
      />
    </div>
  );
}
