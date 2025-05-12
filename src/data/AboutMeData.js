import { FaEnvelope, FaPhone, FaMap } from 'react-icons/fa';

export const SkillsInfo = [
    {
        section: '🛠 Backend',
        items: [
            <>
            Python(FastAPI), Spring Boot(Java), PHP(Codeigniter) 기반<br />
            <span className='pl-4 block'>웹 서비스 및 아키텍처 고도화</span>
            </>,
            'PoC부터 확장까지 안정적이고 확장성 높은 시스템 설계 및 최적화',
        ],
    },
    {
        section: '🎨 Frontend',
        items: [
            'Vanilla JS, HTML/CSS 기반 빠른 프로토타이핑 및 UI/UX 개선',
            'MVP 구축 속도 향상 및 사용자 중심의 동적 기능 개발',
        ],
    },
    {
        section: '💾 Database',
        items: [
            'MySQL, MariaDB, MS-SQL 성능 최적화 및 슬로우 쿼리 개선',
            '스키마 리팩터링을 통한 데이터베이스 안정성 확보',
        ],
    },
    {
        section: '⚙ DevOps & Infra',
        items: [
            'Docker, Jenkins, GitHub Actions 기반 배포 자동화',
            'NCP, AWS(EC2) 환경에서 안정적인 서비스 운영 및 가용성 확보',
        ],
    },
    {
        section: '📈 VCS & Collaboration',
        items: [
            'Git, SVN 기반 협업 경험과 소스 관리 프로세스 최적화',
        ],
    },
];



export const ContactInfo = [
    {
        Icon: FaEnvelope,
        text: 'ekgus419@gmail.com',
        color: 'text-amber-500',
    },
    {
        Icon: FaPhone,
        text: '010-3129-9164',
        color: 'text-red-500',
    },
    {
        Icon: FaMap,
        text: 'Bucheon-si, Gyeonggi-do, Republic of Korea',
        color: 'text-green-500',
    }
];


