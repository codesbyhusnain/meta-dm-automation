import BrandVoiceShowcase from "@/components/landing/brand-voice";
import { FAQ } from "@/components/landing/faq";
import { Features } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { Pricing } from "@/components/landing/pricing";
import { Steps } from "@/components/landing/steps";
import WhyUs from "@/components/landing/why-us";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <WhyUs />
      <BrandVoiceShowcase />
      <Steps />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
