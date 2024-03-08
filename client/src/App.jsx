import { useState } from 'react'
import Signin from './screens/Signin'
import Register from './screens/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Signin />}/>
      <Route exact path="/register" element={<Register />}/>
      
    </Routes>
     

    </BrowserRouter>
  )
}

export default App
