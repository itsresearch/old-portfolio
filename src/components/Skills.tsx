import React from 'react';
import { Code2, Database, Globe, Server } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: Globe,
      items: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 }
      ]
    },
    {
      category: "Backend Development",
      icon: Server,
      items: [
        { name: "Python", level: 90 },
        { name: "Django", level: 85 },
        { name: "PHP", level: 50 }
      ]
    },
    {
      category: "Database",
      icon: Database,
      items: [
        { name: "MySQL", level: 60 },
        { name: "MongoDB", level: 30 },
        
      ]
    },
    {
      category: "Other Skills",
      icon: Code2,
      items: [
        { name: "Git", level: 80 },
        { name: "RESTful APIs", level: 85 },
        { name: "Problem Solving", level: 90 }
      ]
    }
  ];

  return (
    <div className="min-h-screen p-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-blue-400">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup) => {
            const Icon = skillGroup.icon;
            return (
              <div key={skillGroup.category} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Icon size={24} className="text-blue-400" />
                  <h3 className="text-2xl font-semibold">{skillGroup.category}</h3>
                </div>
                
                <div className="space-y-6">
                  {skillGroup.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <div
                          className="h-full bg-blue-500 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;