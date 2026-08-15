import { Reveal } from "@/components/Reveal";
import { Script } from "@/components/typography";
import { images } from "@/data/images";

export function Finale() {
  return (
    <section className="toile-finale relative flex min-h-screen w-full flex-col justify-start bg-white p-0">
      <div className="w-full">
        <img
          className="mask-finale w-full"
          src={images.panorama}
          alt="Panoramic sketch of Colombo"
          width={1481}
          height={440}
          loading="lazy"
          decoding="async"
        />
      </div>
      <Reveal className="relative -mt-[6vh] pb-[12vh] text-center max-[860px]:mt-0 max-[860px]:pt-5">
        <Script tone="dark" className="text-[clamp(44px,6vw,86px)]">Senuri &amp; Shehan</Script>
        <p className="mt-[6px] pl-[0.4em] font-serif uppercase tracking-[0.4em] text-[#7c869c] text-[clamp(13px,1.4vw,18px)]">
          22.10.2026
        </p>
      </Reveal>
    </section>
  );
}
