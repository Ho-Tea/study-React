## Conditional Rendering

<br/>


- ### Conditional Rendering
  - 조건부 렌더링
    - 어떠한 조건에 따라서 렌더링
  
<br/>

- ### Element Variables
  - 조건부렌더링을 다루다 보면 렌더링 해야하는 컴포넌트를 <br>변수처럼 다루고 싶은 경우가 있다 <br>그때 사용하는 방법
  ```javascript
  //로그인 컴포넌트
  function LoginButton(props) {
    return {
      <button onClick ={props.onClick}>
        로그인
      </button>
    };
  }
  //로그아웃 컴포넌트
  function LogoutButton(props) {
    return {
      <button onClick ={props.onClick}>
        로그아웃
      </button>
    };
  }


  //사용자의 로그인여부에 따라 두개의 컴포넌트를 선택적으로 보여준다
  function LoginControl(props){
    const [isLoggedIn, setIsLoggedIn] = userState(false);

    const handleLoginClick = () => {
      setIsLoggedIn(true);
    }
    const handleLogoutClick = () => {
      setIsLoggedIn(false);
    }

    //버튼이라는 변수에 컴포넌트를 대입
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick = {handleLogoutClick} />;
    }else{
      button = <LogoutButton onClick = {handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        //실제 버튼이라는 대입된 컴포넌트가 렌더링이 되도록 설정
        // 컴포넌트라고 말했지만 실제로는 컴포넌트로 부터 생성된 리액트 Element이다
        //즉, Element Variable
        {button}
      </div>
    )
  }

  ```

<br/>

- ### javascript의 truthy와 falsy
  - `Truthy` : true는 아니지만 true로 여겨지는 값
  - `Falsy` : false는 아니지만 false로 여겨지는 값
  ``` javascript
  //truthy
  true
  {} (empty object)
  [] (empty array)
  42 (number, not zero)
  "0", "false" (string, not empty)

  //falsy
  false
  0, -0 (zero, minus zero)
  0n (BigInt zero)
  '', "", `` (empty String)
  null
  undefined
  NaN (not a number)
  
  
  ```
  

<br/>

- ### Inline Conditions
  - 조건문을 코드안에 집어 넣는 것
  - false && expression 인경우 단축평가로 **expression**이 평가되지 않는다<br>(**false는 평가된다**)

  ``` javascript
  //Inline if
  function Mailbox(props){
    const unreadMessages = props.unreadMessages;

    return (
      <div>
        <h1>안녕하세요!<h1>
        //unreadMessgae.length > 0가 true이면 뒤에나오는 h2태그가 렌더링 될것이고
        //false이면 아무것도 렌더링 되지 않을 것 이다
        {unreadMessage.length > 0 &&
          <h2>
            현재 {unreadMessages.length}개의 읽지 않은 메시지가 있습니다
          </h2>
        }
      </div>
    );
  }

  //Inline if-else (3항 연산잔 사용)
  function LoginControl(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
      setIsLoggedIn(true);
    }
    const handleLogoutClick = () => {
      setIsLoggedIn(false);
    }

    return (
      <div> //레이아웃을 나누어 준다 (Division)
        <Greeting isLoggedIn={isLoggedIn} />
        {isLoggedIn
          ? <LogoutButton onClick={handleLogoutClick} />
          : <LoginButton onClick={handleLoginClick} />
          }
      </div>
    )
  }
  ```
  
<br/>

- ### Component 렌더링 막기
  - null을 리턴하면 된다
  ```javascript

  function WarningBanner(props) {
    if(!props.warning) {
      return null;
    }

    return (
      <div>경고!<div>
      );
  }


  function MainPage(props){
    const [showWarning, setShowWarning] = useState(false);

    const handleToggleClick = () => {
      setShowWarning(prevShowWarning => !prevShowWarning);
    }

    return (
      <div>
        //showWarning이라는 state값을 WarningBanner 컴포넌트의 props로 전달하여 showWarning의 값에 따라 경고문을 표시하거나 표시하지 않는다
        <WarningBanner warning={showWarning} />
        <button onClick={handleToggleClick}>
          {showWarning ? '감추기' : '보이기'}
        </button>
      </div>
    )
  }
  ```
<br/>
