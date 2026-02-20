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
    description: "Discuss your project with our publishing experts at no cost.",
  },
  {
    icon: BookOpen,
    title: "Manuscript Review",
    description: "Get a professional evaluation of your manuscript.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "Questions about our services? We're here to help.",
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
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-gold rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Ready to start your publishing journey? We&apos;d love to hear from
              you. Reach out and let&apos;s make your book a reality.
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
                className="bg-cream rounded-2xl p-6 text-center card-hover"
              >
                <div className="w-12 h-12 rounded-xl gradient-purple-navy flex items-center justify-center mx-auto mb-4">
                  <info.icon size={22} className="text-white" />
                </div>
                <h3 className="font-semibold text-navy">{info.title}</h3>
                <p className="text-gray-800 mt-1">{info.detail}</p>
                <p className="text-sm text-gray-500 mt-1">{info.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Reasons */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-navy mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </p>

              {submitted ? (
                <div className="bg-white rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Send size={28} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
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
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="editing">Professional Editing</option>
                      <option value="design">Cover Design</option>
                      <option value="publishing">Self-Publishing</option>
                      <option value="marketing">Book Marketing</option>
                      <option value="audiobook">Audiobook Production</option>
                      <option value="ghostwriting">Ghostwriting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your book project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-light text-navy-dark font-semibold py-4 rounded-full text-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    Send Message <Send size={18} />
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
                      <h3 className="font-semibold text-navy">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="gradient-purple-navy rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-white">
                  Prefer to Talk?
                </h3>
                <p className="text-white/70 mt-2">
                  Schedule a free 30-minute consultation call with our publishing
                  experts.
                </p>
                <a
                  href="tel:+15551234567"
                  className="inline-block mt-4 bg-gold hover:bg-gold-light text-navy-dark font-semibold px-6 py-3 rounded-full transition-colors duration-200"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
