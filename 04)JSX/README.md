## JSX

<br/>

- ### JSX란
  - JavaScript = **JS**
  - Syntax extension JavaScript(자바스크립트의 확장문법) = **JSX**
    - XML/HTML + JavaScript = **JSX**
    - `const element = <h1>Hello, world</h1>;`

<br/>

- ### JSX의 역할
  - JSX는 내부적으로 XML/HTML코드를 JS코드로 변화하는 과정을 거친다
  - `createElement 함수`(=리액트 요소를 반환)
     ``` javascript
      React.createElement(
        type, //리액트 컴포넌트 or div(HTML tag) 등
        [props],  //리액트 컴포넌트 속성
        [...children] //현재 element가 포함하는 자식 element
      )
        //예시
        /* <div>
              <h1>hello</h1>
              <h2>world</h2>
          </div>

          createElement(
            'div',
            null,
            createElement('h1', null, 'hello'),
            createElement('h2', null, 'world'),
          )

        */
    ```
  - 대부분의 개발자는 `createElement`를 직접 작성하지 않는다 일반적으로 바벨(babel)의 도움을 받아서 JSX문법을 사용한다 <br>`createElement`보다는 JSX문법으로 작성하는 리액트 코드가 훨씬 가독성이 좋기 때문에
  - **`createElemnt`를 JSX코드로 대체**
  - JSX를 사용한 코드
    ``` javascript
      class Hello extends React.Component { //Hello라는 리액트 컴포넌트
        render() {
          return <div>Hello {this.props.toWhat}</div>;
        }
      }

      ReactDOM.render(  //리액트돔의 랜더함수를 이용하여 화면에 랜더링
        <Hello toWhat="World" />,
        document.getElementById('root')
      )
    ```
  - JSX를 사용하지 않은 코드 (순수 javascript)
    ``` javascript
      class Hello extends React.Component { //리액트 컴포넌트
        render() {
          return React.createElement('div',null,'Hello ${this.props.toWhat}'); //JSX를 사용한경우에는 내부적으로 React.createElement함수가 사용된다
          /*
          const element = {     -> React element라고 한다
            type: 'h1'
            props: {
              className: 'greeting',
              children: 'Hello, world!'
            }
          } -> React.createElement()의 결과로 javascript 객체가 나온다*/
        }
      }

      ReactDOM.render(  //리액트돔의 랜더함수를 이용하여 화면에 랜더링
        React.createElement(Hello, { toWhat: 'World'}, null),
        document.getElementById('root')
      )
    ```

<br/>

- ### 바벨
  - 자바스크립트 코드를 변환해 주는 컴파일러
  - 리액트에서는 JSX문법을 사용하기 위해 바벨을 사용한다
  - **바벨**이 JSX문법으로 작성된 코드를 createElement함수를 호출하는 코드로 변환해 준다
  - 바벨과 관련된 패키지 설치 후, JSX로 작성된 코드를 <br>createElement함수를 이용한 코드로 변환해 주는 바벨 플러그인을 이용

<br/>

- ### 웹팩
  - 웹팩은 자바스크립트로 만든 프로그램을 배포하기 좋은 형태로 묶어주는 도구이다   

## create-react-app 은 바벨과 웹팩을 포함한다
<br/>

- ### JSX의 장점
  - 간결한 코드
    - `<div>Hello {this.props.toWhat}</div>;` -> 사용한 경우
    - `React.createElement('div',null,'Hello ${this.props.toWhat}');` -> 사용하지 않은 경우
  - 가독성 향상
    - 버그를 발견하기 쉬움
  - Injection Attacks 방어   

<br/>

- ### JSX 사용예제
  ``` javascript
    function getGreeting(user) {  //사용자 이름에 따른 출력을 변경
      if(user) {
        return <h1>Hello, {formatName(user)}!</h1>; //중괄호 {} 사이에 자바스크립트 코드를 넣으면 된다!
      }
      return <h1>Hello, Stranger. </h1>
    }
  ```
