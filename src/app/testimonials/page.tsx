import type { Metadata } from "next";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import OurClients from "@/components/OurClients";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read real testimonials from satisfied authors who trusted Authors Publishing Hub with their publishing journey. 5-star reviews from fiction, non-fiction, and self-help authors across the USA.",
  keywords: [
    "book publishing reviews",
    "authors publishing hub testimonials",
    "publishing service reviews",
    "client success stories",
    "book publishing feedback",
  ],
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "Client Testimonials — Authors Publishing Hub",
    description: "Hear from authors who achieved their publishing dreams with us. Real stories, real results.",
    url: "https://authorspublishinghub.com/testimonials",
  },
};

const testimonials = [
  {
    name: "Ken Reiman",
    role: "Non-Fiction Author",
    quote:
      "From the very first conversation, I knew my book was in the right hands. The team guided me through every stage — editing, formatting, cover design — with real professionalism. Abandoned No More turned out exactly as I envisioned, and seeing it on Amazon was a dream come true.",
    rating: 5,
    image: "/images/authors/Ken%20Reiman.png",
    book: "/images/books/abandoned.jpg",
  },
  {
    name: "Kent Peters",
    role: "Fiction Author",
    quote:
      "The Cure was a deeply personal project that required a publisher who understood the nuances of biological thriller fiction. The team brought my vision to life with sharp editing, a captivating cover, and seamless distribution. I'm proud to see it resonate with readers worldwide.",
    rating: 5,
    image: "/images/authors/Kent%20Peters.jpg",
    book: "/images/books/kent-cure.jpg",
  },
  {
    name: "Dr. Cedric B. Howard",
    role: "Non-Fiction Author",
    quote:
      "Publishing a book on mindfulness and AI required a team that understood both precision and creativity. They delivered on every front — the editing was sharp, the layout was clean, and the cover perfectly captures the essence of the book. Highly recommend their services.",
    rating: 5,
    image: "/images/authors/Dr%20Cedric%20B.%20Howard.jpg",
    book: "/images/books/ai.jpg",
  },
  {
    name: "Michael A. Knight",
    role: "Self-Help Author",
    quote:
      "I came in with a powerful message and they helped me present it in the most compelling way possible. Change or Die is more than a book — it's a movement. The team understood my vision and brought it to life with exceptional quality and care.",
    rating: 5,
    image: "/images/authors/Michael%20A.%20Knight.webp",
    book: "/images/books/change.jpg",
  },
  {
    name: "Anil Jain",
    role: "Non-Fiction Author",
    quote:
      "Life is Random is my personal memoir, and I needed a publisher who would treat my story with care and authenticity. The team at Authors Publishing Hub did exactly that — from meticulous editing to a clean, professional layout. Seeing my journey in print has been incredibly rewarding.",
    rating: 5,
    image: "/images/authors/anil-jain-fronteras-tic.jpg.jpeg",
    book: "/images/books/life.jpg",
  },
  {
    name: "Ashley Dawson",
    role: "Fiction Romance Author",
    quote:
      "As a romance author, the cover and the emotional tone of the book matter deeply. They designed a cover for Forbidden that stops readers in their tracks, and the interior formatting is flawless. The whole experience was smooth and stress-free.",
    rating: 5,
    image: "/images/authors/Ashley%20Dawson.webp",
    book: "/images/books/forbidden.jpg",
  },
  {
    name: "Rick Cochran",
    role: "Non-Fiction Author",
    quote:
      "Selling with Intent needed to look as professional as the strategies inside it. The team nailed everything — from the bold cover design to the meticulous interior layout. They treated my book like their own, and the results speak for themselves.",
    rating: 5,
    image: "/images/authors/Rick%20Cochran.webp",
    book: "/images/books/selling.jpg",
  },
  {
    name: "David Doersch",
    role: "Fantasy Fiction Author",
    quote:
      "Writing fantasy fiction requires a publisher who appreciates world-building and storytelling. The Equinox Tor came to life with a stunning cover and polished manuscript. Their attention to detail in both editing and design exceeded all my expectations.",
    rating: 5,
    image: "/images/authors/David%20Doersch.jpg",
    book: "/images/books/equi.jpg",
  },
];

export default function TestimonialsPage() {
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
              Client <span className="text-gradient">Testimonials</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-white/75 leading-relaxed max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Hear directly from the
              authors who trusted us with their publishing dreams.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      <OurClients />

      <section className="py-12 sm:py-16 lg:py-20 bg-cream dot-pattern relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy">
              What Our Authors <span className="text-gradient-purple">Say</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Real stories from real authors who achieved their publishing dreams with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-purple/5"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-36 lg:w-40 shrink-0 bg-gradient-to-br from-purple/5 to-navy/5 flex items-center justify-center p-3">
                    <Image
                      src={testimonial.book}
                      alt="Published Book"
                      width={150}
                      height={220}
                      className="object-contain w-full h-auto rounded-md shadow-md"
                    />
                  </div>

                  <div className="flex-1 p-4 sm:p-6 lg:p-7">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-gold shrink-0 relative">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-navy text-sm sm:text-base">
                            {testimonial.name}
                          </h3>
                          <p className="text-purple text-xs sm:text-sm font-medium">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <Quote size={24} className="text-purple/10 shrink-0 hidden sm:block" />
                    </div>

                    <div className="flex gap-1 mb-2 sm:mb-3">
                      {Array.from({ length: testimonial.rating }).map((_, j) => (
                        <Star
                          key={j}
                          size={12}
                          className="text-gold fill-gold"
                        />
                      ))}
                    </div>

                    <p className="text-gray-600 leading-relaxed italic text-xs sm:text-sm">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                      <span className="text-[10px] sm:text-xs text-gray-400 font-medium">
                        Published with Authors Publishing Hub
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
