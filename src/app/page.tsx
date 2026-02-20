import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Palette,
  Megaphone,
  PenTool,
  Star,
  ArrowRight,
  Users,
  Award,
  Globe,
  CheckCircle,
  Phone,
  FileText,
  Sparkles,
  Quote,
} from "lucide-react";
import { books } from "@/data/books";

const services = [
  {
    icon: PenTool,
    title: "Book Writing",
    description:
      "Our experienced ghostwriters bring your ideas to life, crafting compelling narratives that captivate readers.",
    image: "/images/services/book-writing.webp",
  },
  {
    icon: FileText,
    title: "Book Editing",
    description:
      "Expert editors refine your manuscript with developmental editing, copyediting, and proofreading.",
    image: "/images/services/book-editing.webp",
  },
  {
    icon: BookOpen,
    title: "Book Publishing",
    description:
      "End-to-end publishing from ISBN registration and formatting to global distribution across all platforms.",
    image: "/images/services/publishing.webp",
  },
  {
    icon: Megaphone,
    title: "Book Marketing",
    description:
      "Strategic campaigns to build your author brand and drive book sales with proven marketing tactics.",
    image: "/images/services/book-marketing.webp",
  },
];

const stats = [
  { value: "500+", label: "Books Published", icon: BookOpen },
  { value: "200+", label: "Happy Authors", icon: Users },
  { value: "15+", label: "Years Experience", icon: Award },
  { value: "30+", label: "Countries Reached", icon: Globe },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Fiction Author",
    quote:
      "Authors Publishing Hub transformed my manuscript into a bestseller. Their editing team is phenomenal and the cover design exceeded all my expectations!",
    rating: 5,
    image: "/images/testimonial1.png",
  },
  {
    name: "James Rodriguez",
    role: "Non-Fiction Writer",
    quote:
      "From cover design to marketing, every step was handled with incredible professionalism. I couldn't have asked for a better publishing partner.",
    rating: 5,
    image: "/images/testimonial2.png",
  },
  {
    name: "Emily Chen",
    role: "Children's Book Author",
    quote:
      "The team understood my vision perfectly. My book looks absolutely stunning and the sales have been incredible since launch day.",
    rating: 5,
    image: "/images/testimonial3.png",
  },
];

const process = [
  {
    step: "01",
    title: "Draft Submission",
    description:
      "Submit your manuscript along with your requirements for editing, design, and publishing.",
  },
  {
    step: "02",
    title: "Editing & Proofreading",
    description:
      "An experienced editor reviews, edits, and proofreads your manuscript meticulously.",
  },
  {
    step: "03",
    title: "Design & Formatting",
    description:
      "Professional typesetting, cover design, illustrations, and interior layout for your book.",
  },
  {
    step: "04",
    title: "Publish & Market",
    description:
      "Your book goes live on all major platforms with a tailored marketing strategy to reach readers.",
  },
];

const portfolio = [
  { src: "/images/books/book1.png", title: "The Art of Living" },
  { src: "/images/books/book2.png", title: "Midnight Shadows" },
  { src: "/images/books/book3.png", title: "Beyond the Horizon" },
  { src: "/images/books/book4.png", title: "Silent Echoes" },
  { src: "/images/books/book5.png", title: "Rising Stars" },
];

const homeBooks = books.slice(0, 12);

const trustImages = [
  { src: "/images/clients/enroll-business.png", alt: "Enroll Business" },
  { src: "/images/clients/brownbook.png", alt: "BrownBook.net" },
  { src: "/images/clients/proven-expert.png", alt: "Proven Expert" },
  { src: "/images/clients/bark.png", alt: "Bark" },
  { src: "/images/clients/trustpilot.png", alt: "Trustpilot" },
];

export default function Home() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image */}
        <Image
          src="/images/hero-books-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/90 to-purple-dark/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-navy/60" />
        <div className="absolute inset-0 line-pattern opacity-40" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-80 h-80 bg-gold rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
                <Sparkles size={16} className="text-gold" />
                <span className="text-white/80 text-sm font-medium">
                  #1 Trusted Publishing Partner
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up animate-delay-100">
                Full-Service Book Publishing to Help Your Book Reach Its{" "}
                <span className="text-gradient">Full Potential</span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-white/75 leading-relaxed max-w-xl animate-fade-in-up animate-delay-200">
                Our seasoned staff takes care of everything involved in
                publishing — from editing manuscripts to designing covers and
                distributing your book to readers worldwide.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up animate-delay-300">
                <Link
                  href="/contact"
                  className="btn-shimmer bg-gold hover:bg-gold-light text-navy-dark font-bold px-8 py-4 rounded-full text-lg transition-colors duration-200 flex items-center gap-2"
                >
                  Get A Free Quote
                  <ArrowRight size={20} />
                </Link>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-3 text-white hover:text-gold transition-colors py-4 px-2"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center animate-pulse-glow">
                    <Phone size={20} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Call Us Now</div>
                    <div className="font-semibold">+1 (555) 123-4567</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center animate-fade-in-up animate-delay-400">
              <Image
                src="/images/book-wrap.png"
                alt="Published Books"
                width={550}
                height={450}
                className="drop-shadow-2xl animate-float"
                priority
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ===== TRUST BADGES MARQUEE ===== */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-400 font-medium uppercase tracking-widest mb-6">
            Trusted by Clients Nationwide
          </p>
          <div className="marquee-container">
            <div className="marquee-track">
              {[...trustImages, ...trustImages, ...trustImages].map((badge, i) => (
                <div key={i} className="mx-10 shrink-0 opacity-70 hover:opacity-100 transition-opacity">
                  <Image src={badge.src} alt={badge.alt} width={160} height={60} className="h-12 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="stat-card text-center bg-cream rounded-2xl p-6"
              >
                <div className="w-14 h-14 rounded-2xl gradient-purple-navy flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={24} className="text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-navy">
                  {stat.value}
                </div>
                <div className="text-gray-500 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 bg-cream dot-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
              Reach Your Literary Goals With{" "}
              <span className="text-gradient-purple">Reliable Services</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Professionalism, careful attention to detail, and a stress-free
              experience at every step of your publishing journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover card-glow group"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-48 h-48 sm:h-auto relative shrink-0 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 gradient-purple-navy opacity-30" />
                  </div>
                  <div className="p-7 flex-1">
                    <div className="w-12 h-12 rounded-xl gradient-purple-navy flex items-center justify-center mb-4">
                      <service.icon size={22} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1.5 mt-4 text-purple font-semibold hover:text-navy transition-colors group/link"
                    >
                      Learn More
                      <ArrowRight
                        size={16}
                        className="group-hover/link:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="gradient-purple-navy relative overflow-hidden">
        <div className="absolute inset-0 line-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Seize the Moment! Watch Your Book Grow Into a{" "}
                <span className="text-gradient">Masterpiece</span>
              </h2>
              <p className="mt-3 text-white/70 text-lg max-w-xl">
                Hop on a call and learn how we can help you access the full
                potential of your book.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="btn-shimmer bg-gold hover:bg-gold-light text-navy-dark font-bold px-8 py-4 rounded-full transition-colors flex items-center gap-2"
              >
                Get Started <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+15551234567"
                className="border-2 border-white/30 hover:border-gold text-white hover:text-gold font-semibold px-8 py-4 rounded-full transition-colors flex items-center gap-2"
              >
                <Phone size={18} /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS / PROCESS ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              A systematic, professional, and fast publishing process designed
              to transform aspiring writers into published authors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative group">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-purple/30 to-gold/30" />
                )}
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full gradient-purple-navy flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple/20">
                    <span className="text-3xl font-bold text-gold">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO ===== */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 line-pattern" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-gold rounded-full blur-[100px]" />
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-magenta rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Our <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto text-lg">
              A glimpse at some of the incredible books we&apos;ve helped authors
              publish.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {portfolio.map((book) => (
              <div
                key={book.title}
                className="portfolio-item relative group rounded-2xl overflow-hidden w-44 sm:w-52"
              >
                <div className="aspect-[3/4] relative">
                  <Image
                    src={book.src}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold text-sm">
                      {book.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy-dark font-bold px-8 py-4 rounded-full transition-colors"
            >
              View Full Portfolio <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-divider mb-4" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
                The Most Seamless and Fastest{" "}
                <span className="text-gradient-purple">Publishing Process</span>
              </h2>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                We house experienced writing professionals who have marked their
                names in every field of book writing. No matter the genre or
                format, we have mastered them all. With our team&apos;s excellence
                and expertise, we&apos;ve successfully transformed hundreds of
                aspiring writers into published authors.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  "Professional Look & Feel",
                  "Global Distribution",
                  "100% Royalties — You Own Your Work",
                  "Award-Winning Cover Design",
                  "Distribution to 40,000+ Retailers",
                  "Dedicated Project Manager",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <CheckCircle size={20} className="text-gold shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/contact"
                  className="btn-shimmer bg-gold hover:bg-gold-light text-navy-dark font-bold px-8 py-4 rounded-full transition-colors flex items-center gap-2"
                >
                  Get A Free Quote <ArrowRight size={18} />
                </Link>
                <a
                  href="tel:+15551234567"
                  className="border-2 border-navy hover:border-purple text-navy hover:text-purple font-semibold px-8 py-4 rounded-full transition-colors flex items-center gap-2"
                >
                  <Phone size={18} /> +1 (555) 123-4567
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-4 rounded-3xl bg-purple/10 blur-2xl" />
              <Image
                src="/images/about-hero.png"
                alt="Publishing Excellence"
                width={600}
                height={500}
                className="relative rounded-3xl shadow-2xl shadow-navy/10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 bg-cream dot-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
              Our Clients{" "}
              <span className="text-gradient-purple">Bear Witness</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              There is nothing more refreshing than the kind words of our
              clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl p-8 shadow-sm card-hover card-glow relative"
              >
                <Quote
                  size={40}
                  className="absolute top-6 right-6 text-purple/10"
                />
                <div className="flex items-center gap-4 mb-5">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gold"
                  />
                  <div>
                    <div className="font-bold text-navy">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-purple font-medium">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-gold fill-gold"
                    />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-purple-navy rounded-3xl p-12 sm:p-16 relative overflow-hidden text-center">
            <div className="absolute inset-0 line-pattern" />
            <div className="absolute inset-0 opacity-15">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold rounded-full blur-[100px]" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-magenta rounded-full blur-[100px]" />
            </div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Get A Free, Customized{" "}
                <span className="text-gradient">Price Estimate</span> Today!
              </h2>
              <p className="mt-4 text-white/75 text-lg max-w-xl mx-auto">
                Talk to our experts to receive a quotation tailored to your
                needs. Your publishing dream is just one conversation away.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn-shimmer bg-gold hover:bg-gold-light text-navy-dark font-bold px-10 py-4 rounded-full text-lg transition-colors flex items-center gap-2"
                >
                  Get Started <ArrowRight size={20} />
                </Link>
                <a
                  href="tel:+15551234567"
                  className="border-2 border-white/30 hover:border-gold text-white hover:text-gold font-semibold px-8 py-4 rounded-full transition-colors flex items-center gap-2 text-lg"
                >
                  <Phone size={20} /> +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
