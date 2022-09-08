import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  
  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

function CommentList(props) {
  const { comments } = props;
//comments라는 배열이 들어온다
  return(
    //각 댓글객체를 CommentListItem컴포넌트로 넘겨 화면에 댓글을 표시한다
    <Wrapper>
      {comments.map((comment, index) => {
        return <CommentListItem key = {comment.id} comment={comment} />;
      })}
    </Wrapper>
  );
}

export default CommentList;