import React from 'react'
import Home from './Components/Home/Home';
import "./App.css"
import Login_form from './Components/Login_form/Login_form';
import Sign_up from './Components/Sign_up_form/Sign_up';
import Interview from './Components/DetailsGather/Interview/Interview';
// import { BrowserRouter , Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
    {/* <BrowserRouter  basename="/">
        <Routes>
          <Route exact path="/"  element={<Home />} />
        </Routes>
    </BrowserRouter> */}
    <div style={{height:'100%'}}>
      {/* <Home /> */}
      {/* <Login_form /> */}
      {/* <Sign_up /> */}
      <Interview />
    </div>
    </>
  )
}

export default App
