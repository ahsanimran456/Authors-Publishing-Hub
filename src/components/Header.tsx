"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-navy-dark text-white text-[10px] sm:text-xs md:text-sm py-1.5 sm:py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="truncate hidden md:block">Empowering Authors Worldwide — Professional Publishing Services</p>
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 w-full md:w-auto justify-between md:justify-end">
            <a href="tel:+18503386681" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone size={13} />
              +1 (850) 338-6681
            </a>
            <span className="text-white/30">|</span>
            <a href="mailto:contact@authorpublishinghub.com" className="hover:text-gold transition-colors">
              contact@authorpublishinghub.com
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-white shadow-lg shadow-black/5 border-gray-100"
            : "bg-white border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-15 lg:h-18">
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/weblogo.png"
                alt="Authors Publishing Hub"
                width={115}
                height={90}
                className="w-[80px] sm:w-[100px] md:w-[115px] lg:w-[125px] h-auto"
                priority
                unoptimized
              />
            </Link>

            <nav className="hidden xl:flex items-center gap-5 2xl:gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-navy/70 hover:text-navy font-medium text-base transition-colors duration-200 relative group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            <div className="hidden xl:flex items-center gap-3">
              <a
                href="tel:+18503386681"
                className="flex items-center gap-2 text-navy/70 hover:text-navy font-medium text-sm transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center">
                  <Phone size={14} className="text-gold-dark" />
                </div>
                <span className="hidden 2xl:inline">+1 (850) 338-6681</span>
              </a>
              <Link
                href="/contact"
                className="btn-shimmer bg-navy hover:bg-navy-light text-white font-semibold px-5 py-2 rounded-full text-sm tracking-wide transition-all duration-200 shadow-lg hover:shadow-navy/20 hover:-translate-y-0.5"
              >
                Get A Quote
              </Link>
            </div>

            <button
              className="xl:hidden text-navy p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col px-4 py-3 gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-navy/70 hover:text-navy font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors text-base"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-3 pt-3 border-t border-gray-100">
                <a
                  href="tel:+18503386681"
                  className="flex items-center justify-center gap-2 text-navy font-medium py-3 text-sm"
                >
                  <Phone size={16} />
                  +1 (850) 338-6681
                </a>
                <Link
                  href="/contact"
                  className="bg-navy hover:bg-navy-light text-white font-semibold px-5 py-2.5 rounded-full text-center text-sm tracking-wide transition-all duration-200 shadow-lg hover:shadow-navy/20"
                  onClick={() => setMobileOpen(false)}
                >
                  Get A Quote
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
