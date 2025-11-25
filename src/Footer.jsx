import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, ChevronRight, ArrowRight } from 'lucide-react';
import { BiLogoPlayStore } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Programs', href: '/program1' },
    { name: 'Why Edmirai', href: '/program2' },
    { name: 'Become a Teacher', href: '/teacher' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const programs = [
    {
      grade: 'One-on-One Live Classes',
      desc: 'Personalised 1:1 sessions with expert teachers',
      href: '/program1',
    },
    {
      grade: 'AI-Powered Personal Tutor',
      desc: 'Smart learning companion for continuous growth',
      href: '/program3',
    },
    {
      grade: 'Instant Live Doubt Solving',
      desc: 'Connect to expert tutors in seconds',
      href: '/program2',
    },
    {
      grade: 'JEE & NEET Preparation',
      desc: 'Structured exam prep with expert guidance',
      href: '/program4',
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-20">
        
        {/* Main Footer Content */}
        <div className="py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

            {/* Brand Section - Spans 4 columns */}
            <div className="lg:col-span-4">
              <div className="mb-2">
                <div className="h-10 w-32 lg:h-12 lg:w-40">
                  <img src="/footer-logo.png" alt="Edmirai Logo" className="h-full w-full object-contain" />
                </div>
                <p className="text-xs lg:text-sm text-gray-400 leading-tight lg:leading-relaxed mb-1">
                  Smarter Learning, Better Results.
                </p>
              </div>

              {/* Social Links */}
              <div className="mb-6 lg:mb-8">
                <p className="text-xs lg:text-sm font-semibold text-gray-300 mb-3 lg:mb-4">Follow Us</p>
                <div className="flex gap-2 lg:gap-3">
                  {/* <a 
                    href="#" 
                    className="group p-2 lg:p-3 bg-white/5 rounded-xl hover:bg-red-500/20 border border-white/10 hover:border-red-500/50 transition-all duration-300"
                  >
                    <Facebook className="h-4 w-4 lg:h-5 lg:w-5 text-gray-400 group-hover:text-red-400 transition-colors" />
                  </a> */}
                  <a 
                    href="https://www.instagram.com/learnwithedmirai?utm_source=qr&igsh=MTNwb3IybzMzZ3pkbA==" 
                    className="group p-2 lg:p-3 bg-white/5 rounded-xl hover:bg-red-500/20 border border-white/10 hover:border-red-500/50 transition-all duration-300"
                  >
                    <Instagram className="h-4 w-4 lg:h-5 lg:w-5 text-gray-400 group-hover:text-red-400 transition-colors" />
                  </a>
                  {/* <a 
                    href="#" 
                    className="group p-2 lg:p-3 bg-white/5 rounded-xl hover:bg-red-500/20 border border-white/10 hover:border-red-500/50 transition-all duration-300"
                  >
                    <Twitter className="h-4 w-4 lg:h-5 lg:w-5 text-gray-400 group-hover:text-red-400 transition-colors" />
                  </a> */}
                  {/* <a 
                    href="#" 
                    className="group p-2 lg:p-3 bg-white/5 rounded-xl hover:bg-red-500/20 border border-white/10 hover:border-red-500/50 transition-all duration-300"
                  >
                    <Youtube className="h-4 w-4 lg:h-5 lg:w-5 text-gray-400 group-hover:text-red-400 transition-colors" />
                  </a> */}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 lg:gap-3">
                <Link
                  to="/contact"
                  className="group px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-red-800 to-red-900 text-white font-semibold rounded-xl text-sm lg:text-base transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Request a Callback
                  <ArrowRight className="h-3 w-3 lg:h-4 lg:w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                {/* <a
                  href=""
                  className="px-4 lg:px-6 py-1.5 lg:py-2 bg-white/5 text-white font-semibold rounded-xl hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2 text-sm lg:text-base"
                >
                  <BiLogoPlayStore className='w-8 h-8 lg:w-10 lg:h-10'/>
                  Get App
                </a> */}
              </div>
            </div>

            {/* Navigation Links - Spans 2 columns */}
            <div className="lg:col-span-2">
              <h4 className="font-bold text-base lg:text-lg mb-4 lg:mb-6 text-white">Quick Links</h4>
              <ul className="space-y-2 lg:space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group text-xs lg:text-sm text-gray-400 hover:text-white transition-all flex items-center gap-1.5 lg:gap-2"
                    >
                      <ChevronRight className="h-3 w-3 lg:h-4 lg:w-4 opacity-0 -ml-4 lg:-ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-red-400" />
                      <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs - Spans 3 columns */}
            <div className="lg:col-span-3">
              <h4 className="font-bold text-base lg:text-lg mb-4 lg:mb-6 text-white">Our Programs</h4>
              <ul className="space-y-2 lg:space-y-4">
                {programs.map((prog) => (
                  <li key={prog.grade}>
                    <a
                      href={prog.href}
                      className="group block p-2 lg:p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
                    >
                      <span className="font-semibold text-xs lg:text-sm text-white group-hover:text-red-400 transition-colors flex items-center gap-1.5 lg:gap-2">
                        {prog.grade}
                        <ChevronRight className="h-2.5 w-2.5 lg:h-3 lg:w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                      <p className="text-xs text-gray-500 mt-1 leading-tight lg:leading-relaxed">{prog.desc}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact - Spans 3 columns */}
            <div className="lg:col-span-3">
              <h4 className="font-bold text-base lg:text-lg mb-4 lg:mb-6 text-white">Get in Touch</h4>
              <ul className="space-y-3 lg:space-y-4">
                <li className="flex items-start gap-2 lg:gap-3 group">
                  <div className="p-1.5 lg:p-2 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                    <Mail className="h-4 w-4 lg:h-5 lg:w-5 text-red-400 flex-shrink-0" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1">Email</p>
                    <a href="mailto:support@edmirai.com" className="text-xs lg:text-sm text-gray-300 hover:text-white transition-colors">
                      support@edmirai.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2 lg:gap-3 group">
                  <div className="p-1.5 lg:p-2 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                    <Phone className="h-4 w-4 lg:h-5 lg:w-5 text-red-400 flex-shrink-0" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1">Phone</p>
                    <a href="tel:+919876543210" className="text-xs lg:text-sm text-gray-300 hover:text-white transition-colors">
                      +91 88672 70931
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2 lg:gap-3 group">
                  <div className="p-1.5 lg:p-2 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                    <MapPin className="h-4 w-4 lg:h-5 lg:w-5 text-red-400 flex-shrink-0" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1">Address</p>
                    <p className="text-xs lg:text-sm text-gray-300 leading-tight lg:leading-relaxed">
                      Level 8, Octave 3 A, Salarpuria Sattva Knowledge City, Hyderabad, Telangana, 500081
                    </p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-4 lg:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 lg:gap-4 text-xs lg:text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Edmirai. All rights reserved.</p>
            <div className="flex items-center gap-4 lg:gap-6">
              
              <a 
                href="https://digitalsuccesssolutions.in/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs lg:text-sm hover:text-red-400 transition-colors"
              >
                Designed and Developed by Digital Success Solutions
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;