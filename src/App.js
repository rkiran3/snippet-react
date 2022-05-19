import Snippet from './components/Snippet';
import Filter from './components/Filter';
import Form from './components/Form';

function App(props) {

  console.log(props);
  console.log('in From App')
  const snippetList = props.snippets?.map(snippet => 
    <Snippet 
      category={snippet.category}
      title={snippet.title}
      name={snippet.name} 
      id={snippet.id} 
      completed={snippet.completed} />
  );

  return (
    <div className="App">
      <header className="App-header">
        <h2>Snippet</h2>

        <Form />

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
