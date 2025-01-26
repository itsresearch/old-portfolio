import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen p-16">
      <div className="max-w-4xl mx-auto bg-gray-800/50 rounded-2xl p-8 backdrop-blur-lg">
        <h2 className="text-4xl font-bold mb-8 text-blue-400">About Me</h2>
        
        <div className="space-y-6 text-gray-300">
          <p className="text-lg leading-relaxed">
          Hi there! 👋 I'm Research Devkota, a passionate developer and technology enthusiast from Kathmandu. I specialize in crafting innovative solutions that make life easier, whether it's through developing web applications, solving complex problems, or creating user-friendly interfaces.
          </p>
          
          <p className="text-lg leading-relaxed">
          With a strong foundation in programming languages like Python, Java, C, PHP, HTML, CSS, and JavaScript, I’ve completed several projects that blend functionality with creativity. I’m currently pursuing my Bachelor of Information Management (BIM), where I explore the synergy between technology and business.
          </p>
          
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">Education</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="text-xl font-medium">Bachelor In Informatin Management.</h4>
                <p className="text-gray-400">Tribhuvan University • 2021-2025</p>
              </li>
            </ul>
          </div>
          
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">Work Experience</h3>
            <ul className="space-y-6">
              <li>
                {/* <h4 className="text-xl font-medium">Full Stack Developer</h4>
                <p className="text-gray-400">Company Name • 2022-Present</p> */}
                <p className="mt-2">
                  Not yet started my professional career but I have done several projects on my own.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;