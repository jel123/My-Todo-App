import InputForm from './components/InputForm';
import Tasks from './components/Tasks';
import React, {useState, useEffect} from 'react'

function App() {
  const items = JSON.parse(localStorage.getItem('item')) || [];
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState(items);

  const inputHandler = (e) => {
    setTodo(e.target.value);
  }
  
  const addHandler = () => {
    if(!todo) return;
    const newTodos = [...todos, { task: todo, isFinished: false, editMode: false }];
    setTodos(newTodos); 
    updateLocal(newTodos);
    setTodo("");
  }



  const updateLocal = (todos) => {
    todos.map((todo, index, todos)=> {
      if(index + 1 === todos.length) {
        items.push(todo);
      }
      localStorage.setItem('item', JSON.stringify(items));
    });
  }

  const deleteItem = (index) => {
    items.splice(index, 1);
    localStorage.setItem('item', JSON.stringify(items));
    const deletedItems = JSON.parse(localStorage.getItem('item')) || [];
    setTodos(deletedItems);
  }

  const editItem = (index) => {
    items[index].editMode = true;
    localStorage.setItem('item', JSON.stringify(items));
    const editedItems = JSON.parse(localStorage.getItem('item')) || [];
     setTodos(editedItems);
  }

  const onEdit = (index, e) => {
     items[index].task = e.target.value;
  }

  const saveItem = (index) => {
    items[index].editMode = false;
    localStorage.setItem('item', JSON.stringify(items));
    const saveditems = JSON.parse(localStorage.getItem('item')) || [];
    setTodos(saveditems);
  }

  const onFinish = (index, e) => {
    items[index].isFinished = e.target.checked;
    localStorage.setItem('item', JSON.stringify(items));
    const finsishedItems = JSON.parse(localStorage.getItem('item')) || [];
    setTodos(finsishedItems);
  }

  useEffect(()=>{
  
  }, []);

    return (
    <div className="App">
      <div className="todo-wrapper">
        <h1> What do you want to do today? </h1>
        <InputForm 
        onClick={inputHandler} 
        onAdd={addHandler} 
        todo={todo}/>
        {todos.length !== 0 ? (  <Tasks 
        todos={todos} 
        onFinish={onFinish}
        onEdit={onEdit}
        saveItem={saveItem} 
        editItem={editItem}
        deleteItem={deleteItem}
        />) : (<h1 class="no-todo">No Todos For today</h1>)}
        
      </div>
    </div>
  );
}

export default App;
