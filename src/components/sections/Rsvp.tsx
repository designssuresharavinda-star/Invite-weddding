import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, Script } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Rsvp() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const first = () => (name.trim() ? name.trim().split(" ")[0] : "friend");

  return (
    <section className="velvet relative flex min-h-screen w-full flex-col items-center justify-center px-10 py-[72px] text-center">
      <Reveal className="w-full max-w-[1120px]">
        <Eyebrow className="tracking-[0.4em] text-white/80">Every celebration needs its people</Eyebrow>
        <Script className="mt-[10px] mb-[44px] text-[clamp(30px,4.4vw,58px)]">Write your name into the day</Script>
        <div className="grid items-center gap-[50px] md:grid-cols-[0.85fr_1.15fr]">
          <div className="envelope mx-auto w-[min(300px,80%)]">
            <div className="envelope-flap" />
            <div className="envelope-card">
              <h3 className="mb-2 font-script text-blue text-[clamp(30px,4vw,46px)]">Kindly RSVP</h3>
              <p className="m-0 text-center font-serif italic leading-[1.5] text-[#5c5344] text-[clamp(12px,1.15vw,15px)]">
                Let us know by 30 September,
                <br />
                We hope to see you be a part
                <br />
                of our big day!
              </p>
            </div>
          </div>
          <form className="text-center" onSubmit={(e) => e.preventDefault()}>
            <label className="sr-only" htmlFor="rsvpName">Your full name</label>
            <Input
              id="rsvpName"
              name="fullname"
              autoComplete="name"
              placeholder="YOUR FULL NAME"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="mt-6 flex flex-wrap justify-center gap-[22px] max-[480px]:flex-col max-[480px]:gap-[14px]">
              <Button
                type="button"
                variant="pill"
                onClick={() => setMessage(`Wonderful, ${first()} — we can’t wait to celebrate with you! ♡`)}
              >
                Yes, I&rsquo;ll be there
              </Button>
              <Button
                type="button"
                variant="pill"
                onClick={() => setMessage(`We’ll miss you, ${first()}, but thank you for letting us know.`)}
              >
                Sorry, I can&rsquo;t make it
              </Button>
            </div>
            <p className="mt-[18px] min-h-[1.4em] font-serif italic text-cream text-base" role="status" aria-live="polite">
              {message}
            </p>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
