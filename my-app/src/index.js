import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library'; //우리가 만든거 랜더링 작업
import Clock from './chapter_04/Clock';

const root = ReactDOM.createRoot(document.getElementById('root')); //ReactDom을 사용하여 rootDom에 랜더링 하는 작업
setInterval(() => {root.render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>
  );
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
