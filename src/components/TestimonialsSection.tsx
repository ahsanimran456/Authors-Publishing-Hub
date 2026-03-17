import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
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

export default function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-cream dot-pattern relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <div className="section-divider mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy">
            Our Clients{" "}
            <span className="text-gradient-purple">Bear Witness</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            There is nothing more refreshing than the kind words of our
            clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl p-5 sm:p-8 relative group hover:-translate-y-1 transition-all duration-300"
            >
              <Quote
                size={32}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-purple/10"
              />

              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="relative shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-gold">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-navy text-base sm:text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-xs sm:text-sm text-purple font-medium">
                    {testimonial.role}
                  </div>
                  <div className="flex gap-1 mt-1 sm:mt-1.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className="text-gold fill-gold"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed italic text-sm sm:text-base mb-4 sm:mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-5 border-t border-gray-100">
                <Image
                  src={testimonial.book}
                  alt="Published Book"
                  width={60}
                  height={85}
                  className="w-11 h-16 sm:w-14 sm:h-20 object-cover rounded-md"
                />
                <span className="text-gray-400 text-xs sm:text-sm">
                  Published with Authors Publishing Hub
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
