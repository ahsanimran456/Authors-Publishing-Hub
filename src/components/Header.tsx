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
      {/* Top Bar */}
      <div className="bg-navy-dark text-white/80 text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p>Empowering Authors Worldwide — Professional Publishing Services</p>
          <div className="flex items-center gap-4">
            <a href="tel:+15551234567" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone size={14} />
              +1 (555) 123-4567
            </a>
            <span className="text-white/30">|</span>
            <a href="mailto:info@authorspublishinghub.com" className="hover:text-gold transition-colors">
              info@authorspublishinghub.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy/98 backdrop-blur-md shadow-lg shadow-navy/20"
            : "bg-navy/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image
                src="/logo.png"
                alt="Authors Publishing Hub"
                width={200}
                height={55}
                className="h-14 w-auto"
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-gold font-medium transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 text-gold hover:text-gold-light font-medium transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center animate-pulse-glow">
                  <Phone size={16} className="text-gold" />
                </div>
                +1 (555) 123-4567
              </a>
              <Link
                href="/contact"
                className="btn-shimmer bg-gold hover:bg-gold-light text-navy-dark font-semibold px-7 py-3 rounded-full transition-colors duration-200"
              >
                Get A Quote
              </Link>
            </div>

            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-navy-dark border-t border-white/10 animate-fade-in-down">
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-gold font-medium py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-3 pt-3 border-t border-white/10">
                <a
                  href="tel:+15551234567"
                  className="flex items-center justify-center gap-2 text-gold font-medium py-3"
                >
                  <Phone size={16} />
                  +1 (555) 123-4567
                </a>
                <Link
                  href="/contact"
                  className="bg-gold hover:bg-gold-light text-navy-dark font-semibold px-6 py-3 rounded-full text-center transition-colors"
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
