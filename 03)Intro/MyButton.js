// 리액트 컴포넌트

function MyButton(props){
  const [isClicked, setIsClicked] = React.useState(false)

  return React.createElement(
      'button',
      { onClick: () => setIsClicked(true)},
      isClicked ? 'clicked!' : 'Click here!'
  )
}

const domContainer = document.querySelector('#root'); //dom이랑 랜더링하는 것
ReactDOM.render(React.createElement(MyButton), domContainer)