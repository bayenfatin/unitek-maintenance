import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Brands } from "@/components/home/Brands";
import { Data40 } from "@/components/home/Data40";
import { CtaUrgence } from "@/components/home/CtaUrgence";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Brands />
      <Data40 />
      <CtaUrgence />
    </main>
  );
}
