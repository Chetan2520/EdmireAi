import React from 'react';
import { Sun, MessageCircle, Calculator, Code, Sparkles, Award } from 'lucide-react';

export default function KidsCourses() {
  const courses = [
    {
      Icon: Sun,
      title: 'Nursery to 5th Grade',
      subtitle: 'Playful learning',
      description: 'Playful learning environment fostering creativity and basic skills with experienced teachers.',
      bgColor: 'bg-pink-50',
      badgeColor: 'bg-red-500',
      iconColor: 'text-yellow-500',
      image: 'https://www.shutterstock.com/image-photo/cute-little-children-hugging-nursery-260nw-2420206409.jpg'
    },
    {
      Icon: MessageCircle,
      title: '6th to 8th Grade',
      subtitle: 'Interactive learning',
      description: 'Engaging sessions building core concepts and teamwork through interactive activities.',
      bgColor: 'bg-yellow-50',
      badgeColor: '',
      iconColor: 'text-blue-500',
      image: 'https://www.paperlesspost.com/blog/wp-content/uploads/062323_Blog_CommunityBuildingActivities02.png'
    },
    {
      Icon: Calculator,
      title: '9th to 10th Grade',
      subtitle: 'Exam preparation',
      description: 'Focused curriculum preparing for board exams with expert guidance and resources.',
      bgColor: 'bg-blue-50',
      badgeColor: '',
      iconColor: 'text-green-500',
      image: 'https://s3.amazonaws.com/prod-hmhco-vmg-craftcms-public/_transforms/seo/_large/highschool-classroom-management-hero.jpg'
    },
    {
      Icon: Code,
      title: '11th to 12th Grade',
      subtitle: 'Advanced studies',
      description: 'Advanced studies and career-oriented preparation with personalized mentoring.',
      bgColor: 'bg-purple-50',
      badgeColor: '',
      iconColor: 'text-purple-500',
      image: 'https://www.shutterstock.com/image-photo/asian-teacher-leader-multiethnic-diverse-600nw-2010062099.jpg'
    }
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
                Fun & Engaging <span className="text-orange-400">Courses for Kids</span>
              </h1>
              
              <p className="text-gray-300 text-[10px] md:text-xs lg:text-sm mb-5 lg:mb-8 leading-relaxed">
                Our carefully crafted programs help children from Nursery to 12th grade explore, learn, and grow. From playful learning in early grades to exam preparation in higher grades, we nurture curiosity and confidence at every stage.
              </p>
              
            
              
              <button className="bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg mb-0 lg:mb-4">
                Explore Courses
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
                        
                        <button className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm w-full">
                          Explore
                        </button>
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
