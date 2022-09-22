import React, { useEffect, useState } from "react";

import Snippet from './components/Snippet';
import Filter from './components/Filter';
import Form from './components/Form';

const initialState = {
  id: '',
  category: '',
  title: '',
  content: ''
}
function App(props) {
  const [list, setList] = useState(props.snippets);
  const [values, setValues] = useState(initialState);

  useEffect(() => {
    fetch("http://localhost:8101/snippets/", {
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
      .then(response => response.json())
      .then(dataList => {setList(dataList)});
  }, []);

  // invoked on form submit
  function handleSubmit(event) {
      event.preventDefault();
      const f = event.target;
      const itemId = parseInt(f.id.value);
      var found = list.find(function(item) {
          return item.id === itemId;
        });
      if (found === undefined) {
        const newItem = {
          category: event.target.category.value,
          title: event.target.title.value,
          content: event.target.content.value,
          id: list.length
        }
        const newList = list.concat(newItem);
        setList(newList);

        const newSnippet = {  
          id: list.length ,
          category: values.category, 
          title: values.title,
          content: values.content,
          crtdt: new Date()
        }
        saveSnippet(newSnippet);
      } else {
        const newList = list.map((item) => {
          if (item.id === itemId) {
            const updatedItem = {
              ...item,
              id: itemId,
              category: event.target.category.value,
              title: event.target.title.value,
              content: event.target.content.value,
            };
            return updatedItem;
          }
          return item;
        });
        setList(newList);
      }
      setValues(initialState);
  }

  function handleClear(event) {
    event.preventDefault();
    setValues(initialState);  
  }

  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setValues( item => ({
      ...item,
      [name]: value
      })
    );
  }

  /* Function invoked when form in Form.js submitted */
  function addSnippet(values) {
    const newSnippet = {  
      id: list.length ,
      category: values.category, 
      title: values.title,
      content: values.content,
      crtdt: new Date()
    }

    setList([...list, newSnippet]);
    saveSnippet(newSnippet);
  }

  /* Function invoked when edit button clicked in  Form */
  function handleEdit(id) {

    var myItem = list.find(function(item) { 
      return item.id === id; 
    });
    const newValue = {
        id: myItem.id,
        category: myItem.category,
        title: myItem.title,
        content: myItem.content
    };

    setValues(values => ({
      ...values,
      id: newValue.id,
      category: newValue.category,
      title: newValue.title,
      content: newValue.content
    }));
    console.log("exiting editSnippet");
  }

  /* Delete Snippet Function */
  function deleteSnippet(id) {
    console.log('deleteSnippet ' + id);

    fetch("http://localhost:8101/snippets/" + id, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*'
      },
    });

    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    setValues(initialState);
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

  return (
    <div className="App">
      <header className="App-header">
        <h2>Snippet</h2>
        {  }
        <Form 
          values={values} 
          handleSubmit={handleSubmit} 
          handleChange={handleChange} 
          handleClear={handleClear} />

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
            {list.map((item) => {
              return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.category}</td>
                    <td>{item.title}</td>
                    <td>{item.content}</td>
                    <td><button type="button" name="edit" 
                      onClick={() => handleEdit(item.id)}>edit</button></td>
                    <td><button type="button" name="delete" 
                      onClick={() => deleteSnippet(item.id)}>delete</button></td>
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
