import Booking from "@/Components/Home/Booking";
import Contact from "@/Components/Home/Contact";
import Destination from "@/Components/Home/Destination";
import Hero from "@/Components/Home/Hero";
import PopularTour from "@/Components/Home/PopularTour";
import TravelCounter from "@/Components/Home/TravelCounter";
export default function App() {
  return (
    <div>
      <Hero />
      <PopularTour />
      <TravelCounter />
      <Destination />
      <Booking />
      <Contact />
    </div>
  );
}
