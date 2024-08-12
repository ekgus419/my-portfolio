import React from 'react';
import { FaGithub } from 'react-icons/fa';

const ToyProjectDetail = ({ detail }) => (
  <div className='mb-4'>
    <h4 className='text-md font-semibold'>{detail.title}</h4>
    <ul className='list-disc pl-5 mt-2'>
      {detail.items.map((item, itemIndex) => (
        <li key={itemIndex} className='mb-2'>
          <h5 className='font-medium'>{item.subtitle}</h5>
          <div>{item.description}</div>
        </li>
      ))}
    </ul>
  </div>
);

const ToyProjectCard = ({ project }) => (
  <div className='border rounded-lg overflow-hidden shadow-md'>
    <div className='p-4'>
      <div className='flex justify-between items-center mb-2'>
        <h3 className='text-xl font-bold'>{project.title}</h3>
        {project.githubUrl && (
          <a href={project.githubUrl} target='_blank' rel='noopener noreferrer'>
            <FaGithub className='text-3xl text-black-600 hover:text-gray-600 transition-colors duration-300' />
          </a>
        )}
      </div>
      {project.details.map((detail, detailIndex) => (
        <ToyProjectDetail key={detailIndex} detail={detail} />
      ))}
    </div>
  </div>
);

const ToyProject = ({ ToyProjectInfo }) => {
  return (
    <div className='p-6 bg-white rounded-lg shadow-md'>
      <h2 className='text-3xl font-extrabold mb-6 text-gray-800'>Toy Project</h2>
      <p className='text-gray-600 mb-6'>열정을 가지고 학습한 분야에서 얻은 성과를 소개합니다.</p>
      <hr className='my-4' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
        {ToyProjectInfo.map((project, index) => (
          <ToyProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ToyProject;
