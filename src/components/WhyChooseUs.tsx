import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";

const features = [
  "Professional Look & Feel",
  "Global Distribution",
  "100% Royalties — You Own Your Work",
  "Award-Winning Cover Design",
  "Distribution to 40,000+ Retailers",
  "Dedicated Project Manager",
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="section-divider mb-4 mx-auto lg:mx-0" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy leading-tight">
              The Most Seamless and Fastest{" "}
              <span className="text-gradient-purple">Publishing Process</span>
            </h2>
            <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
              We house experienced writing professionals who have marked their
              names in every field of book writing. No matter the genre or
              format, we have mastered them all. With our team&apos;s excellence
              and expertise, we&apos;ve successfully transformed hundreds of
              aspiring writers into published authors.
            </p>

            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <CheckCircle size={18} className="text-gold shrink-0" />
                  <span className="font-medium text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="btn-shimmer bg-gold hover:bg-gold-light text-navy-dark font-semibold px-6 py-2.5 rounded-full text-sm tracking-wide transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
              >
                Get A Free Quote <ArrowRight size={15} />
              </Link>
              <a
                href="tel:+18503386681"
                className="border border-navy hover:border-purple text-navy hover:text-purple font-medium px-6 py-2.5 rounded-full text-sm tracking-wide transition-all duration-200 flex items-center gap-2 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
              >
                <Phone size={18} /> +1 (850) 338-6681
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center mt-6 lg:mt-0">
            <Image
              src="/images/book-publishing-sec.webp"
              alt="Publishing Excellence"
              width={550}
              height={550}
              className="relative w-full max-w-md lg:max-w-none h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
