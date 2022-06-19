import React, { useState } from "react";

import Snippet from './components/Snippet';
import Filter from './components/Filter';
import Form from './components/Form';

function App(props) {

  console.log("Begin App");
  const [snippets, setSnippets] = useState(props.snippets);
  const [items, setItems] = useState(props.items);

    

  /* Function invoked when form in Form.js submitted */
  function addSnippet(values) {
    console.log('App addSnippet was invoked');
    console.log(values);

    const newSnippet = { id: "id", 
      name: values.category,
      category: values.category, 
      title: values.title,
      content: values.content,
      completed: true
    }

    setSnippets([...snippets, newSnippet]);
  }

  console.log(props);
  console.log('App.js: Iterating Snippets');

  const snippetList = snippets.map(snippet => 
    <Snippet     
      title={snippet.title}
      name={snippet.name}
      category={snippet.category} 
      id={snippet.id} 
      content={snippet.content}
      completed={snippet.completed} 
      key={snippet.id} />
  );

  return (
    <div className="App">
      <header className="App-header">
        <h2>Snippet</h2>

        <Form addSnippet={addSnippet} />

        <ul>
          {snippetList.map(function(item, index) {
            return <li key={ index }>{item}</li>
          })
          }
        </ul>

        <Filter />
      </header>
    </div>
  );
}

export default App;
