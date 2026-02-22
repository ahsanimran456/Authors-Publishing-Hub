import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Terms of Service — Authors Publishing Hub",
  description:
    "Read the terms and conditions governing the use of Authors Publishing Hub's services and website.",
};

export default function TermsOfServicePage() {
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
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/75 leading-relaxed">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-xs sm:text-sm mb-8 sm:mb-10">Last updated: February 2026</p>

          <h2 className="text-xl sm:text-2xl font-bold text-navy mt-8 sm:mt-10 mb-3 sm:mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
            By accessing and using the Authors Publishing Hub website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use our services.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-navy mt-8 sm:mt-10 mb-3 sm:mb-4">2. Services</h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
            Authors Publishing Hub provides professional book writing, editing, publishing, and marketing services. The specific scope, timeline, and deliverables for each project will be outlined in an individual service agreement between the client and Authors Publishing Hub.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-navy mt-8 sm:mt-10 mb-3 sm:mb-4">3. Client Responsibilities</h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">As a client, you agree to:</p>
          <ul className="list-disc pl-5 sm:pl-6 text-gray-600 space-y-2 mb-4 text-sm sm:text-base">
            <li>Provide accurate and complete information necessary for the completion of services</li>
            <li>Respond to communications and provide feedback in a timely manner</li>
            <li>Ensure that all content provided to us does not infringe on any third-party intellectual property rights</li>
            <li>Make payments according to the agreed-upon schedule</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold text-navy mt-8 sm:mt-10 mb-3 sm:mb-4">4. Intellectual Property</h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
            Upon full payment for services rendered, the client retains full ownership and intellectual property rights to their book and manuscript. Authors Publishing Hub may request permission to use the book cover and title in our portfolio for marketing purposes.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-navy mt-8 sm:mt-10 mb-3 sm:mb-4">5. Payment Terms</h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
            Payment terms will be outlined in the individual service agreement. Generally, a deposit is required before work begins, with the remaining balance due upon completion of the agreed-upon milestones. All payments are non-refundable once work has commenced unless otherwise stated in the service agreement.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-navy mt-8 sm:mt-10 mb-3 sm:mb-4">6. Revisions and Modifications</h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
            Each service package includes a specified number of revisions as outlined in the service agreement. Additional revisions beyond the agreed scope may incur additional charges. Major changes to the project scope after work has begun may require a revised service agreement.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-navy mt-8 sm:mt-10 mb-3 sm:mb-4">7. Confidentiality</h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
            We treat all manuscripts, ideas, and client information as strictly confidential. We will not share, distribute, or disclose any client materials to third parties without explicit written consent, except as required to fulfill the agreed-upon services.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-navy mt-8 sm:mt-10 mb-3 sm:mb-4">8. Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
            Authors Publishing Hub shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services. Our total liability shall not exceed the amount paid by you for the specific service in question.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-navy mt-8 sm:mt-10 mb-3 sm:mb-4">9. Termination</h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
            Either party may terminate the service agreement with written notice. In the event of termination, the client will be responsible for payment of all work completed up to the date of termination. Any advance payments for uncompleted work will be handled according to the refund provisions in the service agreement.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-navy mt-8 sm:mt-10 mb-3 sm:mb-4">10. Governing Law</h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
            These terms shall be governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-navy mt-8 sm:mt-10 mb-3 sm:mb-4">11. Changes to Terms</h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes acceptance of the new terms.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-navy mt-8 sm:mt-10 mb-3 sm:mb-4">12. Contact Us</h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
            If you have any questions about these Terms of Service, please contact us at:
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
