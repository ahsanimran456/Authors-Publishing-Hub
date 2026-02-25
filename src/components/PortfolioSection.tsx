"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { books } from "@/data/books";

interface PortfolioSectionProps {
  showAll?: boolean;
}

const BOOKS_PER_PAGE = 18;

function BookCard({ book }: { book: (typeof books)[0] }) {
  return (
    <div className="group relative rounded-lg sm:rounded-xl overflow-hidden bg-white/5 aspect-[2/3]">
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
  );
}

function PortfolioGrid() {
  const [page, setPage] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const totalPages = Math.ceil(books.length / BOOKS_PER_PAGE);
  const currentBooks = books.slice(page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE);
  const containerRef = useRef<HTMLDivElement>(null);

  const changePage = (newPage: number, dir: "left" | "right") => {
    setDirection(dir);
    setSliding(true);
    setTimeout(() => {
      setPage(newPage);
      setSliding(false);
    }, 300);
  };

  const goNext = () => { if (page < totalPages - 1) changePage(page + 1, "right"); };
  const goPrev = () => { if (page > 0) changePage(page - 1, "left"); };

  return (
    <>
      <div className="overflow-hidden">
        <div
          ref={containerRef}
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5 transition-all duration-300 ease-in-out ${
            sliding
              ? direction === "right"
                ? "-translate-x-full opacity-0"
                : "translate-x-full opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          {currentBooks.map((book, i) => (
            <BookCard key={`${page}-${i}`} book={book} />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">
        <button
          onClick={goPrev}
          disabled={page === 0}
          className={`inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-full text-sm tracking-wide transition-all duration-200 shadow-lg ${
            page === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed shadow-none"
              : "bg-navy hover:bg-navy-light text-white hover:shadow-navy/20 hover:-translate-y-0.5"
          }`}
        >
          <ArrowLeft size={15} /> Prev
        </button>
        <button
          onClick={goNext}
          disabled={page === totalPages - 1}
          className={`inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-full text-sm tracking-wide transition-all duration-200 shadow-lg ${
            page === totalPages - 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed shadow-none"
              : "bg-navy hover:bg-navy-light text-white hover:shadow-navy/20 hover:-translate-y-0.5"
          }`}
        >
          Next <ArrowRight size={15} />
        </button>
      </div>

      <div className="flex items-center justify-center gap-1.5 mt-4">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
              i === page ? "bg-navy scale-110" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </>
  );
}

export default function PortfolioSection({ showAll = false }: PortfolioSectionProps) {
  if (showAll) {
    return (
      <section className="py-10 sm:py-14 lg:py-16 bg-cream dot-pattern relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
            {books.map((book, i) => (
              <BookCard key={i} book={book} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-cream dot-pattern relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <div className="section-divider mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy">
            Portfolio
          </h2>
        </div>

        <PortfolioGrid />
      </div>
    </section>
  );
}
