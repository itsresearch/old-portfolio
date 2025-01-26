import React, { useState } from 'react';
import { Home, User, Code2, Briefcase, BookOpen, Mail, FolderLock, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Code2, label: 'Skills' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'blogs', icon: BookOpen, label: 'Blogs' },
    { id: 'contact', icon: Mail, label: 'Contact' },
    { id: 'other', icon: FolderLock, label: 'Other' },
  ];

  const handleClick = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close menu after selecting a section
  };

  return (
    <nav className="relative z-50">
      {/* Mobile Hamburger Menu */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 bg-gray-800 text-white rounded-full focus:outline-none"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Navbar */}
      <div
        className={`fixed left-8 top-1/2 -translate-y-1/2 z-50 bg-gray-800/50 backdrop-blur-lg rounded-2xl p-4 shadow-xl hidden md:block`}
      >
        <div className="space-y-8">
          {navItems.map(({ id, icon: Icon, label }) => (
            <div
              key={id}
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => handleClick(id)}
            >
              <div
                className={`p-3 rounded-xl transition-all duration-300 ${
                  activeSection === id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:bg-blue-600/20 hover:text-blue-400'
                }`}
              >
                <Icon size={24} />
              </div>
              <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`fixed inset-0 bg-gray-900/90 z-40 transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 md:hidden`}
      >
        <div className="flex flex-col items-center justify-center space-y-8 h-full">
          {navItems.map(({ id, icon: Icon, label }) => (
            <div
              key={id}
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => handleClick(id)}
            >
              <div
                className={`p-3 rounded-xl transition-all duration-300 ${
                  activeSection === id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:bg-blue-600/20 hover:text-blue-400'
                }`}
              >
                <Icon size={24} />
              </div>
              <span className="text-xs mt-1 text-white">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
