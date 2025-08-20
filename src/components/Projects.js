import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Netflix Clone',
      description:
        'I used React js Framework to build this site on the server Technology used on this project React JS , CSS , Hooks, API ,Axios',
image: 'https://ramanmalviya987.github.io/Main_Portfolio/static/media/netflix.cb05e746.webp',
        link: 'https://netflix-clone-0d6d44.netlify.app/',
    },
    {
      title: 'Tic Tac Toe Game',
      description:
        'Technology used on this site HTML CSS Javascript. This site is host on github',
       image: 'https://www.coolmathgames.com/sites/default/files/Tic%20Tac%20Toe%20OG%20Image.png',
        link: 'https://ritesh1712.github.io/tictactoe.github.io/',
    },
    {
      title: 'Ecommerce',
      description:
        ' I used React js Framework to build this clone I also used Firebase to deployed this site on the server Technology used in this project React JS , CSS , Hooks, API ,Axios',
       image: 'https://www.cloudways.com/blog/wp-content/uploads/ecommerce-website-checklist-b-.jpg',
        link: 'https://ecommerce-project-collage.netlify.app/',
    },
  ];

  return (
    <section id='Projects' className="container mx-auto px-4 py-8 sm:mb-20 mb-10">

 <div className='flex justify-center items-center'>
      <h2 className="text-4xl font-bold mb-4 gradientText">My Projects</h2>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white mt-8 bg-opacity-10 boxShadow border-[3px] border-[#00dbde] border-r-0 border-b-0 border-opacity-30 rounded-lg overflow-hidden animate-[rotate_1s_ease-in-out] ">
              <a href={project.link} className="cursor-pointer">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover hover:scale-110 transition duration-500 ease-in-out" />
            </a>
            <div className="p-4 h-40 ">
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-white mb-4">{project.description}</p>
            </div>
            <div className='h-10 pl-2'>
              <a href={project.link} className="text-blue-300 border-b-2 border-black border-opacity-0 transition duration-500 ease-in-out hover:border-blue-300">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
