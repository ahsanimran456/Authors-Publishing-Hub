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
    name: "Lorraine Whitfield",
    role: "Fiction Author",
    quote:
      "I handed over a rough draft and got back a polished, professional book. The editing was sharp, the cover stunning, and the whole process felt effortless on my end. I couldn't be happier with the final result.",
    rating: 5,
    image: "/images/person1.jpg",
    book: "/images/books/abandoned.jpg",
  },
  {
    name: "Derek Nwosu",
    role: "Non-Fiction Writer",
    quote:
      "What impressed me most was the communication. Every question I had was answered within hours. The final product speaks for itself — it looks incredible on the shelf. They truly care about their authors.",
    rating: 5,
    image: "/images/person2.jpg",
    book: "/images/books/ai.jpg",
  },
  {
    name: "Priya Samuels",
    role: "Children's Book Author",
    quote:
      "They nailed the illustrations and layout for my children's book. My readers love the quality, and I've already recommended them to three other authors. Their attention to detail is unmatched.",
    rating: 5,
    image: "/images/person3.jpg",
    book: "/images/books/awake.jpg",
  },
  {
    name: "Carlton Reeves",
    role: "Self-Help Author",
    quote:
      "I came in with zero publishing knowledge and left with a book on Amazon that I'm genuinely proud of. The team walked me through formatting, pricing, and distribution like seasoned pros.",
    rating: 5,
    image: "/images/person4.jpg",
    book: "/images/books/change.jpg",
  },
  {
    name: "Monique Tran",
    role: "Romance Novelist",
    quote:
      "My romance novel needed a cover that matched the emotion inside. They delivered something breathtaking. The marketing push after launch brought in readers I never expected to reach.",
    rating: 5,
    image: "/images/person5.jpg",
    book: "/images/books/forbidden.jpg",
  },
  {
    name: "Rashid Kelley",
    role: "Memoir Author",
    quote:
      "Writing a memoir is deeply personal, and I needed editors who understood that. They preserved my voice while making the prose tighter and more compelling. The result brought tears to my family.",
    rating: 5,
    image: "/images/person6.jpg",
    book: "/images/books/life.jpg",
  },
  {
    name: "Vivian Okafor",
    role: "Poetry Author",
    quote:
      "Publishing poetry felt intimidating until I worked with this team. They treated every line with respect and designed a book that feels like a piece of art. I'm beyond grateful.",
    rating: 5,
    image: "/images/person7.jpg",
    book: "/images/books/emot.jpg",
  },
  {
    name: "Grant Holloway",
    role: "Business Author",
    quote:
      "As someone in the corporate world, I needed a book that looked credible and professional. They delivered on every front — from interior formatting to a cover that commands attention.",
    rating: 5,
    image: "/images/person8.jpg",
    book: "/images/books/selling.jpg",
  },
  {
    name: "Camille Fournier",
    role: "Historical Fiction Writer",
    quote:
      "My historical novel required meticulous research accuracy and period-appropriate language. The editorial team went above and beyond to ensure authenticity. A truly world-class experience.",
    rating: 5,
    image: "/images/person9.jpg",
    book: "/images/books/equi.jpg",
  },
  {
    name: "Terrence Blackwood",
    role: "Thriller Author",
    quote:
      "Speed without sacrificing quality — that's what I got. My thriller went from final manuscript to Amazon in weeks, and it's now available in over 30 countries. Absolutely phenomenal service.",
    rating: 5,
    image: "/images/person10.jpg",
    book: "/images/books/shadow.jpg",
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
                  <div className="sm:w-36 lg:w-40 shrink-0 relative">
                    <div className="h-40 sm:h-full relative overflow-hidden">
                      <Image
                        src={testimonial.book}
                        alt="Published Book"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-transparent to-navy/10" />
                    </div>
                  </div>

                  <div className="flex-1 p-4 sm:p-6 lg:p-7">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={50}
                          height={50}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-gold"
                        />
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
