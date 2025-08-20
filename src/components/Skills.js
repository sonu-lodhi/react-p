import React from 'react';
import SkillsPercentage from './SkillsPercentage';

function Skills() {
const skills=[
  {
  skillsName:'Javascript',
  percentage: '75%'
},
  {
  skillsName:'HTML5',
  percentage: '100%'
},
  {
  skillsName:'React',
  percentage: '60%'
},
  {
  skillsName:'CSS3',
  percentage: '70%'
},
  {
  skillsName:'Bootstrap',
  percentage: '60%'
},
  {
  skillsName:'Tailwind css',
  percentage: '80%'
},
  {
  skillsName:'React Native',
  percentage: '75%'
},
  {
  skillsName:'Figma',
  percentage: '50%'
},
  {
  skillsName:'Git',
  percentage: '70%'
},
  {
  skillsName:'Github',
  percentage: '75%'
},
  {
  skillsName:'C',
  percentage: '70%'
},
  {
  skillsName:'C++',
  percentage: '70%'
},


]


  return (
    <section id='skills' className="container mx-auto px-4 py-8 sm:mb-20 mb-10">
      <div className='flex justify-center items-center'>
      <h2 className="text-4xl font-bold mb-4 gradientText">My Skills</h2>
      </div>


<div className='flex justify-between flex-wrap'>{
skills.map((data,i)=>(
  <SkillsPercentage key={i} skillsName={data.skillsName} percentage={data.percentage}/>
))
}
</div>

      {/* <ul className="list-disc list-inside mb-4">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Tailwind CSS</li>
      </ul>
      <p>
        Sed auctor aliquam lectus non feugiat. Maecenas tristique faucibus
        tellus sed luctus. Aliquam sed ultrices tellus. Nullam ullamcorper
        vestibulum porttitor. Donec vehicula quam at ipsum consequat auctor.
        Aliquam hendrerit laoreet velit non bibendum. Fusce eget eros et odio
        ullamcorper iaculis. Vestibulum id elit elit.
      </p> */}
    </section>
  );
}

export default Skills;
