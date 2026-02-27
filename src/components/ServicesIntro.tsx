import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ServicesIntro() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-cream dot-pattern">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="section-divider mb-4 mx-auto lg:mx-0" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy leading-tight">
              Reach Your Literary Goals With{" "}
              <span className="text-gradient-purple">Reliable Book Publishing Services</span>
            </h2>
            <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
              Professionalism, careful attention to detail, and a stress-free
              encounter are all highly valued by us. Every step of the
              publishing process, from evaluating your manuscript through
              formatting, cover design, printing, and distribution, is taken
              care of by our devoted team. Through our extensive knowledge of
              the publishing industry, attentive service, and unwavering
              dedication to quality, we ensure that your book achieves the
              greatest potential success in the marketplace.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                href="/services"
                className="btn-shimmer bg-gold hover:bg-gold-light text-navy-dark font-semibold px-6 py-2.5 rounded-full text-sm tracking-wide transition-all duration-200 inline-flex items-center gap-2 shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
              >
                View All Services <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center mt-6 lg:mt-0">
            <div className="relative w-full max-w-md lg:max-w-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <Image
                src="/images/publishing-book.png"
                alt="Book Publishing Services"
                width={550}
                height={450}
                className="object-cover w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
