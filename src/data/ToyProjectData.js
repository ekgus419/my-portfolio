import { FaGithub, FaJava, FaReact, FaDocker, FaCogs, FaInfo } from 'react-icons/fa';
import { MdQueryBuilder } from 'react-icons/md';
import { SiSpringboot, SiGradle, SiPostgresql, SiMariadb, SiJunit5, SiThymeleaf, SiPostman } from 'react-icons/si';

export const ToyProjectInfo = [
    {
        title: 'blog-api',
        details: [
            {
                title: '나만의 블로그 만들기 서비스',
                items: [
                    {
                        subtitle: '프로젝트 소개',
                        description: '이 블로그 프로젝트는 사용자가 게시물을 등록, 수정, 삭제하고, 좋아요 및 댓글을 남길 수 있는 기능을 제공합니다. 또한, 마이페이지에서 닉네임과 프로필을 수정할 수 있습니다. 디자인 패턴을 고려한 결과, 팩토리 패턴을 적용하여 객체 생성 로직을 중앙에서 관리하고 코드의 유연성과 유지 보수성을 높였습니다.'
                    },
                    {
                        subtitle: '기술 스택',
                        description: (
                            <div className='flex space-x-4 mt-2'>
                                <FaJava className='text-3xl text-red-600' title='JDK 17' />
                                <SiSpringboot className='text-3xl text-green-600' title='Spring Boot 3.3.2' />
                                <SiGradle className='text-3xl text-blue-600' title='Gradle' />
                                <MdQueryBuilder className='text-3xl text-purple-600' title='QueryDsl' />
                                <SiMariadb className='text-3xl text-blue-600' title='MariaDB' />
                                <SiPostman className='text-3xl text-orange-600' title='Postman' />
                            </div>
                        )
                    },
                ]
            }
        ],
        githubUrl: 'https://github.com/ekgus419/blog-api'
    },
    {
        title: 'cafe-recommendation',
        details: [
            {
                title: '카카오 주소 검색 API를 활용한 카페 찾기 서비스',
                items: [
                    {
                        subtitle: '프로젝트 소개',
                        description: '외부 API(카카오 주소 검색 API)를 활용하여 혼자 개발하고 마무리되는 프로젝트가 아닌, 실제 서비스 가능한 수준의 프로젝트를 경험하였습니다. 추천된 카페의 길 안내는 카카오 지도 및 로드뷰 바로가기 URL로 제공되며, 도커를 사용하여 서버를 관리하였습니다.'
                    },
                    {
                        subtitle: '기술 스택',
                        description: (
                            <div className='flex space-x-4 mt-2'>
                                <FaJava className='text-3xl text-red-600' title='JDK 17' />
                                <SiSpringboot className='text-3xl text-green-600' title='Spring Boot 3.3.2' />
                                <SiGradle className='text-3xl text-blue-600' title='Gradle' />
                                <FaReact className='text-3xl text-blue-600' title='React' />
                                <FaCogs className='text-3xl text-gray-600' title='Lombok' />
                                <FaDocker className='text-3xl text-blue-600' title='Docker' />
                                <SiPostgresql className='text-3xl text-blue-600' title='PostgreSql' />
                            </div>
                        )
                    },
                ]
            }
        ],
        githubUrl: 'https://github.com/ekgus419/Cafe-Recommendation'
    },
    {
        title: 'web-project-board',
        details: [
            {
                title: '게시판 만들기 프로젝트',
                items: [
                    {
                        subtitle: '프로젝트 소개',
                        description: '가장 기본적이고 보편적인 게시판 기능을 둘러볼 수 있는 서비스입니다. 어드민 프로젝트의 개발과 기능 사용은 이 프로젝트와 연관이 있습니다. 패스트캠퍼스의 강의를 수강하며 스프링 부트와 관련 기술들, 자바 17 기능들, 개발 도구들을 경험하였습니다.'
                    },
                    {
                        subtitle: '기술 스택',
                        description: (
                            <div className='flex space-x-4 mt-2'>
                                <FaJava className='text-3xl text-red-600' title='JDK 17' />
                                <SiSpringboot className='text-3xl text-green-600' title='Spring Boot 3.3.2' />
                                <SiGradle className='text-3xl text-blue-600' title='Gradle' />
                                <SiThymeleaf className='text-3xl text-blue-600' title='Thymeleaf' />
                                <FaCogs className='text-3xl text-gray-600' title='Lombok' />
                                <SiMariadb className='text-3xl text-blue-600' title='MariaDB' />
                                <SiJunit5 className='text-3xl text-gray-600' title='Junit' />
                            </div>
                        )
                    },
                ]
            }
        ],
        githubUrl: 'https://github.com/ekgus419/web-project-board'
    },
    {
        title: 'web-project-board-admin',
        details: [
            {
                title: '게시판 만들기 프로젝트 어드민편',
                items: [
                    {
                        subtitle: '프로젝트 소개',
                        description: '기존 개발이 되었던 게시판 만들기 프로젝트에 어드민 기능을 추가한 서비스입니다. 기존 게시판 프로젝트를 모듈로 사용하여 구현하였습니다. 게시판 프로젝트의 개발과 기능 사용은 이 프로젝트와 연관이 있습니다. 패스트캠퍼스의 강의를 수강하며 스프링 부트와 관련 기술들, 자바 17 기능들, 개발 도구들을 경험하였습니다.'
                    },
                    {
                        subtitle: '기술 스택',
                        description: (
                            <div className='flex space-x-4 mt-2'>
                                <FaJava className='text-3xl text-red-600' title='JDK 17' />
                                <SiSpringboot className='text-3xl text-green-600' title='Spring Boot 2.7.0' />
                                <SiGradle className='text-3xl text-blue-600' title='Gradle' />
                                <SiThymeleaf className='text-3xl text-blue-600' title='Thymeleaf' />
                                <FaCogs className='text-3xl text-gray-600' title='Lombok' />
                                <SiMariadb className='text-3xl text-blue-600' title='MariaDB' />
                                <SiJunit5 className='text-3xl text-gray-600' title='Junit' />
                            </div>
                        )
                    },
                ]
            }
        ],
        githubUrl: 'https://github.com/ekgus419/web-project-board-admin'
    },
    {
        title: 'simple-shopping-mall',
        details: [
            {
                title: 'CRUD 및 로그인 기능 구현 프로젝트',
                items: [
                    {
                        subtitle: '프로젝트 소개',
                        description: '스프링부트와 리액트를 사용하여 CRUD 및 로그인 기능을 구현한 프로젝트입니다. 이 프로젝트는 기본적인 기능을 통해 기술을 습득하고 숙련도를 높이기 위해 제작되었으며, 도커를 활용하여 서버를 관리하였습니다.'
                    },
                    {
                        subtitle: '기술 스택',
                        description: (
                            <div className='flex space-x-4 mt-2'>
                                <FaJava className='text-3xl text-red-600' title='JDK 17' />
                                <SiSpringboot className='text-3xl text-green-600' title='Spring Boot 3.3.2' />
                                <SiGradle className='text-3xl text-blue-600' title='Gradle' />
                                <FaDocker className='text-3xl text-blue-600' title='Docker' />
                                <FaReact className='text-3xl text-blue-600' title='React' />
                                <FaCogs className='text-3xl text-gray-600' title='Lombok' />
                                <SiMariadb className='text-3xl text-blue-600' title='MariaDB' />
                            </div>
                        )
                    },
                ]
            }
        ],
        githubUrl: 'https://github.com/ekgus419/simple-shopping-mall'
    },

];