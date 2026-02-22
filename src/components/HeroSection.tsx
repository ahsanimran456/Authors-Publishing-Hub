import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] flex items-center">
      <Image
        src="/images/hero-books-bg.jpg"
        alt=""
        fill
        className="object-cover"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/85 via-navy/78 to-purple-dark/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/65 via-transparent to-navy/45" />
      <div className="absolute inset-0 line-pattern opacity-40" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-48 sm:w-80 h-48 sm:h-80 bg-gold rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-64 sm:w-[500px] h-64 sm:h-[500px] bg-purple rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight animate-fade-in-up animate-delay-100">
              Full-Service Book Publishing to Help Your Book Reach Its{" "}
              <span className="text-gradient">Full Potential</span>
            </h1>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-white/75 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up animate-delay-200">
              Our seasoned staff takes care of everything involved in
              publishing, from assessing and editing manuscripts to laying
              them out in a book and designing its cover. Thanks to our
              in-depth expertise and unwavering commitment to quality, we can
              get your book noticed by the right people and into the hands of
              readers all over the world.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up animate-delay-300">
              <Link
                href="/contact"
                className="btn-shimmer bg-gold hover:bg-gold-light text-navy-dark font-semibold px-6 py-2.5 rounded-full text-sm tracking-wide transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
              >
                Get A Free Quote
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+18503386681"
                className="flex items-center gap-3 text-white hover:text-gold transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center animate-pulse-glow">
                  <Phone size={16} className="text-gold" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-white/60">Call Us Now</div>
                  <div className="font-semibold text-sm sm:text-base">+1 (850) 338-6681</div>
                </div>
              </a>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center animate-fade-in-up animate-delay-400">
            <Image
              src="/images/book-wrap.png"
              alt="Published Books"
              width={550}
              height={450}
              className="drop-shadow-2xl animate-float"
              priority
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-navy-dark/40 to-transparent" />
    </section>
  );
}
