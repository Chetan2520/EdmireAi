import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, Clock, DollarSign, BookOpen, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function FAQ() {
  const faqRefs = useRef([]);

  const faqs = [
    {
      IconComponent: Clock,
      question: "Can I study only one topic?",
      answer: "One-to-one tuition provides personalized learning where a dedicated tutor focuses entirely on a single student's needs. This approach helps strengthen subject understanding and build confidence.",
      bgColor: "bg-orange-100"
    },
    {
      IconComponent: DollarSign,
      question: "How much does Vedantu's one-on-one tuition cost?",
      answer: "Vedantu's one-on-one tuition offers flexible pricing based on subject, grade level, and duration. Choose from monthly, topic-wise, or annual packages. A free trial class is available.",
      bgColor: "bg-orange-100"
    },
    {
      IconComponent: BookOpen,
      question: "How do I select a maths tutor for my child?",
      answer: "Review tutor profiles for experience and qualifications. Vedantu offers demo classes for compatibility assessment. Read reviews and consider specialization in Class 10 Maths and CBSE/ICSE syllabus.",
      bgColor: "bg-orange-100"
    },
    {
      IconComponent: Users,
      question: "Will my child get board exam-focused study help?",
      answer: "Yes, Vedantu's one-on-one tuition is designed for board exam preparation. Lessons follow CBSE/ICSE Class 10 Maths syllabus with regular assessments and mock tests.",
      bgColor: "bg-orange-100"
    },
    {
      IconComponent: Clock,
      question: "Is the class schedule flexible for my child's routine?",
      answer: "Yes, Vedantu provides complete scheduling flexibility. Classes can be arranged at times that suit your child's routine without conflicts with school or other activities.",
      bgColor: "bg-orange-100"
    },
    {
      IconComponent: Clock,
      question: "What is the meaning of one-to-one tuition?",
      answer: "One-to-one tuition is personalized learning where a single tutor works exclusively with one student, allowing customized lesson plans and teaching methods tailored to individual needs.",
      bgColor: "bg-orange-100"
    }
  ];

  useEffect(() => {
    faqRefs.current.forEach((el, index) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 50 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-orange-500">Have Questions?</span>{' '}
            <span className="text-gray-800">We've Got You Covered.</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Quick answers to help you get started with confidence
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={(el) => (faqRefs.current[index] = el)}
              className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow opacity-0"
            >
              <div className="flex items-start gap-4">
                <div className={`${faq.bgColor} rounded-xl p-3 flex-shrink-0`}>
                  <faq.IconComponent className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Action Buttons */}
        {/* <div className="fixed bottom-6 right-6 flex flex-col gap-3">
          <button className="bg-white text-gray-800 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow font-medium flex items-center gap-2">
            Find your personal tutor
            <span className="bg-gray-800 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
              ×
            </span>
          </button>
          <button className="bg-green-500 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center ml-auto">
            <MessageCircle size={24} />
          </button>
        </div> */}
      </div>
    </div>
  );
}