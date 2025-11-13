import React from 'react';
import { 
  Bot, Users, Sparkles, Video, ShieldCheck, Brain, 
  MessageCircle, FileText, Globe, BookOpen, DollarSign 
} from 'lucide-react';

const FAQItem = ({ icon: Icon, question, answer }) => {
  return (
    <div className="rounded-2xl p-5 md:p-6 bg-white shadow-md hover:shadow-lg border-2 border-gray-100 transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
          <Icon className="w-5 h-5 text-red-900" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-lg">
            {question}
          </h3>
          <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const faqs = [
    { icon: Bot, question: "What is Edmirai?", answer: "Edmirai is an AI-powered personalised learning platform offering 1-to-1 live classes, instant doubt-solving, and smart insights for Grades 4–12 and competitive exam aspirants." },
    { icon: Users, question: "Who can enroll at Edmirai?", answer: "Students from Grades 4–12 across all boards, CBSE, ICSE, State Boards, IB & IGCSE, and those preparing for competitive exams like JEE, NEET & BITSAT can join." },
    { icon: Sparkles, question: "How is Edmirai different from other learning platforms?", answer: "Edmirai combines: Personalised 1-to-1 live teaching, AI-driven learning insights, Instant doubt-solving (under 90 seconds), Structured exam-oriented guidance. This ensures measurable progress and deep concept clarity." },
    { icon: Video, question: "Do you offer 1-to-1 live classes?", answer: "Yes, Edmirai One provides fully personalised 1-to-1 live sessions with expert teachers. Students can also communicate directly with their teachers for guidance and clarification." },
    { icon: ShieldCheck, question: "Do you guarantee results?", answer: "Yes, Edmirai provides guaranteed academic improvement. If measurable progress is not achieved, we offer a money-back guarantee." },
    { icon: Brain, question: "How does the AI tutor help students?", answer: "The AI tutor understands each student’s strengths and weaknesses, recommends targeted practice, and provides real-time insights to maximise improvement." },
    { icon: MessageCircle, question: "How does doubt-solving work?", answer: "With Edmirai Connect, students can connect to expert tutors in under 90 seconds to clear doubts instantly." },
    { icon: FileText, question: "Do you provide study material or tests?", answer: "Yes, students receive structured assignments, periodic tests, and smart insights to strengthen their progress." },
    { icon: Globe, question: "Is it online or offline?", answer: "Edmirai is 100% online, allowing students to learn from anywhere. You can also book a free demo session on our website, and our team will guide you through the enrollment process." },
    { icon: BookOpen, question: "Which subjects do you teach?", answer: "We teach all subjects for Grades 4–12, along with dedicated preparation for JEE, NEET, BITSAT & Olympiads." },
    { icon: DollarSign, question: "What about pricing?", answer: "We offer affordable pricing compared to the market, while maintaining high-quality teaching and guaranteed results. Just book a free trial / demo to get personalised pricing and program details." }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Got Questions? We've Got Answers!
          </h2>
          {/* <p className="mt-3 text-gray-600 text-base md:text-lg">
            Quick answers to help you get started with confidence
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              icon={faq.icon}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}