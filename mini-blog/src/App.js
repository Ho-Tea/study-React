import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import styled from 'styled-components';

//page
import MainPage from './component/page/MainPage';
import PostViewPage from './component/page/PostViewPage';
import PostWritePage from './component/page/PostWritePage';

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: clearInterval;
`;


function App() {
  return (
    <BrowserRouter>
      <MainTitleText>주호의 미니 블로그</MainTitleText>
      <Routes>
          <Route index element={<MainPage />} />
          <Route path='post-write' element={<PostWritePage />} />
          <Route path='post/:postId' element={<PostViewPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}
//:postId의 경우 실제 컴포넌트에서 useparmas 훅을 사용해 id로 해당값을 가져올수 있다
export default App;
