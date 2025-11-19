import React from "react";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBolt,
  FaBrain,
  FaAward,
  FaHome,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUserGraduate className="w-6 h-6 text-white" />,
      title: "Personalised Learning That Works",
      desc: "Every student learns differently. Edmirai adapts to your strengths, weaknesses, and pace, ensuring measurable progress at every step.",
    },
    {
      icon: <FaChalkboardTeacher className="w-6 h-6 text-white" />,
      title: "India’s Best 1-to-1 Learning Experience",
      desc: "Live, personalised sessions led by expert educators ensure deep concept clarity and guided practice, not just passive watching.",
    },
    {
      icon: <FaBolt className="w-6 h-6 text-white" />,
      title: "Instant Doubt Solving",
      desc: "Never stay stuck. With Edmirai Connect, get expert help in under 90 seconds so your learning continues smoothly.",
    },
    {
      icon: <FaBrain className="w-6 h-6 text-white" />,
      title: "AI-Powered Smart Insights",
      desc: "Our AI identifies weak areas, recommends corrective practice, and tracks progress, enabling informed learning decisions.",
    },
    {
      icon: <FaAward className="w-6 h-6 text-white" />,
      title: "Proven Success for School & Competitive Exams",
      desc: "From strengthening fundamentals to JEE/NEET prep, Edmirai builds mastery, confidence, and exam-ready skills.",
    },
    {
      icon: <FaHome className="w-6 h-6 text-white" />,
      title: "Safe Learning from Home",
      desc: "Trusted by parents, structured, distraction-free learning environment with expert support from anywhere.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6" id="why">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          Why <span className="text-red-900">Edmirai</span>?
        </h2>
        <p className="text-sm lg:text-lg text-gray-600 max-w-2xl mx-auto">
          A smarter way to learn, powered by expert guidance and intelligent
          technology. Edmirai ensures every learner receives personalised
          support designed to maximise academic potential and long-term growth.
        </p>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-10 items-center max-w-7xl mx-auto">
        {/* Left Side (3 features) */}
        <div className="space-y-8">
          {features.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white hover:shadow-xl border border-gray-100 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-500 to-red-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <img
            src="/whychooseus.png"
            alt="Why Edmirai Illustration"
            className="rounded-xl w-[280px] md:w-[350px] lg:w-[450px]"
          />
        </div>

        {/* Right Side (3 features) */}
        <div className="space-y-8">
          {features.slice(3, 6).map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white hover:shadow-xl border border-gray-100 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-500 to-red-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col items-center gap-10 max-w-2xl mx-auto">
        {/* First 3 */}
        {features.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="group p-5 rounded-2xl bg-white hover:shadow-lg border border-gray-100 w-full transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-red-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div className="text-left">
                <h3 className="text-base font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Image Centered */}
        <img
          src="/whychooseus.png"
          alt="Why Edmirai Illustration"
          className="rounded-xl w-[250px] md:w-[300px]"
        />

        {/* Last 3 */}
        {features.slice(3, 6).map((item, index) => (
          <div
            key={index}
            className="group p-5 rounded-2xl bg-white hover:shadow-lg border border-gray-100 w-full transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-red-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div className="text-left">
                <h3 className="text-base font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
