# my-portfolio
이 포트폴리오 서비스는 React를 기반으로 깔끔하고 모던한 디자인을 목표로 하였습니다. 
개인 프로젝트와 작업물들을 소개하며, 저의 기술 스택과 경험을 보여주는 서비스입니다. 
컴포넌트는 UI와 구조를 담당하며, View에서는 데이터와 상태를 관리하도록 설계되었습니다.

## 개발 환경
* Visual Studio Code
* Git

## 완성작
[https://dh0419-portfolio.netlify.app](https://dh0419-portfolio.netlify.app/)

해당 프로젝트는 정적 사이트를 쉽게 배포할 수 있는 `Netlify`를 사용하기로 했습니다. 
`Netlify`는 `private` 저장소를 지원하며, `Git` 반영과 동시에 배포할 수 있어 유용했습니다.

## 프로젝트 구조
- **`.gitignore`**
  - Git에서 추적하지 않을 파일 목록을 정의합니다.
- **`README.md`**
  - 프로젝트에 대한 설명과 문서를 포함합니다.
- **`package-lock.json`**
  - 프로젝트의 의존성 버전을 고정합니다.
- **`package.json`**
  - 프로젝트의 메타데이터 및 의존성을 정의합니다.
- **`public/`** : 정적 파일을 포함하는 디렉토리
  - **`favicon.ico`**
    - 사이트의 파비콘 파일입니다. 리액트의 기본 파비콘 파일을 사용하였습니다.
  - **`index.html`** : 애플리케이션의 메인 HTML 파일입니다.
- **`src/`** : 소스 코드가 위치하는 디렉토리
  - **`App.css`** : 애플리케이션의 스타일시트입니다.
  - **`App.jsx`** : 주요 React 컴포넌트입니다.
  - **`assets/`** : 정적 자산을 포함하는 디렉토리
    - **`images/`** : 이미지 파일 디렉토리
      - **`profile.jpg`** : 프로필 이미지 파일입니다.
  - **`components/`** : React 컴포넌트를 포함하는 디렉토리
    - **`AboutMe.jsx`** : 'About Me' 컴포넌트입니다.
    - **`Career.jsx`** : 'Career' 컴포넌트입니다.
    - **`EducationAndCertificates.jsx`** : 교육 및 인증 컴포넌트입니다.
    - **`Sidebar.jsx`** : 사이드바 컴포넌트입니다.
    - **`ToyProject.jsx`** : 장난감 프로젝트 컴포넌트입니다.
    - **`aboutme/`** : 'About Me' 관련 서브컴포넌트
      - **`Contact.jsx`** : 연락처 컴포넌트입니다.
      - **`Introduction.jsx`** : 소개 컴포넌트입니다.
      - **`SkillItem.jsx`** : 기술 항목 컴포넌트입니다.
      - **`Tooltip.jsx`** : 툴팁 컴포넌트입니다.
  - **`data/`** : 데이터 파일 디렉토리
    - **`AboutMeData.js`** : About Me 데이터 파일입니다.
    - **`CareersData.js`** : 경력 데이터 파일입니다.
    - **`EducationAndCertificatesData.js`** : 교육 및 자격증 데이터 파일입니다.
    - **`ToyProjectData.js`** : 장난감 프로젝트 데이터 파일입니다.
  - **`index.css`** : 전역 스타일시트입니다.
  - **`index.js`** : 애플리케이션의 진입점 파일입니다.
  - **`views/`** : 뷰 컴포넌트를 포함하는 디렉토리
    - **`AboutMeView.jsx`** : About Me 뷰 컴포넌트입니다.
    - **`CareerView.jsx`** : 'Career' 뷰 컴포넌트입니다.
    - **`EducationAndCertificatesView.jsx`** : 교육 및 자격증 뷰 컴포넌트입니다.
    - **`ToyProjectView.jsx`** : 장난감 프로젝트 뷰 컴포넌트입니다.
- **`tailwind.config.js`** : Tailwind CSS 설정 파일입니다. `src` 폴더 아래에 `js,jsx,ts,tsx` 파일에 Tailwind CSS를 적용시킵니다.
