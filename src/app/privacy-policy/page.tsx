import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy — Authors Publishing Hub",
  description:
    "Read our privacy policy to understand how Authors Publishing Hub collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative overflow-hidden min-h-[40vh] sm:min-h-[45vh] lg:min-h-[50vh] flex items-center">
        <Image
          src="/images/hero-books-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/80 to-purple-dark/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-navy/40" />
        <div className="absolute inset-0 line-pattern opacity-30" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-divider mx-auto mb-4" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/75 leading-relaxed">
              Your privacy is important to us. This policy explains how we handle your data.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-xs sm:text-sm mb-8 sm:mb-10">Last updated: February 2026</p>

          <h2 className="text-xl sm:text-2xl font-bold text-navy mt-8 sm:mt-10 mb-3 sm:mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
            We collect information you provide directly to us, such as when you fill out a contact form, request a quote, subscribe to our newsletter, or communicate with us. This information may include your name, email address, phone number, mailing address, and details about your book project.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
            We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our website.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-navy mt-8 sm:mt-10 mb-3 sm:mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">We use the information we collect to:</p>
          <ul className="list-disc pl-5 sm:pl-6 text-gray-600 space-y-2 mb-4 text-sm sm:text-base">
            <li>Provide, maintain, and improve our publishing services</li>
            <li>Process and fulfill your service requests</li>
            <li>Send you technical notices, updates, and support messages</li>
            <li>Respond to your comments, questions, and customer service requests</li>
            <li>Communicate with you about products, services, offers, and events</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold text-navy mt-8 sm:mt-10 mb-3 sm:mb-4">3. Information Sharing</h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-navy mt-8 sm:mt-10 mb-3 sm:mb-4">4. Data Security</h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
            We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-navy mt-8 sm:mt-10 mb-3 sm:mb-4">5. Cookies</h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
            Our website may use cookies to enhance your experience. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies through your browser settings. If you disable cookies, some features of our site may not function properly.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-navy mt-8 sm:mt-10 mb-3 sm:mb-4">6. Third-Party Links</h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
            Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-navy mt-8 sm:mt-10 mb-3 sm:mb-4">7. Your Rights</h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">You have the right to:</p>
          <ul className="list-disc pl-5 sm:pl-6 text-gray-600 space-y-2 mb-4 text-sm sm:text-base">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate personal data</li>
            <li>Request deletion of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
            <li>Withdraw consent at any time where we rely on consent to process your data</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold text-navy mt-8 sm:mt-10 mb-3 sm:mb-4">8. Changes to This Policy</h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the &quot;Last updated&quot; date above.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-navy mt-8 sm:mt-10 mb-3 sm:mb-4">9. Contact Us</h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <ul className="list-none pl-0 text-gray-600 space-y-1 mb-4 text-sm sm:text-base">
            <li><strong>Email:</strong> Hello@authorspublishinghub.com</li>
            <li><strong>Phone:</strong> +1 (850) 338-6681</li>
            <li><strong>Address:</strong> 6th Floor Suite #603-PMB 353 Lexington Avenue, New York, NY, United States</li>
          </ul>
        </div>
      </section>
    </>
  );
}
