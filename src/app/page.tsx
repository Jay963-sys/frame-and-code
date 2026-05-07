import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import DigitalPortfolio from "@/components/DigitalPortfolio";
import Process from "@/components/Process";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-[var(--color-bg)]">
      <Hero />
      <Marquee />
      <About />
      <Portfolio />
      <DigitalPortfolio />
      <Process />
      <Capabilities />
      <Contact />
    </div>
  );
}
