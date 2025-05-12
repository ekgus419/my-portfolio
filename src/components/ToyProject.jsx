import React from 'react';
import { FaGithub } from 'react-icons/fa';

const ToyProjectDetail = ({ detail }) => (
  <div className='flex flex-col h-full'>
    <ul className='list-disc pl-5 mt-2 space-y-4 flex-grow'>
      {detail.items.map((item, itemIndex) => (
        <li key={itemIndex}>
          <div>{item.description}</div>
          {item.subItems && (
            <div className='mt-2 pl-5 space-y-1 text-sm text-gray-500'>
              {item.subItems.map((subItem, subIndex) => (
                <div key={subIndex} className='flex items-start'>
                  <span className='mr-2'>✅</span>
                  <span>{subItem}</span>
                </div>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>

    {/* 기술 스택은 li 밖에서 별도 div로만 처리 */}
    {detail.items.some((item) => item.techStack) && (
      <div className='flex flex-wrap gap-4 mt-6'>
        {detail.items
          .filter((item) => item.techStack)
          .map((item, index) => (
            <React.Fragment key={index}>{item.techStack}</React.Fragment>
          ))}
      </div>
    )}
  </div>
);

const ToyProjectCard = ({ project }) => (
  <div className='border rounded-lg overflow-hidden shadow-md flex flex-col h-full'>
    {/* 내부 영역을 항상 flex-col + flex-grow */}
    <div className='p-4 flex flex-col flex-grow'>
      {/* 헤더는 고정 */}
      <div className='flex justify-between items-center mb-4'>
        <h3 className='text-xl font-bold'>{project.title}</h3>
        {project.githubUrl && (
          <a href={project.githubUrl} target='_blank' rel='noopener noreferrer'>
            <FaGithub className='text-3xl text-black-600 hover:text-gray-600 transition-colors duration-300' />
          </a>
        )}
      </div>

      {/* 내용은 flex-grow로 남은 공간 채움 */}
      <div className='flex flex-col flex-grow'>
        {project.details.map((detail, detailIndex) => (
          <ToyProjectDetail key={detailIndex} detail={detail} />
        ))}
      </div>
    </div>
  </div>
);


const ToyProject = ({ ToyProjectInfo }) => {
  return (
    <div className='p-6 bg-white rounded-lg shadow-md'>
      <h2 className='text-3xl font-extrabold mb-6 text-gray-800'>Toy Project</h2>
      <p className='text-gray-600 mb-6'>설계부터 구현, 개선까지 직접 해낸 경험과 결과를 담았습니다.</p>
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
