## 리액트 소개

<br/>

- ### 리액트란
  - 자바스크립트 라이브러리
  - UI 라이브러리 (화면을 만들기 위한 기능을 모아둔 곳)
    - `NGULARJS`, `VUE.js` , `React`등
    - framework(`NGULARJS`, `VUE.js`) 와 library(`React`)의 차이
      - 흐름에 대한 제어를 할 수 있는가 없는가
    - **SPA**를 쉽고 빠르게 만들어주는 도구

<br/>

- ### 리액트 장점과 단점
  - 빠르다(Virtual DOM 사용)
    - **DOM(Document Object Model)** : 웹페이지를 정의하는 객체(웹 사이트에 정보를 가지고 있는 객체)

    <img src="../imagefile/2.png">

    - Virtual DOM은 업데이트해야할 최소한의 것들만 탐색하여 업데이트 해서 빠르다
  - Component 기반
  - 재사용성 -> 유지보수가 용이
  - React Native(모바일환경 UI Framework)
    - 모바일 앱도 개발 가능
    - 안드로이드, IOS 어플을 동시에 만들 수 있다

<br/>

- ### 1)개발환경 직접 구축
  - **03)Intro**

<br/>

- ### 2)Create-React-App(CRA) 
  - 프로젝트 생성도구(ex : 스프링 이니셜라이져)
  - terminal 상에 `npx create-react-app my-app`입력(my-app은 프로젝트 이름)
  - 주요 명령어 : 4개의 npm 스크립트 명령어
  - 기본설정에서는 아무런 폴리필(polyfill)도 포함되지 않는다 
    - 폴리필: 웹 개발에서 기능을 지원하지 않는 웹 브라우저 상의 기능을 구현하는 코드
    - package설치와 import해서 사용