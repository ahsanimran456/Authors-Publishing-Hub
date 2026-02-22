import HeroSection from "@/components/HeroSection";
import ServicesIntro from "@/components/ServicesIntro";
import CTABannerCards from "@/components/CTABannerCards";
import FreeEstimateCTA from "@/components/FreeEstimateCTA";
import BookPublishingOptions from "@/components/BookPublishingOptions";
import PortfolioSection from "@/components/PortfolioSection";
import OurClients from "@/components/OurClients";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactFormSection from "@/components/ContactFormSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesIntro />
      <CTABannerCards />
      <FreeEstimateCTA />
      <BookPublishingOptions />
      <PortfolioSection />
      <OurClients />
      <ProcessSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <ContactFormSection />
    </>
  );
}
