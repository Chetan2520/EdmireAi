import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const itemRefs = useRef([]);
  const containerRef = useRef(null);

  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer: "Simply choose your preferred course, click on the 'Enroll Now' button, and complete the payment process. Once enrolled, you’ll get instant access to all video lectures, notes, and practice materials."
    },
    {
      question: "Can I access the classes after purchase?",
      answer: "Yes! Once you’ve purchased a course, you get lifetime access to all the classes and materials. You can revisit any lecture anytime through your dashboard."
    },
    {
      question: "Do you provide live or recorded classes?",
      answer: "We offer both! You can attend live interactive classes with top educators and also access recorded sessions for revision or missed lectures."
    },
    {
      question: "What if I have doubts during the course?",
      answer: "You can post your doubts in the dedicated Q&A section or during live sessions. Our expert mentors will personally help resolve your queries quickly."
    },
    {
      question: "Is there any refund policy?",
      answer: "Yes, we offer a refund if you cancel within the first 7 days of purchase, provided less than 20% of the content has been accessed. Check our Refund Policy page for complete details."
    },
    {
      question: "Do you provide certificates after course completion?",
      answer: "Absolutely! After completing your course and passing the final assessment, you’ll receive a verified digital certificate that can be shared on LinkedIn and your resume."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            <span className="bg-primary bg-clip-text text-gray-900">
              Frequently Asked
            </span> {" "}
            Questions
          </h1>
          <p className="text-base text-gray-600 mt-4">
            Find answers to common questions about our bus booking service
          </p>
        </div>

        <div ref={containerRef} className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index 
                  ? 'shadow-2xl bg-gradient-to-br from-red-50 to-white border-2 border-red-200' 
                  : 'shadow-lg bg-white hover:shadow-xl border-2 border-gray-100'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start justify-between p-4 md:p-8 text-left group"
              >
                <span className={`text-base md:text-2xl font-bold pr-6 leading-tight transition-colors ${
                  openIndex === index ? 'text-red-900' : 'text-gray-900 group-hover:text-red-900'
                }`}>
                  {faq.question}
                </span>
                <div 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFAQ(index);
                  }}
                  className={`flex-shrink-0 w-5 h-5 lg:w-10 lg:h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                    openIndex === index 
                      ? 'bg-red-900 rotate-180' 
                      : 'bg-red-900 group-hover:bg-red-800'
                  }`}
                >
                  <ChevronDown className="text-white" size={24} />
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-8 pt-0">
                  <div className="border-t-2 border-red-200 pt-6">
                    <p className="lg:text-lg text-sm text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative corner accent */}
              <div className={`absolute top-0 right-0 w-5 h-5 opacity-5 transition-opacity ${
                openIndex === index ? 'opacity-10' : ''
              }`}>
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-red-900 to-transparent rounded-bl-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}