import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  PenTool,
  FileText,
  BookOpen,
  Megaphone,
} from "lucide-react";
import CTABannerCards from "@/components/CTABannerCards";
import FreeEstimateCTA from "@/components/FreeEstimateCTA";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive book publishing services — professional book writing, expert editing & proofreading, full-service publishing, and strategic book marketing. Affordable packages for authors in the USA.",
  keywords: [
    "book writing services",
    "book editing services USA",
    "book publishing services",
    "book marketing strategies",
    "ghostwriting services",
    "manuscript editing",
    "affordable book publishing",
    "professional book editors",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Our Services — Authors Publishing Hub",
    description: "From book writing to marketing — comprehensive publishing solutions tailored to your needs.",
    url: "https://authorspublishinghub.com/services",
  },
};

export default function ServicesPage() {
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
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-white/75 leading-relaxed max-w-2xl mx-auto">
              Comprehensive publishing solutions tailored to your unique needs.
              From first draft to bestseller — we&apos;ve got you covered.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Book Writing Service */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-gold/10 text-gold-dark px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-5">
                <PenTool size={14} /> Book Writing
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy leading-tight">
                Ideal Book Writing Services
              </h2>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-purple mt-2 sm:mt-3">
                Where Affordability Meets Quality!
              </h3>
              <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
                One of the easiest and most direct ways to publish your book is
                through Authors Publishing Hub&apos;s book authoring service. You
                won&apos;t be inconvenienced in the slightest during the short and
                easy planning process. Our team is competent to manage your needs
                for professional book-writing services.
              </p>
              <div className="mt-5 sm:mt-6 bg-cream rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <h4 className="font-bold text-navy text-base sm:text-lg mb-2 sm:mb-3">
                  Expert Book Writers in the USA That Improve Your Lead Generation
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Our book-writing company creates captivating content for clients
                  that draws readers in, encourages conversions, and keeps them
                  interested for the longest amount of time. Until they completely
                  become customers, the audience is captivated by your brand. Employ
                  qualified USA book writers to benefit from the wealth of experience
                  gained over more than 10 years.
                </p>
              </div>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="btn-shimmer bg-gold hover:bg-gold-light text-navy-dark font-semibold px-6 py-2.5 rounded-full text-sm tracking-wide transition-all duration-200 inline-flex items-center gap-2 shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                >
                  Get Started <ArrowRight size={15} />
                </Link>
                <a
                  href="tel:+18503386681"
                  className="border border-navy hover:border-purple text-navy hover:text-purple font-medium px-6 py-2.5 rounded-full text-sm tracking-wide transition-all duration-200 inline-flex items-center gap-2 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                >
                  <Phone size={15} /> +1 (850) 338-6681
                </a>
              </div>
            </div>
            <div className="relative mt-6 lg:mt-0">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-purple/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/services/writing-service.jpg"
                  alt="Book Writing Service"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Editing Service */}
      <section className="py-12 sm:py-16 lg:py-20 bg-cream dot-pattern">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div className="order-2 lg:order-1 relative mt-6 lg:mt-0">
              <div className="absolute -inset-4 bg-gradient-to-br from-purple/20 to-gold/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/services/editing-service.jpg"
                  alt="Book Editing Service"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent rounded-2xl" />
              </div>
            </div>
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-purple/10 text-purple px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-5">
                <FileText size={14} /> Book Editing
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy leading-tight">
                Book Editing Service in the USA
              </h2>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-purple mt-2 sm:mt-3">
                Eliminating All Flaws From the Content
              </h3>
              <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
                A perfectionist editorial services firm, Authors Publishing Hub
                boasts a large network of experienced book editors. Our reasonably
                priced book editors correct grammar errors, fix defects, and provide
                a flawless copy. Having been in business for more than a decade, our
                expert book editing service takes satisfaction in consistently meeting
                or surpassing the expectations of more than a thousand customers.
              </p>
              <div className="mt-5 sm:mt-6 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <h4 className="font-bold text-navy text-base sm:text-lg mb-2 sm:mb-3">
                  Make Your Writing Better With Our Book Editing Service
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Our team of exceptional book editors, hand-selected to offer the
                  best book editing services in the USA, is something we are quite
                  proud of. With decades of experience in the field, we have
                  successfully advanced numerous prestigious clients to the forefront
                  of success with our literary magic. Here, with our reliable and
                  reasonably priced book editors, is where your quest to becoming a
                  best-selling author begins.
                </p>
              </div>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="btn-shimmer bg-gold hover:bg-gold-light text-navy-dark font-semibold px-6 py-2.5 rounded-full text-sm tracking-wide transition-all duration-200 inline-flex items-center gap-2 shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                >
                  Get Started <ArrowRight size={15} />
                </Link>
                <a
                  href="tel:+18503386681"
                  className="border border-navy hover:border-purple text-navy hover:text-purple font-medium px-6 py-2.5 rounded-full text-sm tracking-wide transition-all duration-200 inline-flex items-center gap-2 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                >
                  <Phone size={15} /> +1 (850) 338-6681
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Publishing Service */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-gold/10 text-gold-dark px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-5">
                <BookOpen size={14} /> Book Publishing
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy leading-tight">
                Full-Service Book Publishing
              </h2>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-purple mt-2 sm:mt-3">
                Help Your Book Reach Its Full Potential
              </h3>
              <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
                Our seasoned staff takes care of everything involved in publishing,
                from assessing and editing manuscripts to laying them out in a book
                and designing its cover. Thanks to our in-depth expertise and
                unwavering commitment to quality, we can get your book noticed by
                the right people and into the hands of readers all over the world.
              </p>
              <div className="mt-5 sm:mt-6 bg-cream rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <h4 className="font-bold text-navy text-base sm:text-lg mb-2 sm:mb-3">
                  Reach Your Literary Goals With Reliable Book Publishing Services
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Professionalism, careful attention to detail, and a stress-free
                  encounter are all highly valued by us. Every step of the publishing
                  process, from evaluating your manuscript through formatting, cover
                  design, printing, and distribution, is taken care of by our devoted
                  team. Through our extensive knowledge of the publishing industry,
                  attentive service, and unwavering dedication to quality, we ensure
                  that your book achieves the greatest potential success in the
                  marketplace.
                </p>
              </div>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="btn-shimmer bg-gold hover:bg-gold-light text-navy-dark font-semibold px-6 py-2.5 rounded-full text-sm tracking-wide transition-all duration-200 inline-flex items-center gap-2 shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                >
                  Get A Quote <ArrowRight size={15} />
                </Link>
                <a
                  href="tel:+18503386681"
                  className="border border-navy hover:border-purple text-navy hover:text-purple font-medium px-6 py-2.5 rounded-full text-sm tracking-wide transition-all duration-200 inline-flex items-center gap-2 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                >
                  <Phone size={15} /> +1 (850) 338-6681
                </a>
              </div>
            </div>
            <div className="relative mt-6 lg:mt-0">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-purple/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/services/publishing-service.jpg"
                  alt="Book Publishing Service"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Marketing Service */}
      <section className="py-12 sm:py-16 lg:py-20 bg-cream dot-pattern">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div className="order-2 lg:order-1 relative mt-6 lg:mt-0">
              <div className="absolute -inset-4 bg-gradient-to-br from-purple/20 to-gold/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/services/marketing-service.jpg"
                  alt="Book Marketing Service"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent rounded-2xl" />
              </div>
            </div>
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-purple/10 text-purple px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-5">
                <Megaphone size={14} /> Book Marketing
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy leading-tight">
                Comprehensive Book Marketing Strategies
              </h2>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-purple mt-2 sm:mt-3">
                Help You Reach 1+ Million Readers
              </h3>
              <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
                Effective book marketing is crucial in today&apos;s competitive
                publishing environment so that your book may reach its intended
                audience. We help you increase sales and build your author brand by
                using our knowledge and skills in marketing to set you out from the
                competition and connect with your ideal readers.
              </p>
              <div className="mt-5 sm:mt-6 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <h4 className="font-bold text-navy text-base sm:text-lg mb-2 sm:mb-3">
                  Promoting Your Book to Help You Make More Money
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Our expert marketing staff recognizes that every book is different,
                  so they develop individualized plans based on your objectives and
                  the demographics of your intended audience. We use a comprehensive
                  strategy to increase awareness of your book and encourage real
                  interest from readers. This includes creating an engaging web
                  presence, organizing promotional campaigns, and gaining media
                  attention. Our book marketing services are second to none, and you
                  can rely on us to help your book reach its maximum potential.
                </p>
              </div>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="btn-shimmer bg-gold hover:bg-gold-light text-navy-dark font-semibold px-6 py-2.5 rounded-full text-sm tracking-wide transition-all duration-200 inline-flex items-center gap-2 shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                >
                  Get Started <ArrowRight size={15} />
                </Link>
                <a
                  href="tel:+18503386681"
                  className="border border-navy hover:border-purple text-navy hover:text-purple font-medium px-6 py-2.5 rounded-full text-sm tracking-wide transition-all duration-200 inline-flex items-center gap-2 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                >
                  <Phone size={15} /> +1 (850) 338-6681
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABannerCards />
      <FreeEstimateCTA />
    </>
  );
}
