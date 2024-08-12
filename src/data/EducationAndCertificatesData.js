import { FaCode, FaDatabase, FaGraduationCap, FaInfo, FaLinux } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";

export const education = [
    {
        icon: <FaGraduationCap className='text-green-600 mr-2' />,
        title: 'Korea National Open University',
        description: '컴퓨터 과학과 졸업',
        date: '2019.09 - 2022.02'
    },
    {
        icon: <FaCode className='text-orange-600 mr-2' />,
        title: 'NCS Java Hybrid App Development',
        description: '직업 능력 개발 훈련 과정 수료',
        date: '2016.06 - 2016.12'
    }
];

export const certificates = [
    {
        icon: <IoMdCheckmarkCircle className='text-green-600 mr-2' />,
        title: '정보처리기사',
        date: '2022.11'
    },
    {
        icon: <FaDatabase className='text-blue-600 mr-2' />,
        title: 'SQLD',
        date: '2021.04'
    },
    {
        icon: <FaLinux className='text-gray-600 mr-2' />,
        title: '리눅스 마스터 2급',
        date: '2019.07'
    },
    {
        icon: <FaInfo className='text-gray-600 mr-2' />,
        title: '정보처리산업기사',
        date: '2018.05'
    }
];