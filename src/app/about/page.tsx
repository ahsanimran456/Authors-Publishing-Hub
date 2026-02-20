import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Target,
  Eye,
  Users,
  Award,
  BookOpen,
  Globe,
  ArrowRight,
  Phone,
  CheckCircle,
  Handshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Authors Publishing Hub",
  description:
    "Learn about Authors Publishing Hub — our mission, values, and the passionate team behind your publishing success.",
};

const values = [
  {
    icon: Heart,
    title: "Author-First Approach",
    description:
      "Every decision we make centers on what's best for our authors. Your success is our ultimate priority.",
  },
  {
    icon: Target,
    title: "Excellence in Quality",
    description:
      "We uphold the highest industry standards in editing, design, and production at every stage.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description:
      "No hidden fees, no surprises. We keep you informed and involved throughout the entire process.",
  },
  {
    icon: Handshake,
    title: "Collaborative Spirit",
    description:
      "We work closely with you, combining your vision with our expertise to create something remarkable.",
  },
];

const team = [
  {
    name: "Alexandra Webb",
    role: "Founder & CEO",
    bio: "A veteran publisher with 20+ years of experience helping authors achieve their dreams.",
  },
  {
    name: "Marcus Johnson",
    role: "Head of Editing",
    bio: "Former editor at a Big Five publisher. Marcus brings meticulous attention to every manuscript.",
  },
  {
    name: "Priya Sharma",
    role: "Creative Director",
    bio: "Award-winning designer whose cover art has graced bestseller lists worldwide.",
  },
  {
    name: "David Kim",
    role: "Marketing Director",
    bio: "Digital marketing expert specializing in author branding and book launch strategies.",
  },
];

const stats = [
  { value: "500+", label: "Books Published", icon: BookOpen },
  { value: "200+", label: "Happy Authors", icon: Users },
  { value: "15+", label: "Years Experience", icon: Award },
  { value: "30+", label: "Countries Reached", icon: Globe },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 line-pattern" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gold rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-divider mx-auto mb-4" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              About <span className="text-gradient">Us</span>
            </h1>
            <p className="mt-6 text-lg text-white/75 leading-relaxed">
              We&apos;re a passionate team of publishing professionals dedicated to
              helping authors turn their manuscripts into beautifully published
              books that reach readers worldwide.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Our Story + Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-divider mb-4" />
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Our Story
              </h2>
              <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
                <p>
                  Authors Publishing Hub was founded with a simple yet powerful
                  mission: to make professional publishing accessible to every
                  author, regardless of their background or experience.
                </p>
                <p>
                  What began as a small editing studio has grown into a
                  full-service publishing house that has helped hundreds of
                  authors bring their stories to readers around the world. We
                  combine traditional publishing expertise with modern technology
                  to deliver exceptional results.
                </p>
                <p>
                  Our team of editors, designers, marketers, and publishing
                  strategists work together seamlessly to ensure that every book
                  we publish meets the highest standards of quality.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                {[
                  "Industry-Leading Standards",
                  "Dedicated Support Team",
                  "Global Distribution Network",
                  "100% Author Ownership",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={18} className="text-gold shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-4 rounded-3xl bg-purple/10 blur-2xl" />
              <Image
                src="/images/about-hero.png"
                alt="About Authors Publishing Hub"
                width={600}
                height={500}
                className="relative rounded-3xl shadow-2xl shadow-navy/10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card text-center bg-white rounded-2xl p-6">
                <div className="w-14 h-14 rounded-2xl gradient-purple-navy flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={24} className="text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-navy">
                  {stat.value}
                </div>
                <div className="text-gray-500 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Our <span className="text-gradient-purple">Values</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-cream rounded-2xl p-8 card-hover card-glow"
              >
                <div className="w-14 h-14 rounded-2xl gradient-purple-navy flex items-center justify-center mb-5">
                  <value.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-cream dot-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Meet the <span className="text-gradient">Team</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              The passionate professionals behind your publishing success.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-8 text-center card-hover card-glow"
              >
                <div className="w-20 h-20 rounded-full gradient-purple-navy flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple/20">
                  <span className="text-2xl font-bold text-gold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-navy">{member.name}</h3>
                <div className="text-sm text-purple font-semibold mt-1">
                  {member.role}
                </div>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gradient-purple-navy rounded-3xl p-12 sm:p-16 relative overflow-hidden">
            <div className="absolute inset-0 line-pattern" />
            <div className="absolute inset-0 opacity-15">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold rounded-full blur-[100px]" />
            </div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Ready to Join Our Family of{" "}
                <span className="text-gradient">Successful Authors?</span>
              </h2>
              <p className="mt-4 text-white/75 text-lg max-w-xl mx-auto">
                Let&apos;s bring your story to life together.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn-shimmer bg-gold hover:bg-gold-light text-navy-dark font-bold px-8 py-4 rounded-full transition-colors flex items-center gap-2"
                >
                  Get in Touch <ArrowRight size={18} />
                </Link>
                <a
                  href="tel:+15551234567"
                  className="border-2 border-white/30 hover:border-gold text-white hover:text-gold font-semibold px-8 py-4 rounded-full transition-colors flex items-center gap-2"
                >
                  <Phone size={18} /> Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
