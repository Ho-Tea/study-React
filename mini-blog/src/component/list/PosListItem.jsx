import React from "react";
import styled from "styled-components";

//PostList에서 PostListItem을 필요로하기때문에 PostListItem컴포넌트를 먼저 생성한다

const Wrapper = styled.div`
  width: clac(100% - 32px);
  padding: 16px; 
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border : 1px solid grey;
  border-radius: 8px;
  cursor: pointer;
  background: white;
  :hover {
    background: lightgrey;
  }
`;


const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;


//글의 제목만 표시
function PostListItem(props){
  const { post, onClick }= props;

//props로 받은 post의 title을 표시해준다
  return(
    <Wrapper onClick={onClick}>
      <TitleText>{post.title}</TitleText>
    </Wrapper>
  );
}

export default PostListItem;