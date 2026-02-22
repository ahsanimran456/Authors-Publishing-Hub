const processSteps = [
  {
    step: "01",
    title: "Draft Submission",
    description:
      "The client submits the draft along with a set of instructions about editing, printing, and publishing.",
  },
  {
    step: "02",
    title: "Editing And Proofreading",
    description:
      "We assign an experienced editor to review, peruse, edit, and proofread the draft meticulously.",
  },
  {
    step: "03",
    title: "Typesetting, Images, Illustrations",
    description:
      "Once the manuscript is finalised after editing, we set its typeface and add images and graphical illustrations.",
  },
  {
    step: "04",
    title: "Book Designing",
    description:
      "The book is professionally designed, with front and back covers, blurbs, author's bio, table of content, and disclaimer.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <div className="section-divider mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            A systematic, professional, and fast publishing process designed
            to transform aspiring writers into published authors.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-gold/30 via-purple/30 to-gold/30" />
          {processSteps.map((item) => (
            <div key={item.step} className="relative group">
              <div className="text-center">
                <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gold flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl sm:text-3xl font-bold text-purple">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
