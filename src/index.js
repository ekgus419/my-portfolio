import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // createRoot를 사용하여 root를 생성합니다.
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
