import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, MessageCircle, Calculator, Code, Sparkles, Award, Bot, Zap, Brain } from 'lucide-react';

export default function KidsCourses() {
  const courses = [
    {
      Icon: Sun,
      title: 'Edmirai One',
      subtitle: 'One-on-One Live Classes',
      description:
        'Guaranteed results through 1:1 live sessions with India’s teachers. Backed by AI insights to boost learning outcomes and strengthen fundamentals.',
      bgColor: 'bg-pink-50',
      badgeColor: 'bg-red-900',
      iconColor: 'text-yellow-500',
      image:
        'https://www.shutterstock.com/image-photo/cute-little-children-hugging-nursery-260nw-2420206409.jpg',
    },
    {
      Icon: Zap,
      title: 'Edmirai Connect',
      subtitle: 'Instant Live Doubt Solving',
      description:
        'India’s fastest doubt-solving platform, connect to expert tutors in seconds for instant clarity and uninterrupted learning.',
      bgColor: 'bg-blue-50',
      badgeColor: '',
      iconColor: 'text-green-500',
      image:
        'https://s3.amazonaws.com/prod-hmhco-vmg-craftcms-public/_transforms/seo/_large/highschool-classroom-management-hero.jpg',
    },
    {
      Icon: Bot,
      title: 'Edmirai Learn',
      subtitle: 'AI-Powered Personal Tutor',
      description:
        'Your smart tutor that adapts to each student’s pace and strengths, enabling continuous, personalised learning at home.',
      bgColor: 'bg-yellow-50',
      badgeColor: '',
      iconColor: 'text-blue-500',
      image:
        'https://www.paperlesspost.com/Blogs/wp-content/uploads/062323_Blogs_CommunityBuildingActivities02.png',
    },
    
    {
      Icon: Brain,
      title: 'Edmirai ExamEdge',
      subtitle: 'JEE & NEET Preparation',
      description:
        'Structured and adaptive prep system for JEE & NEET, Smartbooks, test series, progress tracking, and guided success strategy.',
      bgColor: 'bg-purple-50',
      badgeColor: '',
      iconColor: 'text-purple-500',
      image:
        'https://www.shutterstock.com/image-photo/asian-teacher-leader-multiethnic-diverse-600nw-2010062099.jpg',
    },
  ];

  const features = [
    { Icon: Sparkles, text: 'Interactive learning sessions' },
    { Icon: Award, text: 'Certified instructors' }
  ];

  return (
    <div className="min-h-screen bg-white p-3 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left side - Updated Content */}
            <div className="lg:w-1/2 text-white">
              <h1 className="text-2xl lg:text-5xl font-bold mb-3 lg:mb-6 leading-tight">
                Personalised Programs for Every Learner
              </h1>
              
              <p className="text-gray-300 text-[10px] md:text-xs lg:text-sm mb-2 leading-relaxed">
                From 1:1 learning to rapid doubt-solving and competitive exam prep, Edmirai gives every student the right path to grow, excel, and achieve.
              </p>
              <p className='text-gray-300 text-[10px] md:text-xs lg:text-sm mb-5 lg:mb-8 leading-relaxed'> 
                Our programs seamlessly combine expert educators + AI-driven personalisation to ensure every learner gets the support they need.
              </p>
            
              
              <button className="bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg mb-0 lg:mb-4">
                Let's Connect
              </button>
              
            </div>

            {/* Right side - Course Cards */}
            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {courses.map((course, index) => (
                  <div 
                    key={index}
                    className={`${course.bgColor} rounded-2xl p-6 relative shadow-lg `}
                  >
                    {course.badge && (
                      <span className={`absolute top-3 left-3 ${course.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                        {course.badge}
                      </span>
                    )}
                    
                    <div className="flex flex-col items-start gap-3 mt-2">
                      <div className={`${course.iconColor} bg-white rounded-xl p-1 lg:p-2 shadow-md`}>
                        <course.Icon className="w-8 h-8" strokeWidth={2} />
                      </div>
                      
                      <div className="flex-1">
                        <p className={`text-xs  font-semibold mb-1 ${course.titleColor || 'text-blue-600'}`}>
                          {course.title}
                        </p>
                        <h3 className="text-sm lg:text-lg font-bold text-gray-900 mb-2">
                          {course.subtitle}
                        </h3>
                        <p className="text-gray-600 text-[10px] md:text-xs lg:text-sm  mb-4">
                          {course.description}
                        </p>
                        
                        <Link 
                          to={`/Program${index + 1}`}
                          className="bg-red-900 hover:bg-red-800 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm w-full text-center block"
                        >
                          Explore
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}