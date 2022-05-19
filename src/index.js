import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const DATA = [
  { id: "todo-0", 
    name: "Eating", 
    category: "Python", 
    title: "iterating lists",
    completed: true},
  { id: "todo-1", 
    name: "Sleep", 
    category: "Java", 
    title: "Heap Memory",
    completed: false},
  { id: "todo-2", 
    name: "Repeat", 
    category: "Emacs", 
    title: "Org Mode",
    completed: false}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <App snippets={DATA} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
