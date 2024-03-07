import { useState } from 'react'
import Signin from './screens/Signin'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Signin />}/>
      
    </Routes>
     

    </BrowserRouter>
  )
}

export default App
