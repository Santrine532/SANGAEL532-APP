import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    // <>
    //   <Login />
    //   <Signup />
    //   <Home/>
    // </>
    <BrowserRouter>
      <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="login" exact Component={Login}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
