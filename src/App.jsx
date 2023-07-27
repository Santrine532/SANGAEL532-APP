import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Book from "./pages/Book now";
import Packages from "./pages/Packages";
import Hotel from "./pages/HotelTypes";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Booknow from "./pages/Book now";
import viewAll from "./pages/ViewAll";
import { useEffect } from "react";
import { AuthProvider } from "./components/auth";
import contactNo from "./pages/contactNo";
import PackageForm from "./pages/PackageForm";
import Navbar from "./components/Navbar";
function App() {
  return (


    // <>
    //   <Login />
    //   <Signup />
    //   <Home/>
    // <Book now/>
    // <Packages/>
    // <Hotel/>
    // <Footer.jsx/>
    // <AuthProvider/>
    // <contactNo/>
    //<packageForm/>
    // </>
    <BrowserRouter>
     <Navbar />
     
      <Routes>
        <Route path="/Home" exact Component={Home} />
        <Route path="/login" exact Component={Login} />
        <Route path="/SignUp" exact Component={Signup} />
        <Route path="/Booknow" exact Component={Booknow} />
        <Route path="/Packages" exact Component={Packages} />
        <Route path="/Hotel" exact Component={Hotel} />
        <Route path="/Footer" exact Component={Footer} />
        <Route path="/ViewAll" exact Component={viewAll} />
        <Route path="/AuthProvider" exact Component={AuthProvider} />
        <Route path="/contactNo" exact Component={contactNo} />
        <Route path="/PackageForm" exact Component={PackageForm} />
        <Route path="/Navbar " exact Component={Navbar } />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
