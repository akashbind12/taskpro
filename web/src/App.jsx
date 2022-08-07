import { useState } from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom";
import { Login } from './components/login';
import { Signup } from './components/register';
import { Dashboard } from './components/dashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App