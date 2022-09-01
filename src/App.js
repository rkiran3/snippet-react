import React, { useEffect, useState } from "react";

import Snippet from './components/Snippet';
import Filter from './components/Filter';
import Form from './components/Form';
//import ReactTable from "react-table"

function App(props) {
  const [snippets, setSnippets] = useState(props.snippets);
  const [values, setValues] = useState(props.values);
  //const [editValues, setEditValues] = {};

  useEffect(() => {
    fetch("http://localhost:8101/snippets/", {
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
      .then(response => response.json())
      .then(dataList => {setSnippets(dataList)});
  }, []);

  /* Function invoked when form in Form.js submitted */
  function addSnippet(values) {

    console.log(snippets.length);
    const newSnippet = {  
      id: snippets.length ,
      category: values.category, 
      title: values.title,
      content: values.content,
      crtdt: new Date()
    }

    setSnippets([...snippets, newSnippet]);
    saveSnippet(newSnippet);
  }

  /* Function invoked when form in Form.js submitted */
  function editSnippet(values) {
    console.log('editSnippet was invoked');
    console.log(values);
    console.log(this);
    //setValues(values);
    console.log("completed");
  }

  /* Delete Snippet Function */
  function deleteSnippet(values) {
    console.log('deleteSnippet ' + values.id);
    console.log(values);

    fetch("http://localhost:8101/snippets/" + values.id, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*'
      },
    });
  }

  const saveSnippet = (snippet) => {
    fetch("http://localhost:8101/snippets", {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*'
      },
      body: JSON.stringify(snippet),
    });
  }

  console.log(snippets);
  const snippetList = snippets.map(snippet => 
    <Snippet     
      id={snippet.id}
      title={snippet.title}
      category={snippet.category}
      content={snippet.content}
    />
  );

  return (
    <div className="App">
      <header className="App-header">
        <h2>Snippet</h2>

        <Form addSnippet={addSnippet} values={values}/>

        <ul>
          {/* snippetList.map(function(item, index) {
              return <li key={index}>{item}</li>
            })
          */}
        </ul>

        <div>
          <table border='1' width="1000">
            <thead>
              <tr>
                <th>Id</th>
                <th>Category</th>
                <th>Title</th>
                <th>Content</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
            {snippetList.map((val, key) => {
              return (
                <tr key={key}>
                    <td>{val.props.id}</td>
                    <td>{val.props.category}</td>
                    <td>{val.props.title}</td>
                    <td>{val.props.content}</td>
                    <td><button type="button" name="edit" 
                      onClick={() => editSnippet(val.props)}>edit</button></td>
                    <td><button type="button" name="delete" 
                      onClick={() => this.deleteSnippet(val.props)}>delete</button></td>
                </tr>
                )
            })}
            </tbody>
          </table>
        </div>
        <Filter />
      </header>
    </div>
  );
}

export default App;
