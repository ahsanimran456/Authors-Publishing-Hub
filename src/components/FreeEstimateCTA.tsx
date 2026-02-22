import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

export default function FreeEstimateCTA() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 bg-cream dot-pattern">
      <div className="relative max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <div className="section-divider mx-auto mb-4" />
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy leading-tight">
          Get A Free, Customized Price Estimate Today!
        </h2>
        <p className="mt-3 sm:mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Talk to us to receive a quotation price tailored to your needs.
        </p>
        <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/contact"
            className="btn-shimmer bg-gold hover:bg-gold-light text-navy-dark font-semibold px-6 py-2.5 rounded-full text-sm tracking-wide transition-all duration-200 inline-flex items-center gap-2 shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            Get Started
          </Link>
          <a
            href="#"
            className="bg-navy hover:bg-navy-light text-white font-semibold px-6 py-2.5 rounded-full text-sm tracking-wide transition-all duration-200 inline-flex items-center gap-2 shadow-lg hover:shadow-navy/20 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={15} /> Live Chat
          </a>
          <a
            href="tel:+18503386681"
            className="border border-navy hover:border-purple text-navy hover:text-purple font-medium px-6 py-2.5 rounded-full text-sm tracking-wide transition-all duration-200 inline-flex items-center gap-2 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            <Phone size={15} /> +1 (850) 338-6681
          </a>
        </div>
      </div>
    </section>
  );
}
