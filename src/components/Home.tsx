import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Facebook, Instagram, FileText, Eye } from 'lucide-react';

const Home = () => {
  const [isPreviewHovered, setIsPreviewHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    "https://images.unsplash.com/photo-1605379399642-870262d3d051",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative min-h-screen">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-90" />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center p-8">
          <div className="mb-8">
            <img
              src="/images/image.jpeg"
              alt="Professional headshot"
              className="w-48 h-48 rounded-full mx-auto border-4 border-blue-500 shadow-xl animate-fade-in"
            />
          </div>

          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Research Devkota</h1>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-delay">
            Full Stack Developer | Python Expert | DevOps Enthusiast
          </p>

          <div className="flex justify-center gap-6 mb-8">
            {[
              { icon: Github, href: 'https://github.com/itsresearch' },
              { icon: Linkedin, href: 'www.linkedin.com/in/research-devkota-16a019278' },
              { icon: Facebook, href: 'https://www.facebook.com/research.devkota' },
              { icon: Instagram, href: 'https://www.instagram.com/ohh.research/' },
            ].map(({ icon: Icon, href }, index) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 rounded-full hover:bg-blue-600 transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="/path-to-your-cv.pdf"
              download
              className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <FileText size={20} />
              Download CV
            </a>
            
            <div className="relative">
              <button
                onMouseEnter={() => setIsPreviewHovered(true)}
                onMouseLeave={() => setIsPreviewHovered(false)}
                className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300 flex items-center gap-2 animate-fade-in"
                style={{ animationDelay: "0.7s" }}
              >
                <Eye size={20} />
                Preview CV
              </button>
              
              {isPreviewHovered && (
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2">
                  <img
                    src="/path-to-cv-preview.jpg"
                    alt="CV Preview"
                    className="w-64 rounded-lg shadow-xl border-2 border-gray-700"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
