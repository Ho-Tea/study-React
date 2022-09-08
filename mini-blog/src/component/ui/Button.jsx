import React from "react";
import styled from "styled-components";

const StyeledButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border-width: 1px;
  border-radius: 8px;
  cursor: pointer;
`;//스타일드 버튼

function Button(props){
  const { title, onClick } = props;

  return <StyeledButton onClick={onClick}>{title || "button" }</StyeledButton>
}
// Button 컴포넌트에서 받은 props의 title을 버튼목록에 표시하도록 설정
// Button 컴포넌트에서 받은 props의 onClick은 StyledButton의 onClick에 넣어줌으로써
// 클릭 이벤트를 상위 컴포넌트에서 받을 수 있게 구성



export default Button;