import Link from "next/link";
import {
  PenTool,
  FileText,
  BookOpen,
  Megaphone,
  ArrowRight,
} from "lucide-react";


const cards = [
  {
    icon: PenTool,
    title: "Book Writing",
    desc: "From concept to completion, our skilled writers help bring your ideas to life with compelling narratives.",
    color: "from-purple-light to-purple",
  },
  {
    icon: FileText,
    title: "Book Editing",
    desc: "Meticulous editing to refine your manuscript, ensuring clarity, flow, and error-free content.",
    color: "from-navy-light to-navy",
  },
  {
    icon: BookOpen,
    title: "Book Publishing",
    desc: "End-to-end publishing services including formatting, ISBN, and distribution across all platforms.",
    color: "from-magenta to-purple",
  },
  {
    icon: Megaphone,
    title: "Book Marketing",
    desc: "Strategic marketing campaigns to maximize your book's visibility and reach the right audience.",
    color: "from-gold to-gold-dark",
  },
];

export default function CTABannerCards() {
  return (
    <section className="gradient-purple-navy relative overflow-hidden">
      <div className="absolute inset-0 line-pattern" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 mb-10 sm:mb-14">
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Seize the Moment! Watch Your Book Grow Into a{" "}
              <span className="text-gradient">Masterpiece</span>
            </h2>
            <p className="mt-3 text-white/70 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
              Hop on a call and learn how we can help you access the full
              potential of your book.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 sm:p-8 text-center card-hover group"
            >
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <card.icon size={24} className="text-white sm:hidden" />
                <card.icon size={28} className="text-white hidden sm:block" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">
                {card.title}
              </h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                {card.desc}
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 mt-4 sm:mt-5 text-gold font-semibold text-sm hover:text-gold-light transition-colors group/link"
              >
                Learn More
                <ArrowRight
                  size={14}
                  className="group-hover/link:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
