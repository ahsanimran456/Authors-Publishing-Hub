import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact Us" },
];

const services = [
  "Book Writing",
  "Book Editing",
  "Cover Design",
  "Book Publishing",
  "Book Marketing",
  "Audiobook Production",
];

export default function Footer() {
  return (
    <footer className="gradient-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 line-pattern opacity-50" />

      {/* Newsletter Banner */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">
                Ready to Publish Your <span className="text-gradient">Masterpiece?</span>
              </h3>
              <p className="text-white/60 mt-1">
                Get a free consultation with our publishing experts today.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-shimmer bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 py-4 rounded-full transition-colors flex items-center gap-2 shrink-0"
            >
              Get Started <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Image
              src="/logo.png"
              alt="Authors Publishing Hub"
              width={200}
              height={55}
              className="h-14 w-auto mb-4"
            />
            <p className="text-white/60 leading-relaxed mt-4">
              Empowering authors worldwide to bring their stories to life with
              professional publishing services. From manuscript to marketplace,
              we&apos;re your trusted partner.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-gold font-bold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gold font-bold text-lg mb-5">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-white/60 hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200"
                    />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gold font-bold text-lg mb-5">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60">
                <div className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={16} className="text-gold" />
                </div>
                <div>
                  <div className="text-white/80 font-medium">Email</div>
                  info@authorspublishinghub.com
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <div className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone size={16} className="text-gold" />
                </div>
                <div>
                  <div className="text-white/80 font-medium">Phone</div>
                  +1 (555) 123-4567
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <div className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={16} className="text-gold" />
                </div>
                <div>
                  <div className="text-white/80 font-medium">Address</div>
                  123 Publishing Lane, New York, NY 10001
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Authors Publishing Hub. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
