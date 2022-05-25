import React, { useState } from "react";

import Snippet from './components/Snippet';
import Filter from './components/Filter';
import Form from './components/Form';

function App(props) {

  console.log("Begin App");
  const [snippets, setSnippets] = useState(props.snippets);

  function addTask(name) {
    console.log('App addTask was invoked');
    console.log(name);

    const newSnippet = { id: "id", 
      name: name, 
      title: "new Title",
      completed: true
    }

    setSnippets([...snippets, newSnippet]);
  }

  /* Function invoked when form submitted */
  function addSnippet(values) {
    console.log('App addTask was invoked');
    console.log(values);

    const newSnippet = { id: "id", 
      category: values.category, 
      title: values.title,
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
      completed={snippet.completed} 
      key={snippet.id} />
  );

  return (
    <div className="App">
      <header className="App-header">
        <h2>Snippet</h2>

        <Form addSnippet={addSnippet} />

        <ul
          aria-labelledby="list-heading">
          {snippetList}
        </ul>

        <Filter />
      </header>
    </div>
  );
}

export default App;
