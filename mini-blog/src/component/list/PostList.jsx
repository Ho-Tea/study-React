import React from "react";
import styled from "styled-components";
import PostListItem from "./PosListItem";

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

//parent element > child element 
// & > *
// &은 해당태그 그 자체를 의미한다(div)
//styled-components에서 '& > *' 라는 selector는,
//해당 부모 element의 모든 자식들에게 스타일을 적용하기 위한 selector라고 보시면 됩니다.
//그리고 그 안에서 다시 ':not(:last-child)'라는 selector를 이용해서 마지막 자식이 아닌 element에만 스타일을 적용하도록 한 것입니다.



// PostList컴포넌트의 props로 받은 posts라는 배열에는 post객체가 들어있다
// map함수를 이용하여 각 post객체의 PostListItem 컴포넌트를 만들어서 렌더링 한다
function PostList(props) {
  const {posts, onClickItem } = props;
  return(
    <Wrapper>
      {posts.map((post,index) => {
      return(
        <PostListItem
          key = {post.id}
          post = {post}
          onClick = {() => {
            onClickItem(post);
          }}
        />
      );
    })}
    </Wrapper>
  );
}



export default PostList;