import React, { useState } from 'react';
import { FaStar, FaPhone, FaCheckCircle, FaCode, FaCog, FaPalette, FaLock, FaVolumeUp, FaEnvelope, FaServer, FaGlobe, FaTools, FaWrench } from 'react-icons/fa';

export const CareerInfo = [
  {
    title: '펜타시큐리티',
    period: '2024년 1월 - 2024년 3월',
    details: [
      {
        items: [
          {
            subtitle: '계약 시스템 개선',
            description: '사내 솔루션의 계약 시스템 업무를 담당하였습니다. 계약의 재체결시 발생하는 버그를 수정하고, 재연장 계약 기능을 도입하여 시스템의 안정성을 높였습니다.',
            icon: <FaWrench className='text-blue-500' />
          },
        ]
      }
    ],
  },
  {
    title: '커넥트웨이브',
    period: '2019년 2월 - 2024년 1월',
    details: [
      {
        items: [
          {
            subtitle: '사용자 편의성 강화를 위한 기능 개선',
            description: '가입 프로세스 최적화, 세금계산서 개선, 색상 등록 서비스 재구성 등의 작업을 통해 사용자 경험을 향상시켰습니다.',
            icon: <FaStar className='text-yellow-500' />
          },
          {
            subtitle: '대량 SMS 발송 시스템 구축',
            description: '안정적인 대량 SMS 발송 시스템을 구축하여 매출이 약 20% 증가하였습니다.',
            icon: <FaPhone className='text-green-500' />
          },
          {
            subtitle: '데이터 추출 자동화',
            description: '크론 작업을 사용해 주기적으로 데이터를 자동 수집하고, 사용자가 데이터를 확인하거나 엑셀로 다운로드할 수 있는 기능을 개발했습니다. 또한, 필요한 설정과 카테고리별 데이터를 쉽게 추출할 수 있도록 UI를 설계하고 구현했습니다.',
            icon: <FaPalette className='text-blue-500' />
          },
          {
            subtitle: '매출 관리 시스템 구축',
            description: '매출 상위 상점 관리 및 데이터 관리 페이지 제공을 통해 운영 효율성과 마케팅 기회를 창출하였습니다.',
            icon: <FaCheckCircle className='text-red-500' />
          },
          {
            subtitle: '주문 관리 업무 강화',
            description: '주문 알림 기능 개발, 데이터베이스 트래픽 분산, 슬로우 쿼리 분석 및 최적화 등의 작업을 통해 주문 관리 시스템을 개선하였습니다.',
            icon: <FaCog className='text-purple-500' />
          },
          {
            subtitle: '쇼핑몰 테마 커스터마이징',
            description: 'UI/UX 개선을 위해 쇼핑몰 테마를 커스터마이징하여 사용자 경험을 향상시켰습니다.',
            icon: <FaCode className='text-teal-500' />
          }
        ]
      }
    ],
  },
  {
    title: '(주)스마일서브',
    period: '2018년 12월 - 2019년 5월',
    details: [
      {
        items: [
          {
            subtitle: '서버 운영 및 구축',
            description: '서버 입고 시 CentOS, Ubuntu 등의 운영 체제를 설치하고, 고객 요구에 맞는 서버 환경을 구축했습니다. 주요 작업으로는 OS 설치, 패치 적용을 진행하였습니다.',
            icon: <FaServer className='text-blue-500' />
          },
          {
            subtitle: '웹 서버 구축 및 운영',
            description: '고객 요구에 맞춰 Apache, Nginx 등의 웹 서버를 설치하고 구성했습니다. 웹 서버 성능 모니터링 및 최적화 작업을 통해 서비스의 안정성을 확보했습니다.',
            icon: <FaGlobe className='text-orange-500' />
          },
          {
            subtitle: '서버 환경 관리 및 유지보수',
            description: '서버의 일상적인 유지보수와 모니터링을 통해 문제를 조기에 발견하고 대응했습니다. 백업 관리, 시스템 로그 분석, 성능 튜닝 작업을 수행했습니다.',
            icon: <FaTools className='text-gray-600' />
          }
        ]
      }
    ],
  },
  {
    title: '(주)솔루텍',
    period: '2016년 12월 - 2018년 3월',
    details: [
      {
        items: [
          {
            subtitle: 'PHP에서 Java로의 포팅 세미나 및 발표',
            description: 'PHP에서 Java로의 포팅 과정을 세미나를 통해 발표하고, 데이터베이스 연결 및 ORM 라이브러리 활용, 웹 애플리케이션 아키텍처 변경을 다루었습니다.',
            icon: <FaCode className='text-blue-500' />
          },

          {
            subtitle: '세브란스 HAPPY CALL 서비스',
            description: '상담원이 부재중 내역을 확인하여 상담할 수 있도록 관리할 수 있는 솔루션을 개발했습니다.',
            icon: <FaVolumeUp className='text-green-500' />
          },
          {
            subtitle: '공주 시청 스마트 마을 방송 알리미',
            description: '웹 사이트 상에서 음성 및 문자 메시지를 열람 및 보낼 수 있는 메시징 서비스를 개발했습니다.',
            icon: <FaEnvelope className='text-purple-500' />
          },
          {
            subtitle: '녹취, 컬러링, 팩스 사내 솔루션 유지보수',
            description: '사내 솔루션의 유지보수 작업을 진행하며, 녹취, 컬러링, 팩스 관련 기능의 안정성을 확보했습니다.',
            icon: <FaCog className='text-teal-500' />
          }
        ]
      }
    ],
  },
];