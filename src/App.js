import React from 'react'
import Home from './Components/Home/Home';
import "./App.css"
import LoginForm from './Components/Login_form/LoginForm';
import SignUp from './Components/Sign_up_form/SignUp';
import Interview from './Components/DetailsGather/Interview/Interview';
import { BrowserRouter , Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<LoginForm/>}/>
        <Route path='signUp' element={<SignUp />}/>
        <Route path='inter' element={<Interview/>}/>
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
