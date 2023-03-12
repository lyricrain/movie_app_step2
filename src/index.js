import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
// <App/> 이 컴포넌트로 인식해 컴포넌트가 반환하는 값을
// index.html 에 삽입해서 화면에 그려줌 
// 리액트는 컴포넌트와 함께 동작, 구성됨 
//ReactDOM.render(<App/>,document.getElementById('root'));
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

