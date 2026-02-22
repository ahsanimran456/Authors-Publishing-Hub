import type { Metadata } from "next";
import Image from "next/image";
import ContactFormSection from "@/components/ContactFormSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Authors Publishing Hub. Request a free quote for book writing, editing, publishing & marketing services. Call +1 (850) 338-6681 or fill out our contact form.",
  keywords: [
    "contact authors publishing hub",
    "book publishing quote",
    "free publishing estimate",
    "book publishing inquiry",
    "hire book publisher",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us — Authors Publishing Hub",
    description: "Start your publishing journey today. Get a free, customized price estimate.",
    url: "https://authorspublishinghub.com/contact",
  },
};

export default function ContactPage() {
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
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/80 to-purple-dark/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-navy/40" />
        <div className="absolute inset-0 line-pattern opacity-30" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-gold rounded-full blur-[100px]" />
          <div className="absolute bottom-10 left-5 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-divider mx-auto mb-4" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-white/75 leading-relaxed max-w-2xl mx-auto">
              Ready to start your publishing journey? Fill out the form below
              so that we can assist you better. We&apos;d love to hear from you.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FFF8F0] to-transparent" />
      </section>

      <ContactFormSection />
    </>
  );
}
