import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "bootstrap";
import { Link } from 'react-router-dom';


function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/todos");
    const data = await response.json();
    setTodos(data);
  };
  return (
    <div> 
  <table className="table table-striped table-hover">
    <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {todos.map((todo) => (
        <tr key={todo.id}>
          <td>{todo.title}</td>
          <td>{todo.description}</td>
          <td>{todo.status}</td>
          <td>
          
          <Link to="/editform" state={{tod:todo}}>
            <button type="button" class="btn btn-outline-primary" >Edit</button>&nbsp;&nbsp;
            </Link>
            <button type="button" class="btn btn-outline-danger">Delete</button>&nbsp;&nbsp;
            <button type="button" class="btn btn-outline-success">Status</button>&nbsp;&nbsp;
          </td>
        </tr>

      ))}
    </tbody>
    
  </table>
</div>

  );
}
export default Home;