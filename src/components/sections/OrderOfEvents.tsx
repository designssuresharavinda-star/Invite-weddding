import { Reveal } from "@/components/Reveal";
import { Eyebrow, Script } from "@/components/typography";
import { images } from "@/data/images";

const EVENTS = [
  { icon: images.iconChurch, time: "3.30pm", name: "Church Mass" },
  { icon: images.iconGazebo, time: "6.30pm", name: "Poruwa Ceremony" },
  { icon: images.iconCake, time: "7.45pm", name: "Cake Cutting" },
  { icon: images.iconDancers, time: "8.00pm", name: "First Dance" },
  { icon: images.iconPlate, time: "8.30pm", name: "Dinner & Toasts" },
  { icon: images.iconChampagne, time: "9.30pm", name: "Party & Dance" },
];

export function OrderOfEvents() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center bg-navy px-10 py-[72px] text-center">
      <Reveal className="w-full max-w-[1180px]">
        <Eyebrow className="tracking-[0.5em] text-[#9fb0cf]">The Day</Eyebrow>
        <Script className="my-[10px] text-[clamp(34px,5vw,66px)]">Order of Events</Script>
        <div className="mt-[50px] grid grid-cols-6 gap-6 max-[860px]:grid-cols-3 max-[860px]:gap-x-4 max-[860px]:gap-y-[34px] max-[480px]:grid-cols-2">
          {EVENTS.map((e) => (
            <div key={e.name} className="flex flex-col items-center gap-4">
              <span
                className="ev-icon h-[clamp(58px,6vw,92px)] w-[clamp(58px,6vw,92px)]"
                style={{ ["--icon" as string]: `url("${e.icon}")` }}
              />
              <span className="font-serif text-[#e7ead6] text-[clamp(13px,1.3vw,18px)]">{e.time}</span>
              <span className="font-script text-[#dfe3d4] text-[clamp(17px,1.8vw,24px)]">{e.name}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
