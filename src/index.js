import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const DATA = [
  { id: "0", 
    category: "Python", 
    title: "iterating lists",
    content: "Eating Python",
    completed: true},
  { id: "1", 
    category: "Java", 
    title: "Heap Memory",
    content: "Sleeping Java",
    completed: false},
  { id: "2", 
    category: "Emacs", 
    title: "Org Mode",
    content: "Repeating Emacs",
    completed: false}
];

const values = {
  category: "",
  title: "",
  content: ""
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <App snippets={DATA} values={values} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
