import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Login from './components/login/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './components/admin/Admin'


function App() {
  return (
    <div className="App">
      School Management System
     {/* <Register/> */}
    
     <Router>
      <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
