import React from 'react'
import Home from './Components/Home/Home';
import "./App.css"
import Login_form from './Components/Login_form/Login_form';
import Sign_up from './Components/Sign_up_form/Sign_up';
import Interview from './Components/DetailsGather/Interview/Interview';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Province from './Components/ProvinceOfResidence/Province';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login_form/>}/>
        <Route path='signUp' element={<Sign_up />}/>
        <Route path='inter' element={<Interview/>}/>
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
