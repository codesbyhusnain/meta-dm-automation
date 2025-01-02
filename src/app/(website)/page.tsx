import { FAQ } from "@/components/landing/faq";
import { Features } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { Pricing } from "@/components/landing/pricing";
import { Steps } from "@/components/landing/steps";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Steps />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
