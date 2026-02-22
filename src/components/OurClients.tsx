import Image from "next/image";

const clients = [
  { src: "/images/clients/trustpilot.png", alt: "Trustpilot" },
  { src: "/images/clients/bark.png", alt: "Bark" },
  { src: "/images/clients/proven-expert.png", alt: "Proven Expert" },
  { src: "/images/clients/brownbook.png", alt: "BrownBook.net" },
  { src: "/images/clients/enroll-business.png", alt: "Enroll Business" },
  { src: "/images/clients/reviewsio-logo.png", alt: "Reviews.io" },
];

export default function OurClients() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-14">
          <div className="section-divider mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy">
            Trusted by Clients{" "}
            <span className="text-gradient-purple">Nationwide</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            We&apos;re proudly featured and reviewed on these trusted platforms
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-20">
          {clients.map((client, i) => (
            <div
              key={i}
              className="group flex items-center justify-center"
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={200}
                height={80}
                className="h-14 sm:h-16 lg:h-20 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
