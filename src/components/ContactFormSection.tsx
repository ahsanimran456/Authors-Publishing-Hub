import Image from "next/image";

export default function ContactFormSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-cream dot-pattern">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="section-divider mb-4" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy">
              Share A <span className="text-gradient-purple">Message</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              Leave your contact information in the box below, and a member of
              our team will get in touch with you soon. We hope to hear from
              you soon!
            </p>

            <form className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full px-4 sm:px-5 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 placeholder-gray-400 outline-none focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all text-sm sm:text-base"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 sm:px-5 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 placeholder-gray-400 outline-none focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all text-sm sm:text-base"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 sm:px-5 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 placeholder-gray-400 outline-none focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all text-sm sm:text-base"
              />
              <textarea
                rows={4}
                placeholder="Enter Message Here"
                className="w-full px-4 sm:px-5 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 placeholder-gray-400 outline-none focus:border-purple focus:ring-2 focus:ring-purple/10 resize-none transition-all text-sm sm:text-base"
              />
              <button
                type="submit"
                className="btn-shimmer bg-gold hover:bg-gold-light text-navy-dark font-semibold px-6 sm:px-8 py-2.5 rounded-full text-sm tracking-wide transition-all duration-200 shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5 w-full sm:w-auto"
              >
                Submit Message
              </button>
            </form>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <Image
              src="/images/great-writer.png"
              alt="Every Great Writer Starts Somewhere"
              width={500}
              height={500}
              className="rounded-2xl drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
