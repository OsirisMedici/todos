import react, {useState} from 'react';


const AddTodo = (props) => {
   
   const [title, setTitle] = useState("");
   const [desc, setDesc] = useState("")

   const submit = (e) => {
      e.preventDefault();
      if(!title || !desc ){
         alert("Title or description cannot be Blanked");
      }
      props.addTodo (title, desc);
   }

  return (
   
    <div className="container my-5 ">
    <h3 className="text-center">Add Your One Task Brother and his sister </h3>
    <form>
    <div className="mb-3">
      <label for ="title" class="form-label">Task Name</label>
      <input type="text" class="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} id="title" aria-describedby="emailHelp"/>
       
    </div>
    <div className="mb-3">
      <label htmlfor="desc" class="form-label">Task Description</label>
      <input type="text" class="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)} id="desc"/>
    </div>
     
    <button type="submit" class= "btn btn-sm btn-success">Submit</button>
  </form>
    </div>
  )
}

export default AddTodo
