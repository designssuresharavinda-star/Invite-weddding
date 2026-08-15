import { Reveal } from "@/components/Reveal";
import { Eyebrow, Script } from "@/components/typography";
import { images } from "@/data/images";

export function Gifts() {
  return (
    <section className="toile relative flex min-h-screen w-full items-center justify-center border-b-[14px] border-navy bg-white px-10 py-[72px]">
      <Reveal className="relative grid w-full max-w-[1160px] items-center gap-[30px] md:grid-cols-2">
        <div>
          <img src={images.giftBoxes} alt="Blue ribboned gift boxes" width={1600} height={640} loading="lazy" decoding="async" className="w-full" />
        </div>
        <div className="px-6 text-center">
          <Eyebrow tone="dark" className="mb-[22px] tracking-[0.42em] text-[#7b8296]">If you&rsquo;re wondering&hellip;</Eyebrow>
          <p className="m-0 mb-[18px] font-serif italic leading-[1.62] text-[#4a5064] text-[clamp(16px,1.3vw,18px)]">
            Your presence is the greatest gift of all.
            <br />
            We&rsquo;re jetting off shortly after the wedding,
            <br />
            our bags already packed for the journey ahead.
            <br />
            We&rsquo;d love for any gift to travel light with us,
            <br />
            if you&rsquo;re so inclined.
            <br />
            No pressure at all.
          </p>
          <Script tone="dark" className="mt-[6px] text-[clamp(34px,4.6vw,60px)]">We love a surprise!</Script>
        </div>
      </Reveal>
    </section>
  );
}
