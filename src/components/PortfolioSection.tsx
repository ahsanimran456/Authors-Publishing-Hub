import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { books } from "@/data/books";

interface PortfolioSectionProps {
  showAll?: boolean;
}

export default function PortfolioSection({ showAll = false }: PortfolioSectionProps) {
  const displayBooks = showAll ? books : books.slice(0, 12);

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-cream dot-pattern relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {!showAll && (
          <div className="text-center mb-10 sm:mb-16">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy">
              Portfolio
            </h2>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
          {displayBooks.map((book, i) => (
            <div
              key={i}
              className="group relative rounded-lg sm:rounded-xl overflow-hidden bg-white/5 aspect-[2/3]"
            >
              <Image
                src={book.image}
                alt={book.title}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-2 sm:p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-[10px] sm:text-xs leading-tight">
                  {book.title}
                </p>
                <p className="text-gold text-[9px] sm:text-[11px] mt-0.5">{book.author}</p>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-8 sm:mt-14">
            <Link
              href="/portfolio"
              className="btn-shimmer bg-gold hover:bg-gold-light text-navy-dark font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm tracking-wide transition-all duration-200 inline-flex items-center gap-2 shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5"
            >
              Show More <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
