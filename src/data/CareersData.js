import React, { useState } from 'react';
import { FaStar, FaPhone, FaCheckCircle, FaCode, FaCog, FaPalette, FaLock, FaVolumeUp, FaEnvelope, FaServer, FaGlobe, FaTools, FaWrench, FaSpider, FaRocket } from 'react-icons/fa';

export const CareerInfo = [
  {
    title: '트리플하이엠㈜',
    period: '2024년 12월 ~ 재직중',
    details: [
      {
        items: [
          {
            subtitle: '광고 플랫폼 크롤러 개발 및 최적화',
            description: '광고 플랫폼 데이터 자동 수집 및 구조 최적화를 통해 크롤링 효율성과 데이터 품질을 높임. 수집 파이프라인 전환을 주도하여 비즈니스 데이터 분석 시간 단축.',
            icon: <FaSpider className='text-red-500' />
          },
          {
            subtitle: 'FastAPI 기반 사내 시스템 신규 구축',
            description: '기존 레거시를 대체하는 FastAPI 기반 사내 시스템을 설계하고 아키텍처를 주도. API 중심 구조와 DI/AOP 적용으로 확장성과 안정성을 확보.',
            icon: <FaRocket className='text-green-500' />
          },
          {
            subtitle: '사내 기술 세미나 기획 및 운영',
            description: '사내 기술 세미나를 직접 기획/운영하여 주니어 개발자 육성과 기술 공유 문화를 확산. Pythonic 스타일, ORM, React 구조 설계 등 실무 중심 기술 코칭.',
            icon: <FaStar className='text-yellow-500' />
          },
        ]
      }
    ],
  },
  {
    title: '펜타시큐리티㈜',
    period: '2024년 1월 - 2024년 3월',
    details: [
      {
        items: [
          {
            subtitle: '계약 시스템 재설계 및 오류 개선',
            description: '복잡한 계약 흐름을 재설계하고 재연장 기능을 안정적으로 개선하고 오류율 90% 감소. 시스템 안정성과 사용자 효율성 동시 확보.',
            icon: <FaWrench className='text-blue-500' />
          },
        ]
      }
    ],
  },
  {
    title: '커넥트웨이브㈜',
    period: '2019년 12월 - 2024년 1월',
    details: [
      {
        items: [
          {
            subtitle: '사용자 경험 중심 서비스 리디자인',
            description: '가입, 세금계산서, 색상 등록 등 핵심 기능을 사용자 중심으로 리디자인하여 전환율 상승 및 운영 효율성 향상.',
            icon: <FaStar className='text-yellow-500' />
          },
          {
            subtitle: '대량 SMS 발송 시스템 구축',
            description: '대량 SMS 발송 시스템 구축으로 발송 오류율 감소 및 매출 20% 증가. 백엔드 안정성 강화 및 UI 개선으로 관리 효율화.',
            icon: <FaPhone className='text-green-500' />
          },
          {
            subtitle: '데이터 추출 자동화',
            description: '크론 작업을 통한 데이터 자동 추출 및 엑셀 다운로드 시스템 구축. 필터링/시각화 UI를 통해 사용자 셀프 서비스화.',
            icon: <FaPalette className='text-blue-500' />
          },
          {
            subtitle: '매출 관리 시스템 구축',
            description: '매출 상점 관리 시스템 기획 및 구축으로 운영 효율성과 마케팅 기회 확대.',
            icon: <FaCheckCircle className='text-red-500' />
          },
          {
            subtitle: '주문 관리 시스템 최적화',
            description: '슬로우 쿼리 최적화, 트래픽 분산, 알림 기능 강화 등 주문 관리 업무를 성능 중심으로 개선.',
            icon: <FaCog className='text-purple-500' />
          },
          {
            subtitle: '쇼핑몰 테마 커스터마이징',
            description: '쇼핑몰 UI/UX 개선을 통해 사용자 경험 향상 및 신규 테마 적용.',
            icon: <FaCode className='text-teal-500' />
          }
        ]
      }
    ],
  },
  {
    title: '㈜스마일서브',
    period: '2018년 12월 - 2019년 5월',
    details: [
      {
        items: [
          {
            subtitle: '서버 인프라 구축 및 최적화',
            description: 'CentOS, Ubuntu 기반 서버 인프라 구축 및 운영 자동화. 초기 시스템 구성 및 보안 최적화로 운영 안정성 확보.',
            icon: <FaServer className='text-blue-500' />
          },
          {
            subtitle: '웹 서버 구축 및 성능 개선',
            description: 'Apache, Nginx 웹 서버 구축 및 성능 최적화. 시스템 모니터링 및 장애 대응 체계화.',
            icon: <FaGlobe className='text-orange-500' />
          },
          {
            subtitle: '서버 유지보수 및 모니터링',
            description: '서버 운영/모니터링 고도화로 장애 조기 대응 및 시스템 안정성 향상.',
            icon: <FaTools className='text-gray-600' />
          }
        ]
      }
    ],
  },
  {
    title: '솔루텍㈜',
    period: '2016년 12월 - 2018년 3월',
    details: [
      {
        items: [
          {
            subtitle: 'PHP → Java 아키텍처 전환 발표',
            description: '사내 세미나에서 PHP to Java 포팅 아키텍처 및 ORM 활용 발표. 보안 강화 및 MVC 구조 전환 사례 공유.',
            icon: <FaCode className='text-blue-500' />
          },
          {
            subtitle: '세브란스 HAPPY CALL',
            description: '부재중 관리 자동화 솔루션 개발로 상담 대응률 향상 및 프로세스 개선.',
            icon: <FaVolumeUp className='text-green-500' />
          },
          {
            subtitle: '공주시청 스마트 마을 방송',
            description: '공공 메시징 플랫폼 구축으로 사용자 접근성 향상 및 UI 개선.',
            icon: <FaEnvelope className='text-purple-500' />
          },
          {
            subtitle: '사내 음성 솔루션 유지보수',
            description: '녹취, 컬러링, 팩스 솔루션 유지보수 및 안정성 강화.',
            icon: <FaCog className='text-teal-500' />
          }
        ]
      }
    ],
  },
];
