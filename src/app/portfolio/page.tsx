import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio — Authors Publishing Hub",
  description:
    "Browse our portfolio of published books. See the quality of work we deliver for authors worldwide.",
};

const books = [
  { src: "/images/books/book1.png", title: "The Art of Living", genre: "Self-Help" },
  { src: "/images/books/book2.png", title: "Midnight Shadows", genre: "Thriller" },
  { src: "/images/books/book3.png", title: "Beyond the Horizon", genre: "Adventure" },
  { src: "/images/books/book4.png", title: "Silent Echoes", genre: "Literary Fiction" },
  { src: "/images/books/book5.png", title: "Rising Stars", genre: "Biography" },
  { src: "/images/books/book1.png", title: "Journey Within", genre: "Memoir" },
  { src: "/images/books/book2.png", title: "The Last Chapter", genre: "Mystery" },
  { src: "/images/books/book3.png", title: "Infinite Dreams", genre: "Science Fiction" },
  { src: "/images/books/book4.png", title: "Heart of Gold", genre: "Romance" },
  { src: "/images/books/book5.png", title: "Wild Frontier", genre: "Historical Fiction" },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 line-pattern" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gold rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-divider mx-auto mb-4" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="mt-6 text-lg text-white/75 leading-relaxed">
              A showcase of the incredible books we&apos;ve helped bring to life.
              Each one crafted with care, professionalism, and dedication.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {books.map((book, i) => (
              <div
                key={i}
                className="portfolio-item group rounded-2xl overflow-hidden bg-cream"
              >
                <div className="aspect-[3/4] relative">
                  <Image
                    src={book.src}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <p className="text-white font-bold text-sm">{book.title}</p>
                    <p className="text-gold text-xs font-medium">{book.genre}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gradient-purple-navy rounded-3xl p-12 sm:p-16 relative overflow-hidden">
            <div className="absolute inset-0 line-pattern" />
            <div className="absolute inset-0 opacity-15">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold rounded-full blur-[100px]" />
            </div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Want Your Book in Our Portfolio?
              </h2>
              <p className="mt-4 text-white/75 text-lg max-w-xl mx-auto">
                Let us help you create a beautifully published book that you&apos;ll
                be proud of.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn-shimmer bg-gold hover:bg-gold-light text-navy-dark font-bold px-8 py-4 rounded-full transition-colors flex items-center gap-2"
                >
                  Get A Free Quote <ArrowRight size={18} />
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
        </div>
      </section>
    </>
  );
}
