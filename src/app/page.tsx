import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Authors Publishing Hub — Professional Book Publishing Services USA",
  description:
    "Full-service book publishing company offering professional writing, editing, publishing & marketing services. From manuscript to bestseller — trusted by 1000+ authors across the USA. Get a free quote today!",
  keywords: [
    "book publishing services USA",
    "professional book writing",
    "book editing services",
    "book marketing agency",
    "self publish my book",
    "manuscript to published book",
    "affordable book publishing",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Authors Publishing Hub — Professional Book Publishing Services",
    description: "Transform your manuscript into a bestseller with our expert publishing team.",
    url: "https://authorspublishinghub.com",
  },
};

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
