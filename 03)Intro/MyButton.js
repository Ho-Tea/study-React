// 리액트 컴포넌트

function MyButton(props){
  const [isClicked, setIsClicked] = React.useState(false) //react-dom.development.js 파일에서 전역변수로 생성된다

  return React.createElement(
      'button',
      { onClick: () => setIsClicked(true)},
      isClicked ? 'clicked!' : 'Click here!'
  )
}

const domContainer = document.querySelector('#root'); //미리 만들어 놓은 index.html에 존재하는 돔 요소를 가져온다 
ReactDOM.render(React.createElement(MyButton), domContainer)  //react-dom.development.js 파일에서 전역변수로 만든 ReactDOM변수를 사용해서 우리가 만든 컴포넌트를 root돔 요소에 붙인다