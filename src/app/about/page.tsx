import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import CTABannerCards from "@/components/CTABannerCards";
import FreeEstimateCTA from "@/components/FreeEstimateCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Authors Publishing Hub — a passionate team of publishing professionals dedicated to transforming your writing dreams into bestselling reality. Trusted by 1000+ authors nationwide.",
  keywords: ["about authors publishing hub", "book publishing company", "publishing team USA", "our story"],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us — Authors Publishing Hub",
    description: "Meet the passionate team behind your publishing success. From manuscript to marketplace.",
    url: "https://authorspublishinghub.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden min-h-[50vh] sm:min-h-[55vh] lg:min-h-[60vh] flex items-center">
        <Image
          src="/images/hero-books-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/93 via-navy/88 to-purple-dark/83" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/83 via-black/48 to-navy/65" />
        <div className="absolute inset-0 line-pattern opacity-30" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-gold rounded-full blur-[100px]" />
          <div className="absolute bottom-10 left-5 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-divider mx-auto mb-4" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
              About <span className="text-gradient">Us</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-white/75 leading-relaxed max-w-2xl mx-auto">
              We&apos;re a passionate team of publishing professionals dedicated
              to helping authors turn their manuscripts into beautifully
              published books that reach readers worldwide.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="section-divider mb-4 mx-auto lg:mx-0" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy mb-4 sm:mb-6">
                Our <span className="text-gradient-purple">Story</span>
              </h2>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-navy mb-3 sm:mb-4">
                Transforming Your Writing Dream into a Best-Selling Reality, Step by Step.
              </h3>
              <div className="space-y-4 sm:space-y-5 text-gray-600 text-base sm:text-lg leading-relaxed">
                <p>
                  As avid believers in the power of storytelling, we at Authors Publishing Hub are dedicated to helping you achieve your writing and publication dreams. Whether you want to share your personal journey, craft a captivating work of fiction, or delve into a historical topic, our passionate book enthusiasts will refine your experience word by word.
                </p>
                <p>
                  Our seasoned experts are masters of their respective genres, boasting a wealth of experience and talent that sets us apart from the competition.
                </p>
              </div>
              <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  "Industry-Leading Standards",
                  "Dedicated Support Team",
                  "Global Distribution Network",
                  "100% Author Ownership",
                  "Award-Winning Cover Design",
                  "Personalized Publishing Plans",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <CheckCircle size={18} className="text-gold shrink-0" />
                    <span className="font-medium text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-6 lg:mt-0">
              <Image
                src="/images/about.jpg"
                alt="About Authors Publishing Hub"
                width={600}
                height={500}
                className="relative rounded-2xl sm:rounded-3xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABannerCards />
      <FreeEstimateCTA />
    </>
  );
}
