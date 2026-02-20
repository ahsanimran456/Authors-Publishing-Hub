import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, BookOpen } from "lucide-react";
import { books } from "@/data/books";

export const metadata: Metadata = {
  title: "Portfolio — Authors Publishing Hub",
  description:
    "Browse our portfolio of published books. See the quality of work we deliver for authors worldwide.",
};

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
              A showcase of {books.length}+ incredible books we&apos;ve helped
              bring to life. Each one crafted with care, professionalism, and
              dedication.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <BookOpen size={20} className="text-gold" />
              </div>
              <span className="text-white/80 text-lg font-medium">
                {books.length}+ Published Books on Amazon
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
            {books.map((book, i) => (
              <a
                key={i}
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-item group rounded-xl overflow-hidden bg-cream block"
              >
                <div className="aspect-[3/4] relative">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                    <p className="text-white font-bold text-xs leading-tight line-clamp-2">
                      {book.title}
                    </p>
                    <p className="text-gold text-[11px] font-medium mt-1 line-clamp-1">
                      {book.author}
                    </p>
                  </div>
                </div>
              </a>
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
                Let us help you create a beautifully published book that
                you&apos;ll be proud of. Join {books.length}+ published authors.
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
