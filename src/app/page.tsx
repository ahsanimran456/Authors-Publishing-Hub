import Link from "next/link";
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
} from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Professional Editing",
    description:
      "Our expert editors refine your manuscript to perfection, ensuring clarity, flow, and impact.",
  },
  {
    icon: Palette,
    title: "Cover Design",
    description:
      "Eye-catching cover designs that capture your book's essence and attract readers at first glance.",
  },
  {
    icon: BookOpen,
    title: "Self-Publishing",
    description:
      "End-to-end publishing support from formatting to distribution across all major platforms.",
  },
  {
    icon: Megaphone,
    title: "Book Marketing",
    description:
      "Strategic marketing campaigns to build your author brand and boost book sales globally.",
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
      "Authors Publishing Hub transformed my manuscript into a bestseller. Their editing team is phenomenal!",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Non-Fiction Writer",
    quote:
      "From cover design to marketing, every step was handled professionally. I couldn't have asked for a better partner.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Children's Book Author",
    quote:
      "The team understood my vision perfectly. My book looks absolutely stunning and the sales have been incredible.",
    rating: 5,
  },
];

const process = [
  {
    step: "01",
    title: "Submit Your Manuscript",
    description: "Share your work with us and we'll provide a free evaluation and consultation.",
  },
  {
    step: "02",
    title: "Professional Editing",
    description: "Our editors polish your manuscript while preserving your unique voice.",
  },
  {
    step: "03",
    title: "Design & Format",
    description: "We create a stunning cover and professionally format your book interior.",
  },
  {
    step: "04",
    title: "Publish & Market",
    description: "Your book goes live on major platforms with a tailored marketing strategy.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up">
              Bring Your Story to{" "}
              <span className="text-gradient">Life</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed animate-fade-in-up animate-delay-200">
              From manuscript to masterpiece — we provide professional editing,
              stunning design, and powerful marketing to help authors publish
              with confidence.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-400">
              <Link
                href="/contact"
                className="bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-200 flex items-center gap-2"
              >
                Start Publishing
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/services"
                className="border-2 border-white/30 hover:border-gold text-white hover:text-gold font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-200"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-14 h-14 rounded-full bg-purple/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon size={24} className="text-purple" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-navy">
                  {stat.value}
                </div>
                <div className="text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Our <span className="text-purple">Services</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Everything you need to transform your manuscript into a
              professionally published book.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-sm card-hover"
              >
                <div className="w-14 h-14 rounded-xl gradient-purple-navy flex items-center justify-center mb-5">
                  <service.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-purple font-semibold hover:text-navy transition-colors"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              How It <span className="text-gold-dark">Works</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Our streamlined process makes publishing your book simple and
              stress-free.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="text-6xl font-bold text-navy/10 mb-2">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-gold rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Why Choose{" "}
              <span className="text-gradient">Authors Publishing Hub?</span>
            </h2>
            <p className="mt-6 text-white/80 text-lg leading-relaxed">
              We believe every author deserves to see their book in print. Our
              dedicated team of publishing professionals brings decades of
              experience to help you navigate the publishing journey with ease.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-6 text-left">
              {[
                "Personalized one-on-one support",
                "Industry-leading editing standards",
                "Distribution to 40,000+ retailers",
                "100% royalties — you own your work",
                "Award-winning cover designers",
                "Proven marketing strategies",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-white/90"
                >
                  <CheckCircle size={20} className="text-gold shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-10 bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-200"
            >
              Learn More About Us <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              What Authors <span className="text-purple">Say</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Don't just take our word for it — hear from the authors we've
              helped succeed.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl p-8 shadow-sm card-hover"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-gold fill-gold"
                    />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-navy">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gradient-purple-navy rounded-3xl p-12 sm:p-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-magenta rounded-full blur-3xl" />
            </div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Ready to Publish Your Book?
              </h2>
              <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto">
                Take the first step toward becoming a published author. Contact
                us today for a free consultation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-8 bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-200"
              >
                Get Your Free Consultation
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
