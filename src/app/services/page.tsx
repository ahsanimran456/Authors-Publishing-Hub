import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  PenTool,
  Palette,
  BookOpen,
  Megaphone,
  FileText,
  BarChart3,
  Headphones,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Authors Publishing Hub",
  description:
    "Explore our comprehensive publishing services — from professional editing and cover design to self-publishing and book marketing.",
};

const services = [
  {
    icon: PenTool,
    title: "Book Writing",
    description:
      "Our experienced ghostwriters bring your ideas to life, crafting compelling narratives that captivate readers from the first page.",
    features: [
      "Fiction & non-fiction ghostwriting",
      "Research & interviews",
      "Chapter-by-chapter drafts",
      "Unlimited revisions",
    ],
    image: "/images/services/book-writing.webp",
  },
  {
    icon: FileText,
    title: "Book Editing",
    description:
      "With flawless grammar, natural prose, and consistent storytelling, our expert editors will make your manuscript effective and polished.",
    features: [
      "Developmental editing",
      "Line editing & copyediting",
      "Proofreading",
      "Manuscript evaluation",
    ],
    image: "/images/services/book-editing.webp",
  },
  {
    icon: BookOpen,
    title: "Book Publishing",
    description:
      "Our all-inclusive publishing services take care of everything — from editing and proofreading to cover art, ISBN ordering, and global distribution.",
    features: [
      "ISBN registration",
      "eBook & print formatting",
      "Global distribution",
      "Platform setup & optimization",
    ],
    image: "/images/services/publishing.webp",
  },
  {
    icon: Megaphone,
    title: "Book Marketing",
    description:
      "Gain insight and applause from your distinguished audience as we implement the right marketing tactics for maximum impact.",
    features: [
      "Social media campaigns",
      "Amazon optimization",
      "Book launch strategy",
      "Email marketing",
    ],
    image: "/images/services/book-marketing.webp",
  },
  {
    icon: Palette,
    title: "Cover Design",
    description:
      "Custom cover designs that capture your book's essence and attract readers at first glance across every platform.",
    features: [
      "Custom illustration",
      "Typography design",
      "Multiple concepts",
      "Print & digital formats",
    ],
    image: "/images/services/cover-design.webp",
  },
  {
    icon: BarChart3,
    title: "Author Branding",
    description:
      "Build a compelling author brand that resonates with your target audience and strengthens your reputation as a writer.",
    features: [
      "Author website design",
      "Logo & brand identity",
      "Brand guidelines",
      "Bio & headshot direction",
    ],
    image: "/images/services/stars.webp",
  },
  {
    icon: Headphones,
    title: "Audiobook Production",
    description:
      "Professional audiobook recording and production for the rapidly growing audio market.",
    features: [
      "Narrator selection",
      "Studio recording",
      "Post-production editing",
      "Platform distribution",
    ],
    image: "/images/services/book-writing.webp",
  },
  {
    icon: Sparkles,
    title: "Interior Formatting",
    description:
      "Professional typesetting and layout that gives your book a polished, bookstore-ready look and feel.",
    features: [
      "Print-ready layouts",
      "eBook formatting",
      "Chapter design",
      "Image placement",
    ],
    image: "/images/services/book-editing.webp",
  },
];

const packages = [
  {
    name: "Starter",
    price: "$1,499",
    description: "Perfect for first-time authors",
    features: [
      "Manuscript evaluation",
      "Basic copyediting",
      "eBook formatting",
      "1 cover design concept",
      "Amazon KDP setup",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$3,499",
    description: "Our most popular publishing package",
    features: [
      "Full developmental editing",
      "Line editing & proofreading",
      "eBook + print formatting",
      "3 cover design concepts",
      "Multi-platform distribution",
      "Basic marketing plan",
      "Dedicated project manager",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$6,999",
    description: "The complete publishing experience",
    features: [
      "Everything in Professional",
      "Author branding package",
      "Custom author website",
      "Audiobook production",
      "Full marketing campaign",
      "Book launch strategy",
      "12-month marketing support",
      "VIP author support",
    ],
    highlighted: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 line-pattern" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gold rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-divider mx-auto mb-4" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="mt-6 text-lg text-white/75 leading-relaxed">
              Comprehensive publishing solutions tailored to your unique needs.
              From first draft to bestseller — we&apos;ve got you covered.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`bg-cream rounded-2xl overflow-hidden card-hover card-glow ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`flex flex-col lg:flex-row ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className="lg:w-2/5 h-64 lg:h-auto relative shrink-0 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 gradient-purple-navy opacity-30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-2xl glass flex items-center justify-center">
                        <service.icon size={36} className="text-gold" />
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-3/5 p-8 lg:p-10">
                    <h3 className="text-2xl font-bold text-navy mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-gray-700"
                        >
                          <CheckCircle size={16} className="text-gold-dark shrink-0" />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 mt-6 text-purple font-bold hover:text-navy transition-colors group"
                    >
                      Get Started
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-cream dot-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
              Publishing <span className="text-gradient-purple">Packages</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Choose the package that fits your publishing goals and budget.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-8 card-hover ${
                  pkg.highlighted
                    ? "gradient-purple-navy text-white ring-4 ring-gold/50 lg:scale-105 relative"
                    : "bg-white"
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy-dark text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3
                  className={`text-2xl font-bold ${
                    pkg.highlighted ? "text-white" : "text-navy"
                  }`}
                >
                  {pkg.name}
                </h3>
                <div
                  className={`text-4xl font-bold mt-2 ${
                    pkg.highlighted ? "text-gold" : "text-purple"
                  }`}
                >
                  {pkg.price}
                </div>
                <p
                  className={`mt-2 ${
                    pkg.highlighted ? "text-white/70" : "text-gray-500"
                  }`}
                >
                  {pkg.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle
                        size={16}
                        className={`shrink-0 ${
                          pkg.highlighted ? "text-gold" : "text-gold-dark"
                        }`}
                      />
                      <span
                        className={
                          pkg.highlighted ? "text-white/90" : "text-gray-700"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center mt-8 py-3.5 px-6 rounded-full font-bold transition-all duration-200 ${
                    pkg.highlighted
                      ? "btn-shimmer bg-gold hover:bg-gold-light text-navy-dark"
                      : "bg-navy hover:bg-navy-light text-white"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Not Sure Which Package Is Right?
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
            Contact us for a free consultation and we&apos;ll help you choose the
            perfect plan for your publishing journey.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-shimmer bg-gold hover:bg-gold-light text-navy-dark font-bold px-8 py-4 rounded-full transition-colors flex items-center gap-2"
            >
              Schedule a Free Consultation <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+15551234567"
              className="border-2 border-navy hover:border-purple text-navy hover:text-purple font-semibold px-8 py-4 rounded-full transition-colors flex items-center gap-2"
            >
              <Phone size={18} /> +1 (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
