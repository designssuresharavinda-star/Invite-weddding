import { Reveal } from "@/components/Reveal";
import { Eyebrow, Script } from "@/components/typography";
import { useCountdown } from "@/hooks/useCountdown";

const TARGET = new Date(2026, 9, 22, 15, 30, 0); // 22 Oct 2026, 3:30pm

function Unit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex min-w-[clamp(46px,7vw,86px)] flex-col items-center">
      <span className="font-num font-medium leading-none text-[#141d33] text-[clamp(34px,6vw,74px)]">{value}</span>
      <span className="mt-[10px] font-serif tracking-[0.05em] text-[#3a4257] text-[clamp(12px,1.3vw,17px)]">{label}</span>
    </div>
  );
}

const Colon = () => (
  <span className="pt-[0.1em] font-num text-[#141d33] text-[clamp(24px,4vw,54px)]">:</span>
);

export function Countdown() {
  const t = useCountdown(TARGET);
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center bg-navy px-10 py-[72px] text-center">
      <Reveal className="flex w-full max-w-[920px] flex-col items-center">
        <Eyebrow className="tracking-[0.4em] text-[#9fb0cf]">We know you&rsquo;ve saved the date. But&hellip;</Eyebrow>
        <Script className="mt-[14px] text-[clamp(30px,4.4vw,58px)]">Some dates are worth sharing more than once.</Script>
        <div className="doily-card mt-[34px] w-[min(720px,92vw)]">
          <div className="w-[64%] text-center text-blue-deep max-[480px]:w-[78%]">
            <p className="mb-2 font-serif font-semibold uppercase tracking-[0.14em] text-blue text-[clamp(15px,2vw,26px)] [font-variant:small-caps] lowercase">
              Thursday, 22 October 2026
            </p>
            <div className="flex items-start justify-center gap-[clamp(4px,1.4vw,16px)]">
              <Unit value={t.d} label="Days" />
              <Colon />
              <Unit value={t.h} label="Hours" />
              <Colon />
              <Unit value={t.m} label="Minutes" />
              <Colon />
              <Unit value={t.s} label="Seconds" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
