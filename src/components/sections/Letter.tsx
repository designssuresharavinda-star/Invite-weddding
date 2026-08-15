import { Reveal } from "@/components/Reveal";
import { images } from "@/data/images";

export function Letter() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center border-b-[14px] border-navy bg-cream px-10 py-[72px]">
      <Reveal className="grid w-full max-w-[1120px] items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative flex justify-center">
          <img
            className="letter-frame w-[min(430px,90%)]"
            src={images.ovalLaceFrame}
            alt=""
            width={624}
            height={799}
            loading="lazy"
            decoding="async"
          />
          <div
            className="letter-crop"
            role="img"
            aria-label="Senuri and Shehan embracing"
            style={{ ["--photo" as string]: `url("${images.couplePhoto}")` }}
          />
        </div>
        <div className="text-[#2b3550]">
          <p className="mb-5 font-serif italic leading-[1.62] text-[clamp(16px,1.35vw,19px)] text-[#3a4360]">
            There are moments in life made even more meaningful
            <br />
            by the people we share them with.
          </p>
          <p className="mb-5 font-serif italic leading-[1.62] text-[clamp(16px,1.35vw,19px)] text-[#3a4360]">
            As we begin this beautiful new chapter together,
            <br />
            we feel incredibly lucky to have you by our side.
            <br />
            Your friendship, love and support have been part of our story,
            <br />
            and having you there as we say &ldquo;I do&rdquo; will make the day
            <br />
            all the more special.
          </p>
          <p className="mb-5 font-serif italic leading-[1.62] text-[clamp(16px,1.35vw,19px)] text-[#3a4360]">
            Here&rsquo;s to a day filled with happy tears, endless laughter, unforgettable moments
            <br />
            and, most importantly, love.
          </p>
          <p className="mt-[34px] font-script leading-[1.25] text-blue text-[clamp(30px,3.6vw,50px)]">
            With all our love,
            <br />
            The Future Mr. &amp; Mrs.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
