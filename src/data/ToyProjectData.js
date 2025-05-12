import { FaGithub, FaJava, FaReact, FaDocker, FaCogs, FaInfo, FaHtml5, FaCss3, FaPython, FaServer, FaDatabase, FaBox } from 'react-icons/fa';
import { MdQueryBuilder } from 'react-icons/md';
import { SiSpringboot, SiGradle, SiPostgresql, SiMariadb, SiJunit5, SiThymeleaf, SiPostman, SiFastapi, SiPython } from 'react-icons/si';

export const ToyProjectInfo = [
    {
        title: 'Fastapi-orgtrace',
        details: [
            {
            items: [
                {
                description: 'Spring Boot 아키텍처 철학을 FastAPI에 이식하여 DI, 트랜잭션, 예외 처리, 로깅을 체계화하고 복잡한 조직/직원 관리 기능을 설계.',
                subItems: [
                    'DI 자동화, 계층형 로깅, 구조화 예외 처리 등 실무 서비스 수준 아키텍처 FastAPI로 재현',
                ]
                },
                {
                description: '도메인 추가 시 코드 변경 최소화, trace_id 기반 요청 단위 로그 추적.',
                subItems: [
                    '복잡한 도메인 확장 시 혼잡도 감소, DI/로깅/트랜잭션 프레임워크 수준 일관 관리',
                ]
                },
                {
                description: (
                    <div className='flex flex-wrap gap-4 mt-4'>
                    <FaPython className='text-3xl text-blue-600' title='Python 3.10' />
                    <SiFastapi className='text-3xl text-sky-600' title='FastAPI' />
                    <FaServer className='text-3xl text-gray-600' title='Uvicorn' />
                    <FaDatabase className='text-3xl text-purple-600' title='SQLAlchemy' />
                    <FaBox className='text-3xl text-blue-600' title='Pydantic' />
                    <SiPython className='text-3xl text-orange-600' title='Alembic' />
                    </div>
                )
                }
            ]
            }
        ],
        githubUrl: 'https://github.com/ekgus419/fastapi-orgtrace'
    },
    {
        title: 'My Portfolio',
        details: [
            {
                items: [
                    {
                        description: '개인 프로젝트, 업무 경험, 기술 스택을 한눈에 명확하게 표현하기 위해 React + Tailwind 기반으로 개발. 자동화된 배포 프로세스를 GitHub Actions + Netlify로 구성하여 운영 효율성을 확보.',
                        subItems: [
                            'GitHub Actions + Netlify 연동으로 커밋 기반 실시간 배포',
                            '사용자 관점에서 UX 최적화된 포트폴리오 제공'
                        ]
                    },
                    {
                        description: (
                            <div className='flex flex-wrap gap-4 mt-4'>
                                <FaReact className='text-3xl text-red-600' title='React' />
                                <FaHtml5 className='text-3xl text-green-600' title='HTML' />
                                <FaCss3 className='text-3xl text-blue-600' title='CSS' />
                            </div>
                        )
                    }
                ]
            }
        ],
        githubUrl: 'https://github.com/ekgus419/my-portfolio'
    },
    {
        title: 'Blog API',
        details: [
            {
                items: [
                    {
                        description: '게시물, 댓글, 좋아요, 마이페이지까지 포함한 기술 블로그 백엔드 API 구축. 팩토리 메소드 패턴으로 객체 생성 로직 표준화 및 JWT 기반 인증 처리.',
                        subItems: [
                            'QueryDSL 기반 복합 검색 최적화(1.2s → 200ms)',
                            'JWT 인증 체인 우선 적용으로 보안 강화'
                        ]
                    },
                    {
                        description: (
                            <div className='flex flex-wrap gap-4 mt-4'>
                                <FaJava className='text-3xl text-red-600' title='JDK 17' />
                                <SiSpringboot className='text-3xl text-green-600' title='Spring Boot 3.3.2' />
                                <SiGradle className='text-3xl text-blue-600' title='Gradle' />
                                <MdQueryBuilder className='text-3xl text-purple-600' title='QueryDSL' />
                                <SiMariadb className='text-3xl text-blue-600' title='MariaDB' />
                                <SiPostman className='text-3xl text-orange-600' title='Postman' />
                            </div>
                        )
                    }
                ]
            }
        ],
        githubUrl: 'https://github.com/ekgus419/blog-api'
    },
    {
        title: 'Cafe Recommendation',
        details: [
            {
                items: [
                    {
                        description: 'Kakao 주소 검색 API를 활용하여 위치 기반 추천 시스템 직접 설계/구현. Haversine 공식 적용 거리 계산, Spring Retry 기반 API 재시도 로직, base62 Shorten URL 제공까지 실 서비스 수준으로 구축.',
                        subItems: [
                            '거리 기반 추천 알고리즘 정밀화',
                            '외부 API 실패 시 재시도 처리로 안정성 확보',
                            'base62 기반 Short URL 제공으로 사용자 편의성 강화'
                        ]
                    },
                    {
                        description: (
                            <div className='flex flex-wrap gap-4 mt-4'>
                                <FaJava className='text-3xl text-red-600' title='JDK 17' />
                                <SiSpringboot className='text-3xl text-green-600' title='Spring Boot 3.3.2' />
                                <SiGradle className='text-3xl text-blue-600' title='Gradle' />
                                <FaReact className='text-3xl text-blue-600' title='React' />
                                <FaDocker className='text-3xl text-blue-600' title='Docker' />
                                <SiMariadb className='text-3xl text-blue-600' title='MariaDB' />
                            </div>
                        )
                    }
                ]
            }
        ],
        githubUrl: 'https://github.com/ekgus419/Cafe-Recommendation'
    },
    {
        title: 'Web Project Board',
        details: [
            {
                items: [
                    {
                        description: '가장 보편적인 게시판 CRUD 기능을 구현한 웹 서비스. REST API와 View 계층을 명확히 분리하고, Spring Security 기반 인증, QueryDSL 검색 기능을 통해 검색, 필터링 기능을 고도화.',
                        subItems: [
                            '게시판 CRUD, 인증, 검색, 필터 기능 모듈화',
                            'REST API와 UI View 계층 명확 분리로 어드민 확장 시 유연성 확보'
                        ]
                    },
                    {
                        description: (
                            <div className='flex flex-wrap gap-4 mt-4'>
                                <FaJava className='text-3xl text-red-600' title='JDK 17' />
                                <SiSpringboot className='text-3xl text-green-600' title='Spring Boot 2.7.0' />
                                <SiGradle className='text-3xl text-blue-600' title='Gradle' />
                                <SiThymeleaf className='text-3xl text-blue-600' title='Thymeleaf' />
                                <FaCogs className='text-3xl text-gray-600' title='Lombok' />
                                <SiMariadb className='text-3xl text-blue-600' title='MariaDB' />
                                <SiJunit5 className='text-3xl text-gray-600' title='Junit' />
                            </div>
                        )
                    }
                ]
            }
        ],
        githubUrl: 'https://github.com/ekgus419/web-project-board'
    },
    {
        title: 'Web Project Board Admin',
        details: [
            {
                items: [
                    {
                        description: '기존 게시판 프로젝트 기반으로 어드민 기능 모듈화 추가 개발. 관리자 전용 URI 분리, 어드민 권한 인증 처리, 댓글/게시글 관리 기능을 REST API 기반 제공.',
                        subItems: [
                            '기존 게시판과 어드민 간 공통 도메인 모듈화 완료',
                            'SecurityConfig 분리로 관리자 전용 API 체계 구축'
                        ]
                    },
                    {
                        description: (
                            <div className='flex flex-wrap gap-4 mt-4'>
                                <FaJava className='text-3xl text-red-600' title='JDK 17' />
                                <SiSpringboot className='text-3xl text-green-600' title='Spring Boot 2.7.0' />
                                <SiGradle className='text-3xl text-blue-600' title='Gradle' />
                                <SiThymeleaf className='text-3xl text-blue-600' title='Thymeleaf' />
                                <FaCogs className='text-3xl text-gray-600' title='Lombok' />
                                <SiMariadb className='text-3xl text-blue-600' title='MariaDB' />
                                <SiJunit5 className='text-3xl text-gray-600' title='Junit' />
                            </div>
                        )
                    }
                ]
            }
        ],
        githubUrl: 'https://github.com/ekgus419/web-project-board-admin'
    },
    {
        title: 'Simple Shopping Mall',
        details: [
            {
                items: [
                    {
                        description: 'Spring Boot와 React를 활용하여 CRUD 및 로그인 기능을 구현한 풀스택 프로젝트. Docker를 이용해 배포 자동화 및 컨테이너화 진행. 인증, 권한 관리까지 포함하여 실무 수준의 API 및 UI 통합 경험.',
                        subItems: [
                            'Docker 기반으로 CI/CD 자동화 경험 확보',
                            '클라이언트-서버 연계와 인증 흐름을 명확히 이해하고 구현'
                        ]
                    },
                    {
                        description: (
                            <div className='flex flex-wrap gap-4 mt-4'>
                                <FaJava className='text-3xl text-red-600' title='JDK 17' />
                                <SiSpringboot className='text-3xl text-green-600' title='Spring Boot 3.3.2' />
                                <SiGradle className='text-3xl text-blue-600' title='Gradle' />
                                <FaDocker className='text-3xl text-blue-600' title='Docker' />
                                <FaReact className='text-3xl text-blue-600' title='React' />
                                <FaCogs className='text-3xl text-gray-600' title='Lombok' />
                                <SiMariadb className='text-3xl text-blue-600' title='MariaDB' />
                            </div>
                        )
                    }
                ]
            }
        ],
        githubUrl: 'https://github.com/ekgus419/simple-shopping-mall'
    }
    
];
