import './App.css';
import  Header from "./components/Header";
import  Todos from "./components/Todos";
import  Footer from "./components/Footer";

function App() {
  let todos = [
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
  ]
  return (
     <>
     <Header/>
     <Todos todos={todos}/>
     <Footer/>
     </>
  );
}

export default App;
