import { BookOpen, Globe, Award } from "lucide-react";

export default function BookPublishingOptions() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-xs sm:text-sm text-gold font-semibold uppercase tracking-widest mb-2 sm:mb-3">
            A Look At The Options In
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy">
            Book Publishing
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
          <div className="text-center px-2 sm:px-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl gradient-purple-navy flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <BookOpen size={24} className="text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 sm:mb-3">
              Professional Look and Feel
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Our staff will format, design, and print your book so that it
              looks professional and draws in people who are interested in
              what&apos;s inside.
            </p>
          </div>

          <div className="text-center px-2 sm:px-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl gradient-purple-navy flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Globe size={24} className="text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 sm:mb-3">
              Global Distribution
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Your book will reach a wider audience and provide more growth
              opportunities thanks to our extensive distribution network and
              digital platforms.
            </p>
          </div>

          <div className="text-center px-2 sm:px-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl gradient-purple-navy flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Award size={24} className="text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 sm:mb-3">
              Making Your Mark
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              When you publish with us, you strengthen your reputation as a
              writer and add to your name recognition in the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
