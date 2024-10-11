import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App'
import reportWebVitals from './reportWebVitals';
import SumarNumeros from './components/SumarNumeros';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SumarNumeros numero1="77" numero2="12" />
    <SumarNumeros numero1="82" numero2="53" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
