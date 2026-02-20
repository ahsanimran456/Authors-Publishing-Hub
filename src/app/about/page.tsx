import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  Target,
  Eye,
  Users,
  Award,
  BookOpen,
  Globe,
  ArrowRight,
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
      "Every decision we make centers on what's best for our authors. Your success is our priority.",
  },
  {
    icon: Target,
    title: "Excellence in Quality",
    description:
      "We uphold the highest industry standards in editing, design, and production at every stage.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "No hidden fees, no surprises. We keep you informed and involved throughout the entire process.",
  },
  {
    icon: Users,
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
    bio: "Former editor at a Big Five publisher, Marcus brings meticulous attention to every manuscript.",
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
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gold rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              About <span className="text-gradient">Us</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              We&apos;re a passionate team of publishing professionals dedicated to
              helping authors turn their manuscripts into beautifully published
              books.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
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
                full-service publishing house that has helped hundreds of authors
                bring their stories to readers around the world. We combine
                traditional publishing expertise with modern technology to
                deliver exceptional results.
              </p>
              <p>
                Our team of editors, designers, marketers, and publishing
                strategists work together seamlessly to ensure that every book
                we publish meets the highest standards of quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-14 h-14 rounded-full bg-purple/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon size={24} className="text-purple" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-navy">
                  {stat.value}
                </div>
                <div className="text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Our <span className="text-purple">Values</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-cream rounded-2xl p-8 card-hover"
              >
                <div className="w-14 h-14 rounded-xl gradient-purple-navy flex items-center justify-center mb-5">
                  <value.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">
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
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Meet the <span className="text-gold-dark">Team</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              The passionate professionals behind your publishing success.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-8 text-center card-hover"
              >
                <div className="w-20 h-20 rounded-full gradient-purple-navy flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-navy">
                  {member.name}
                </h3>
                <div className="text-sm text-purple font-medium mt-1">
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
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold rounded-full blur-3xl" />
            </div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Ready to Join Our Family?
              </h2>
              <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto">
                Become part of a growing community of successful authors. Let&apos;s
                bring your story to life together.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-8 bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-200"
              >
                Get in Touch <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
