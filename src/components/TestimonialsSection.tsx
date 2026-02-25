import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Angela Prescott",
    role: "Memoir Author",
    quote:
      "They turned my life story into something truly special. The team was patient, thoughtful, and incredibly skilled. I couldn't have done this without them.",
    rating: 5,
    image: "/images/person11.jpg",
    book: "/images/books/life.jpg",
  },
  {
    name: "Marcus Delgado",
    role: "Business Author",
    quote:
      "From the first consultation to holding the finished book, every step felt professional and seamless. My business book now sits proudly on Amazon's shelves.",
    rating: 5,
    image: "/images/person12.jpg",
    book: "/images/books/selling.jpg",
  },
  {
    name: "Naomi Ashworth",
    role: "Poetry Author",
    quote:
      "Publishing poetry can feel risky, but this team made it feel safe and exciting. The final design was beyond anything I imagined. Truly a beautiful collaboration.",
    rating: 5,
    image: "/images/person13.jpg",
    book: "/images/books/emot.jpg",
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
                <div className="relative shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={70}
                    height={70}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-gold"
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
