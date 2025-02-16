import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../layout/section/Section';
import { SkillCard } from '../ui/cards/SkillCard';

export const skills = [
  { name: 'C# .NET', icon: '/assets/NETCore.png', percentage: 90 },
  { name: 'TypeScript', icon: '/assets/typescript.png', percentage: 85 },
  { name: 'Python', icon: '/assets/python.jpg', percentage: 80 },
  { name: 'React', icon: '/assets/react.png', percentage: 65 },
  { name: 'Angular', icon: '/assets/angular.png', percentage: 70 },
  { name: 'Power BI', icon: '/assets/powerbi.png', percentage: 50 },
];

export const Skills = () => {
  return (
    <Section id={'skills'} title={'My Skills'}>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-3/4 max-w-screen-lg overflow-hidden">
          {skills.map((skill, index) => (
            <SkillCard
              spotlightUrl={'tension'}
              key={index}
              index={index}
              className="relative p-4 flex flex-col items-center text-center bg-gray-950 shadow-md rounded-2xl ">
              <div className="w-3/4 flex items-center rounded-md border-l-2 border-r-2 border-t-2 border-[#D8F2A6] justify-center p-2">
                <img src={skill.icon} alt="Skill Icon" className="w-14 h-14 m-2 rounded-md" />
              </div>
              <h3 className="font-semibold text-xs text-[#24282E] bg-[#CAC302] border-[#F5FCE9] border-2 mt-2 mb-3 px-1">
                {skill.name}
              </h3>
              <div className="relative flex items-center w-3/4 h-5 border-2  border-[#5A6472] rounded-full overflow-hidden">
                <motion.div
                  className="h-3 bg-[#9EDD22]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  whileHover={{
                    width: [0, `${skill.percentage}%`],
                    transition: {
                      duration: 3,
                      repeat: 0,
                    },
                  }}
                />
              </div>
            </SkillCard>
          ))}
        </div>
      </div>
    </Section>
  );
};
