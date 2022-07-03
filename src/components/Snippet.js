import React from 'react';

export default function Snippet(props) {
    //console.log(props);
    return ( 
        <div className="c-cb">
        <label className="todo-label" htmlFor={props.category} >
          {props.category}
        </label> |
        <label className="todo-label" htmlFor={props.title} >
          {props.title}
        </label>|
        <label className="todo-label" htmlFor={props.content} >
          {props.content}
        </label>
      </div>
    );
}
