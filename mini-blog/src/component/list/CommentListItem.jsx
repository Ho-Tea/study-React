import React from "react";
import styled from "styled-components";

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


const ContentText = styled.p`
  font-size: 14px
`;

function CommentListItem(props) {
  const { comment } = props;
//사용자가 작성한 댓글 객체 comment
// 따로 클릭하는 이벤트(onClick)을 설정해주지 않아도 된다
  return (
    <Wrapper>
      <ContentText>{comment.content}</ContentText>
    </Wrapper>
  );
}


export default CommentListItem;