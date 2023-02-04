import './App.css';
import  Header from "./components/Header";
import  Todos from "./components/Todos";
import  Footer from "./components/Footer";
import  AddTodo from "./components/AddTodo";
import react, {useState} from 'react';

function App() {

  

  const onDelete = (todo)=> {
    console.log("I am onDelete function", todo) ;
    
    setTodos(todos.filter ((e)=>{
      return e!==todo;
    }));
  }

  const addTodo = (title, desc) => {
    console.log("This is a Add Todo Function", title, desc)
    let sno = todos [todos.length - 1].sno + 1;
    const myTodo = {
      sno : sno,
      title : title,
      desc : desc,
    }

    setTodos ([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState ([
    {
      sno:1,
      title: "dare gym karennn",
      des: "market ki demand hai bro"
    },
    {
      sno:2,
      title: "4am Club",
      des: "Lekin neend nahin khulti uska kyaaaa karenn"
    },
    {
      sno:3,
      title: "College jana hai",
      des: "Intrest kisko hai mujhe toh attendence ke marks chahiye"
    },
  ]);

  return (
     <>
     <Header/>
     <AddTodo addTodo={addTodo}/>
     <Todos todos={todos} onDelete={onDelete}/>
     <Footer/>
     </>
  );
}

export default App;
