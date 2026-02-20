"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  BookOpen,
  Headphones,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "info@authorspublishinghub.com",
    subtitle: "We reply within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+1 (555) 123-4567",
    subtitle: "Mon-Fri, 9am - 6pm EST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "123 Publishing Lane",
    subtitle: "New York, NY 10001",
  },
  {
    icon: Clock,
    title: "Business Hours",
    detail: "Monday - Friday",
    subtitle: "9:00 AM - 6:00 PM EST",
  },
];

const reasons = [
  {
    icon: MessageSquare,
    title: "Free Consultation",
    description: "Discuss your project with our publishing experts at absolutely no cost.",
  },
  {
    icon: BookOpen,
    title: "Manuscript Review",
    description: "Get a professional evaluation and feedback on your manuscript.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "Questions about our services? We're always here to help you.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 line-pattern" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-gold rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-divider mx-auto mb-4" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="mt-6 text-lg text-white/75 leading-relaxed">
              Ready to start your publishing journey? Fill out the form below so
              that we can assist you better. We&apos;d love to hear from you.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="stat-card bg-cream rounded-2xl p-6 text-center card-hover"
              >
                <div className="w-14 h-14 rounded-2xl gradient-purple-navy flex items-center justify-center mx-auto mb-4">
                  <info.icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-navy">{info.title}</h3>
                <p className="text-gray-800 mt-1 font-medium">{info.detail}</p>
                <p className="text-sm text-gray-500 mt-1">{info.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Sidebar */}
      <section className="py-20 bg-cream dot-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="section-divider mb-4" />
              <h2 className="text-3xl font-bold text-navy mb-2">
                Talk to an Expert
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and a member of our team will get in
                touch with you soon.
              </p>

              {submitted ? (
                <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
                  <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={36} className="text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Thank you for reaching out. Our team will review your
                    message and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-8 shadow-sm space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        className="form-input w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        className="form-input w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="form-input w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="form-input w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="form-input w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="writing">Book Writing</option>
                      <option value="editing">Book Editing</option>
                      <option value="publishing">Book Publishing</option>
                      <option value="marketing">Book Marketing</option>
                      <option value="design">Cover Design</option>
                      <option value="audiobook">Audiobook Production</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="form-input w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none resize-none"
                      placeholder="Tell us about your book project..."
                    />
                  </div>

                  <p className="text-xs text-gray-400">
                    By submitting this form, you agree to our Privacy Policy and
                    Terms of Service.
                  </p>

                  <button
                    type="submit"
                    className="btn-shimmer w-full bg-gold hover:bg-gold-light text-navy-dark font-bold py-4 rounded-full text-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    Submit <Send size={18} />
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-navy mb-6">
                How Can We Help?
              </h2>
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="bg-white rounded-2xl p-6 card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-purple-navy flex items-center justify-center shrink-0">
                      <reason.icon size={22} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy">{reason.title}</h3>
                      <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="gradient-purple-navy rounded-2xl p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 line-pattern" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                    <Phone size={28} className="text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Prefer to Talk?
                  </h3>
                  <p className="text-white/70 mt-2">
                    Schedule a free 30-minute consultation call with our
                    publishing experts.
                  </p>
                  <a
                    href="tel:+15551234567"
                    className="inline-flex items-center gap-2 mt-5 bg-gold hover:bg-gold-light text-navy-dark font-bold px-6 py-3 rounded-full transition-colors duration-200"
                  >
                    <Phone size={16} /> Call Now
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gold/20">
                <h3 className="font-bold text-navy mb-3 flex items-center gap-2">
                  <CheckCircle size={18} className="text-gold" />
                  Why Authors Trust Us
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "500+ books published successfully",
                    "Free, no-obligation consultations",
                    "Dedicated project manager",
                    "100% satisfaction guarantee",
                    "Quick turnaround times",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
