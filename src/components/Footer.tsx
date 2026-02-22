import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact Us" },
];

const services = [
  "Book Writing",
  "Book Editing and Proofreading",
  "Book Publishing",
  "Book Marketing",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0F0B2E 0%, #1B1464 35%, #3D1D6E 65%, #0F0B2E 100%)" }}>
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="relative h-13 sm:h-14 w-[185px] sm:w-[210px] mb-4">
              <Image
                src="/logo.png"
                alt="Authors Publishing Hub"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-white/75 leading-relaxed mt-4 text-base sm:text-lg">
              Empowering authors worldwide to bring their stories to life with
              professional publishing services. From manuscript to marketplace,
              we&apos;re your trusted partner.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg sm:text-xl mb-4 sm:mb-5 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gold" />
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/75 hover:text-gold text-base sm:text-lg transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg sm:text-xl mb-4 sm:mb-5 relative inline-block">
              Our Services
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gold" />
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-white/75 hover:text-gold text-base sm:text-lg transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg sm:text-xl mb-4 sm:mb-5 relative inline-block">
              Contact Info
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gold" />
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a href="mailto:Hello@authorspublishinghub.com" className="flex items-start gap-3 group">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-gold/20 transition-colors">
                    <Mail size={14} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-white/90 font-medium text-base sm:text-lg">Email</div>
                    <span className="text-white/70 text-sm sm:text-base group-hover:text-gold transition-colors break-all">Hello@authorspublishinghub.com</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+18503386681" className="flex items-start gap-3 group">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-gold/20 transition-colors">
                    <Phone size={14} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-white/90 font-medium text-base sm:text-lg">Phone</div>
                    <span className="text-white/70 text-sm sm:text-base group-hover:text-gold transition-colors">+1 (850) 338-6681</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} className="text-gold" />
                </div>
                <div>
                  <div className="text-white/90 font-medium text-base sm:text-lg">Locations</div>
                  <span className="text-white/70 text-xs sm:text-sm leading-relaxed block">6th Floor Suite #603-PMB 353 Lexington Avenue, New York, NY, United States</span>
                  <span className="text-white/70 text-xs sm:text-sm leading-relaxed block mt-1.5">5475 Mark Dabling Blvd #210, Colorado Springs, CO 80918, United States</span>
                  <span className="text-white/70 text-xs sm:text-sm leading-relaxed block mt-1.5">18215 Corktree Dr San Bernardino CA 92407</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-white/60 text-sm sm:text-base text-center sm:text-left">
            &copy; {new Date().getFullYear()} Authors Publishing Hub. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-sm sm:text-base text-white/60">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
