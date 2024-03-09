
import Signin from './screens/Signin'
import Register from './screens/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import CreateOrder from './renders/CreateOrder'
import Records from './renders/Records'
import Service from './renders/Service'
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Signin />}/>
      <Route exact path="/register" element={<Register />}/>
      <Route exact path="/home" element={<Home />}/>



      
    </Routes>
     

    </BrowserRouter>
  )
}

export default App
