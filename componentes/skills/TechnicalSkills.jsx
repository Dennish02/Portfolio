"use client"

import { useEffect, useRef } from "react"

const skills = [
  { name: "Material UI", experience: "2+ year" },
  { name: "Expo", experience: "2+ year" },
  { name: "React Native", experience: "2+ year" },
  { name: "Pusher", experience: "2+ year" },
  { name: "TypeScript", experience: "2+ year" },
  { name: "CSS3", experience: "5+ years" },
  { name: "HTML5", experience: "5+ years" },
  { name: "React.js", experience: "3+ year" },
  { name: "Redux.js", experience: "3+ year" },
  { name: "Next.js", experience: "2+ year" },
  { name: "JavaScript", experience: "4+ years" },
  { name: "PHP", experience: "3+ year" },
  { name: "SQL", experience: "1 year" },
  { name: "MySQL", experience: "1 year" },
  { name: "Git", experience: "2 year" },
  { name: "Sass", experience: "3+ years" },
  { name: "Gulp", experience: "3+ years" },
  { name: "JWT", experience: "3+ year" },
  { name: "Firebase", experience: "1 year" },
  { name: "PostgreSQL", experience: "4 year" },
  { name: "Express.js", experience: "2 year" },
  { name: "MongoDB", experience: "3+ year" },
  { name: "Illustrator", experience: "3 years" },
  { name: "Photoshop", experience: "3 years" },
  { name: "Jest", experience: "1 year" },
]

export default function TechnicalSkills() {

  return (
    <section className='technicalSkillsSection'>
      <h2 className="items-left">Technical Skills</h2>
      <div className='technicalSkills'>
        {skills.map((skill, index) => (
          <div
            key={skill.name+index}
            className='skill'
          >
            <h3 className='skillName'>{skill.name}</h3>
            <span className='experience'>{skill.experience}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

