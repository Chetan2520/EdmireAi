const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Why  <span className="text-orange-600">EdmireAI</span>?
          </h2>
          <p className="text-sm lg:text-base text-gray-600 max-w-2xl mx-auto">
            India’s #1 AI-powered learning platform — empowering students to crack their dream exams with personalized learning, smart analytics, and expert mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            {/* Feature 1 - Personalized AI Tutor */}
            <div className="group p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#FF6B00] to-[#FF9240] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0118 20.944a11.955 11.955 0 01-6 1.056 11.955 11.955 0 01-6-1.056A12.083 12.083 0 015.84 10.578L12 14z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800  mb-2">Personalized AI Tutor</h3>
                  <p className="text-gray-600">
                    Learn smarter with EdmireAI’s personalized AI tutor that adapts to your pace, strengths, and weaknesses for maximum progress.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 - Live One-to-One Classes */}
            <div className="group p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#FF6B00] to-[#FF9240] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553 2.276A2 2 0 0121 14.118v3.764a2 2 0 01-1.447 1.842L15 22V10zM4 4h10v16H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800  mb-2">Live One-to-One Classes</h3>
                  <p className="text-gray-600">
                    Interact directly with India’s top educators through one-to-one live sessions designed to clear your doubts instantly.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 - Exam-Focused Programs */}
            <div className="group p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#FF6B00] to-[#FF9240] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 018 0v2m4 4H3a2 2 0 01-2-2V7a2 2 0 012-2h18a2 2 0 012 2v12a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800  mb-2">Exam-Focused Programs</h3>
                  <p className="text-gray-600">
                    Crack your dream exam with AI Basics, ML Program, Data Science, and AI Tools Mastery — designed for success in real-world applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 - Real Results & Reviews */}
            <div className="group p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#FF6B00] to-[#FF9240] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.91c.969 0 1.371 1.24.588 1.81l-3.974 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.974-2.89a1 1 0 00-1.176 0l-3.974 2.89c-.785.57-1.84-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.083 10.1c-.783-.57-.38-1.81.588-1.81h4.91a1 1 0 00.95-.69l1.518-4.674z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800  mb-2">Trusted by 50K+ Learners</h3>
                  <p className="text-gray-600">
                    Rated 4.9/5 by 10,000+ students — join India’s fastest-growing AI learning community and achieve your goals together.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Illustration Section */}
          <div className="relative flex justify-center">
            <img className="rounded-xl" src="/whychooseus.png" alt="Why EdmireAI Illustration" />
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default WhyChooseUs;
