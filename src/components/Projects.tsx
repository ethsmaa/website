import React from 'react';
import { ProjectsData } from '../utils/constants';
import Image from 'next/image';


export const Projects: React.FC = () => {
  return (
 
      <section id="projects" className='flex flex-col justify-center items-center h-auto md:h-screen mt-48'>
        <h1 className="font-semibold text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6">
          projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-full max-w-screen-xl mx-auto">
          {ProjectsData.map((project, index) => (
            <div key={index} className="relative flex flex-col items-start gap-5 rounded-xl bg-primary-100 p-4 border border-purple-300 w-full transform transition-transform hover:scale-105 hover:shadow-lg ease-in-out">
              <div className="relative h-48 w-full">
                <Image src={project.imgUrl} alt={project.title} layout="fill" objectFit="cover" />
              </div>
              <div className='flex flex-col gap-1'>
                <h2 className="text-white font-medium text-lg md:text-xl">{project.title}</h2>
                <p className='text-slate-300 text-sm md:text-lg'>{project.description}</p>
              </div>

              <a href={project.link} target="_blank" rel="noopener noreferrer" className="demo-button bg-gradient-to-br from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white text-lg font-medium py-2 px-4 rounded-md mt-auto inline-block w-full text-center">
                demo
              </a>
            </div>
          ))}
        </div>
      </section>

  );
};

