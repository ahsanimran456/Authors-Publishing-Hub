import type { Metadata } from "next";
import Link from "next/link";
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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Authors Publishing Hub",
  description:
    "Explore our comprehensive publishing services — from professional editing and cover design to self-publishing and book marketing.",
};

const services = [
  {
    icon: PenTool,
    title: "Professional Editing",
    description:
      "Comprehensive editing services to polish your manuscript to perfection.",
    features: [
      "Developmental editing",
      "Line editing & copyediting",
      "Proofreading",
      "Manuscript evaluation",
    ],
  },
  {
    icon: Palette,
    title: "Cover Design",
    description:
      "Custom cover designs that capture attention and convey your book's essence.",
    features: [
      "Custom illustration",
      "Typography design",
      "Multiple concepts",
      "Print & digital formats",
    ],
  },
  {
    icon: BookOpen,
    title: "Self-Publishing",
    description:
      "Full-service publishing support from manuscript to marketplace.",
    features: [
      "ISBN registration",
      "eBook & print formatting",
      "Global distribution",
      "Platform setup",
    ],
  },
  {
    icon: Megaphone,
    title: "Book Marketing",
    description:
      "Strategic campaigns to build your brand and maximize book sales.",
    features: [
      "Social media strategy",
      "Book launch planning",
      "Amazon optimization",
      "Email marketing",
    ],
  },
  {
    icon: FileText,
    title: "Interior Formatting",
    description:
      "Professional typesetting and layout for both print and digital editions.",
    features: [
      "Print-ready layouts",
      "eBook formatting",
      "Chapter design",
      "Table & image placement",
    ],
  },
  {
    icon: BarChart3,
    title: "Author Branding",
    description:
      "Build a compelling author brand that resonates with your target audience.",
    features: [
      "Author website",
      "Logo design",
      "Brand guidelines",
      "Bio & headshot direction",
    ],
  },
  {
    icon: Headphones,
    title: "Audiobook Production",
    description:
      "Professional audiobook recording and production for the growing audio market.",
    features: [
      "Narrator selection",
      "Studio recording",
      "Post-production editing",
      "Platform distribution",
    ],
  },
  {
    icon: Sparkles,
    title: "Ghostwriting",
    description:
      "Expert ghostwriters who can bring your ideas and stories to life on the page.",
    features: [
      "Fiction & non-fiction",
      "Research & interviews",
      "Full manuscript delivery",
      "Confidential service",
    ],
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
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gold rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-cream rounded-2xl p-8 card-hover"
              >
                <div className="w-14 h-14 rounded-xl gradient-purple-navy flex items-center justify-center mb-5">
                  <service.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle size={14} className="text-gold-dark shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Publishing <span className="text-purple">Packages</span>
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
                    ? "gradient-purple-navy text-white ring-4 ring-gold/50 scale-105"
                    : "bg-white"
                }`}
              >
                {pkg.highlighted && (
                  <div className="text-gold text-sm font-semibold mb-2 uppercase tracking-wider">
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
                  className={`block text-center mt-8 py-3 px-6 rounded-full font-semibold transition-colors duration-200 ${
                    pkg.highlighted
                      ? "bg-gold hover:bg-gold-light text-navy-dark"
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
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-8 bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-200"
          >
            Schedule a Free Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
