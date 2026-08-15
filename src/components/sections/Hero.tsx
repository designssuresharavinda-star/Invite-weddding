import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/typography";
import { images } from "@/data/images";

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center bg-navy px-10 py-[72px]">
      <Reveal className="flex w-full max-w-[900px] flex-col items-center text-center">
        <Eyebrow className="tracking-[0.5em]">We Are Getting Married</Eyebrow>
        <h1 className="mt-[0.12em] mb-[0.35em] font-script text-cream text-[clamp(52px,7vw,104px)] leading-none">
          Senuri &amp; Shehan
        </h1>
        <div className="hero-frame mx-auto mb-[2px] mt-[10px] w-[min(560px,90vw)]">
          <img
            className="hero-oval"
            src={images.heroOvalFrame}
            alt=""
            width={800}
            height={450}
            decoding="async"
          />
          <div className="hero-strip">
            <img src={images.heroPhoto1} alt="Senuri and Shehan enjoying ice cream" width={533} height={800} />
            <img src={images.heroPhoto2} alt="Senuri and Shehan by a carousel" width={533} height={799} />
            <img src={images.heroPhoto3} alt="Senuri and Shehan at an ice-cream parlour" width={533} height={800} />
          </div>
        </div>
        <Eyebrow className="mt-[34px] tracking-[0.5em] opacity-85">Open Invitation</Eyebrow>
      </Reveal>
    </section>
  );
}
