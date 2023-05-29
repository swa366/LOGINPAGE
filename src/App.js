import React from "react";
import "./App.css";
import Login from "./Component/Pages/Login";
import Register from "./Component/Pages/Register";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
     <Router >
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
      </Routes>
     </Router>
    
    </div>
  );
}

export default App;
