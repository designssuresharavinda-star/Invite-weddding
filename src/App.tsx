import { Hero } from "@/components/sections/Hero";
import { Letter } from "@/components/sections/Letter";
import { Countdown } from "@/components/sections/Countdown";
import { VenueChurch } from "@/components/sections/VenueChurch";
import { VenueReception } from "@/components/sections/VenueReception";
import { Rsvp } from "@/components/sections/Rsvp";
import { Gifts } from "@/components/sections/Gifts";
import { OrderOfEvents } from "@/components/sections/OrderOfEvents";
import { Finale } from "@/components/sections/Finale";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <>
      <Hero />
      <Letter />
      <Countdown />
      <VenueChurch />
      <VenueReception />
      <Rsvp />
      <Gifts />
      <OrderOfEvents />
      <Finale />
      <Footer />
    </>
  );
}
