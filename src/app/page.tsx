import { Hero } from "@/widgets/Hero";
import { Prices } from "@/widgets/Prices";
import { Services } from "@/widgets/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Prices />
    </main>
  );
}
