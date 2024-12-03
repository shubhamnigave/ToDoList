import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function EditForm() {
    const[todo,setTodo]=useState({});
    const location=useLocation();
    const navigate=useNavigate();
   
    useEffect(()=>{ 
        setTodo(location?.state?.tod);
    },[])

    const handleChange=(e)=>{
        setTodo({...todo,[e.target.name]:e.target.value})
        console.log(todo);
    }
    const update= async()=>{
        const response = await axios.put("http://localhost:4000/todos/"+todo.id,todo);
        console.log(response);
        navigate("/");
        }
  return (
    <div>
      <tr>
        Title: <input type="text" name="title" value={todo.title} onChange={handleChange} />
      </tr>
      <tr>
        Description: <input type="text" name="description" value={todo.description} onChange={handleChange}/>
      </tr>
      <tr>
        Status: <input type="text" name="status" value={todo.status}  onChange={handleChange} />
      </tr>
      <tr>
        <button onClick={update}>Update</button>
      </tr>
    </div>
  );
}
export default EditForm;