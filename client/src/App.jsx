import Signin from "./screens/Signin";
import Register from "./screens/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import  RenderContextProvider  from "./Context";
import Alert from "./Extra/Alert";
function App() {
  return (
    <RenderContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Signin />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/test" element={<Alert />} />
          
        </Routes>
      </BrowserRouter>
    </RenderContextProvider>
  );
}

export default App;
