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
  - JSX 코드를 JS코드로 변화하는 역할을 하는 것이 `createElement 함수`
     ``` javascript
      React.createElement(
        type, //리액트 컴포넌트 or div(HTML tag) 등
        [props],  //리액트 컴포넌트 속성
        [...children] //현재 element가 포함하는 자식 element
      )
        //children 예시
        /* <div>
              <h1>자식1</h1>
              <h2>자식2</h2>
          </div>
        */
    ```
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

- ### JSX의 장점
  - 간결한 코드
    - `<div>Hello {this.props.toWhat}</div>;` 사용한 경우
    - `React.createElement('div',null,'Hello ${this.props.toWhat}');` 사용하지 않은 경우
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
