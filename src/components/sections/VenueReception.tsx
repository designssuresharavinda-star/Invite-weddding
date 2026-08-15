import { Reveal } from "@/components/Reveal";
import { Script } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { images } from "@/data/images";

export function VenueReception() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center bg-white px-10 pb-0 pt-[72px]">
      <Reveal className="grid w-full max-w-[1160px] items-center gap-[30px] md:grid-cols-2">
        <div className="px-6 text-center md:order-1">
          <Script tone="dark" as="h3" className="mb-4 text-[clamp(30px,4vw,54px)] leading-[1.05]">
            Poruwa Ceremony &amp;
            <br />
            Dinner Reception
          </Script>
          <p className="m-0 mb-[14px] pl-[0.34em] font-serif uppercase tracking-[0.34em] text-[#2f3956] text-[clamp(15px,1.7vw,22px)]">6:30 PM Onwards</p>
          <p className="m-0 mb-[22px] pl-[0.28em] font-serif font-medium uppercase leading-[1.5] tracking-[0.28em] text-[#3a4258] text-[clamp(14px,1.6vw,21px)]">
            The Grand Ballroom,
            <br />
            The Hilton Colombo
          </p>
          <p className="mx-auto mb-[26px] max-w-[420px] font-serif italic leading-[1.55] text-[#5a6070] text-[clamp(14px,1.2vw,16px)]">
            &ldquo;From the hills he knows, to the city she calls home.
            <br />
            The last celebration, and the best one yet.&rdquo;
          </p>
          <Button
            variant="cta"
            onClick={() => window.open("https://maps.google.com/?q=Hilton+Colombo", "_blank", "noopener")}
          >
            View on Maps
          </Button>
        </div>
        <div className="mask-fade-l md:order-2">
          <img
            src={images.colomboSketch}
            alt="Sketch of the Colombo skyline and the Hilton Colombo"
            width={1448}
            height={1086}
            loading="lazy"
            decoding="async"
            className="w-full object-contain"
          />
        </div>
      </Reveal>
      <div className="curtain" />
    </section>
  );
}
