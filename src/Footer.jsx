import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import logo from '/footer-logo.png'; // Apna EdmirAI logo yahan daalen
import { Link } from 'react-router-dom';

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Programs', href: '/programs' },
    { name: 'Why EdmirAI', href: '/why-edmirai' },
    { name: 'Become a Teacher', href: '/teach-with-us' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ];

const programs = [
  {
    grade: 'One-on-One Live Classes',
    desc: 'Personalised 1:1 sessions with expert teachers for focused, result-driven learning.',
    href: '/programs/nursery-5',
  },
  {
    grade: 'AI-Powered Personal Tutor',
    desc: 'Your smart learning companion that adapts to your pace and style for continuous growth.',
    href: '/programs/6-8',
  },
  {
    grade: 'Instant Live Doubt Solving',
    desc: 'Connect to expert tutors in seconds and get instant clarity anytime, anywhere.',
    href: '/programs/9-10',
  },
  {
    grade: 'JEE & NEET Preparation',
    desc: 'Structured, adaptive preparation for top exams with analytics, strategy, and expert guidance.',
    href: '/programs/11-12',
  },
];

  const features = [
    'Personalized AI Tutor',
    'Live One-to-One Classes',
    'Exam-Focused Programs',
    'Trusted by 50K+ Learners',
  ];

  return (
    <footer className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-gray-100 px-2 lg:px-12">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">

          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 h-5 w-40 mb-5">
              <img src={logo} alt="EdmirAI Logo" className=" object-contain" />
            </div>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
             LEARN SMARTER WITH EDMIRAI
<br></br>
Explore personalised daily learning, doubt-solving & exam prep — backed by AI.
</p>
            <div className="flex gap-3">
              <a href="#" className="p-2.5 bg-white/10 rounded-full hover:bg-white/20 transition-all transform hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2.5 bg-white/10 rounded-full hover:bg-white/20 transition-all transform hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2.5 bg-white/10 rounded-full hover:bg-white/20 transition-all transform hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2.5 bg-white/10 rounded-full hover:bg-white/20 transition-all transform hover:scale-110">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-bold text-lg mb-5 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white hover:underline transition-all flex items-center group"
                  >
                    <ChevronRight className="h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
              
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-lg mb-5 text-white">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((prog) => (
                <li key={prog.grade}>
                  <a
                    href={prog.href}
                    className="text-xs text-gray-300 hover:text-white transition-colors block"
                  >
                    <span className="font-medium text-white">{prog.grade}</span>
                    <p className="text-xs text-gray-400">{prog.desc}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Features */}
          <div>
            <h4 className="font-bold text-lg mb-5 text-white">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-gray-300 mb-6">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>support@edmirai.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Level 8, Octave 3 A, Salarpuria Sattva Knowledge City, Hyderabad, Telangana, 500081</span>
              </li>
            </ul>

            <div className="flex gap-2 mt-6">
              <a
                href="#"
                className="px-4 py-2 bg-emerald-500 text-white text-sm font-medium rounded-full hover:bg-emerald-600 transition-colors"
              >
                Book Demo
              </a>
              <a
                href="#"
                className="px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-full hover:bg-white/20 transition-colors flex items-center gap-1"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.47 2 2 6.47 2 12.04C2 17.61 6.47 22.08 12.04 22.08C17.61 22.08 22.08 17.61 22.08 12.04C22.08 6.47 17.61 2 12.04 2ZM12.04 3.5C16.77 3.5 20.58 7.31 20.58 12.04C20.58 16.77 16.77 20.58 12.04 20.58C7.31 20.58 3.5 16.77 3.5 12.04C3.5 7.31 7.31 3.5 12.04 3.5ZM12.04 5.75C8.63 5.75 5.88 8.5 5.88 12.04C5.88 15.58 8.63 18.33 12.04 18.33C15.45 18.33 18.2 15.58 18.2 12.04C18.2 8.5 15.45 5.75 12.04 5.75Z"/>
                </svg>
                Download App
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6 text-sm text-center  text-gray-500">
          <p>© {new Date().getFullYear()} EdmirAI. All rights reserved.</p>
          <p className="mt-1">
           Designed and Developed by <Link className='underline text-gray-300' to={"https://digitalsuccesssolutions.in/"}>Digital Success Solutions.</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;