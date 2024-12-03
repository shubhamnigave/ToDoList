
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.css';
import EditForm from './components/EditForm';
function App() {
return(
  <>
  
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/editform' element={<EditForm />}/>
  </Routes>
  
  </>
)}

export default App;
