import React from 'react';
import avatar from '../images/avatar.png'

function About() {
  return (
    <section id='About' className="container mx-auto px-4 py-8 sm:flex justify-between sm:mt-16">
      <div className='sm:w-2/3 animate-[left_1s_ease-in-out]'>
      <h2 className="text-4xl font-bold mb-4 text-blue-300 gradientText">Sonu Lodhi</h2>
      <p className="mb-4 text-xl">
      Hi there, my name is Ritesh Raghuwanshi and I am a frontend developer with 3 months of experience working at Qwings India. I am passionate about building responsive and intuitive web applications that provide a seamless user experience Apart from technical skills, I am a quick learner and a good team player, always open to learning new technologies and approaches. I am also an effective communicator and can explain technical concepts to non-technical stakeholders.
      </p>
      <div className='sm:w-1/3 flex justify-between'>
      <button className='sm:mt-5 bg-[#00dbde] uppercase px-3 py-1 text-lg text-black font-medium rounded-md opacity-80 hover:opacity-100'>
        <a href="https://drive.google.com/file/d/1UhcUIXDJBBtbeUFTl_GpTOcnRKsnfTc-/view?usp=share_link" target='blank'>
        resume
        </a>
        </button>
      <button className='sm:mt-5 bg-[#00dbde] uppercase px-3 py-1 text-lg text-black font-medium rounded-md opacity-80 hover:opacity-100'>
        <a href="https://www.instagram.com/ritesh_raghuwanshi_1712/?next=%2F" target='blank'>
        <i className="fa fa-instagram text-xl"></i>
        </a>
        </button>
      <button className='sm:mt-5 bg-[#00dbde] uppercase px-3 py-1 text-lg text-black font-medium rounded-md opacity-80 hover:opacity-100'>
        <a href="https://github.com/ritesh1712" target='blank'>
        <i className="fa fa-github text-xl"></i>
        </a>
        </button>
      <button className='sm:mt-5 bg-[#00dbde] uppercase px-3 py-1 text-lg text-black font-medium rounded-md opacity-80 hover:opacity-100'>
        <a href="https://www.linkedin.com/in/ritesh-raghuwanshi-b258b1225/" target='blank'>
        <i className="fa fa-linkedin text-xl"></i>
        </a>
        </button>
      </div>

      </div>
      <div className='sm:w-1/4 sm:block flex justify-center animate-[left_1s_ease-in-out]'>
      <img className='h-96 mt-8 sm:mt-0' src={avatar} alt="img" />
      </div>
    </section>
  );
}

export default About;
