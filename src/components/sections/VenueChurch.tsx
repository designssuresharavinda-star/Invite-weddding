import { Reveal } from "@/components/Reveal";
import { Eyebrow, Script } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { images } from "@/data/images";

export function VenueChurch() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center gap-5 bg-white px-10 pb-[72px] pt-[60px]">
      <Reveal className="flex w-full flex-col items-center gap-5">
        <div className="max-w-[900px] text-center">
          <Eyebrow tone="dark" className="tracking-[0.4em] text-[#7b8296]">Save these pins</Eyebrow>
          <Script tone="dark" className="mt-2 text-[clamp(30px,4.6vw,62px)]">From the ceremony to the dance floor</Script>
        </div>
        <div className="grid w-full max-w-[1160px] items-center gap-[30px] md:grid-cols-2">
          <div className="mask-fade-b">
            <img
              src={images.churchSketch}
              alt="Sketch of All Saints' Church, Borella"
              width={800}
              height={800}
              loading="lazy"
              decoding="async"
              className="w-full object-contain"
            />
          </div>
          <div className="px-6 text-center">
            <Script tone="dark" as="h3" className="mb-4 text-[clamp(30px,4vw,54px)] leading-[1.05]">Matrimonial Mass</Script>
            <p className="m-0 mb-[14px] pl-[0.34em] font-serif uppercase tracking-[0.34em] text-[#2f3956] text-[clamp(15px,1.7vw,22px)]">3:30 PM</p>
            <p className="m-0 mb-[22px] pl-[0.28em] font-serif font-medium uppercase leading-[1.5] tracking-[0.28em] text-[#3a4258] text-[clamp(14px,1.6vw,21px)]">All Saints&rsquo; Church, Borella.</p>
            <p className="mx-auto mb-[26px] max-w-[420px] font-serif italic leading-[1.55] text-[#5a6070] text-[clamp(14px,1.2vw,16px)]">
              &ldquo;A place of blessings we have returned to time and again
              <br />
              throughout our journey.&rdquo;
            </p>
            <Button
              variant="cta"
              onClick={() => window.open("https://maps.google.com/?q=All+Saints+Church+Borella", "_blank", "noopener")}
            >
              View on Maps
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
