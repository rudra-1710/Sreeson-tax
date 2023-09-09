import React from 'react'
import Home from './Components/Home/Home';
import "./App.css"
import LoginForm from './Components/Login_form/LoginForm';
import SignUp from './Components/Sign_up_form/SignUp';
import Interview from './Components/DetailsGather/Interview/Interview';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import TaxReturnType from './Components/TaxReturnType/TaxReturnType';
import InterviewHomepage from './Components/DetailsGather/Interview/InterviewHomepage';
import Province from './Components/ProvinceOfResidence/Province';
import CanadianCitizenship from './Components/CanadianCitizenship/CanadianCitizenship';
import Contact from './Components/ContactInformation/Contact';
import DependantsInfo from './Components/DependantsInfo/DependantsInfo';
import PersonalInfo from './Components/PersonalInfo/PersonalInfo';
import GetStartedForm from './Components/GetStarted/GetStartedForm';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<LoginForm/>}/>
        <Route path='signUp' element={<SignUp />}/>
        <Route path='application' element={<Interview/>}>
        <Route path='type' element={<TaxReturnType />}/>
          <Route path='marital-status' element={<InterviewHomepage/>} />
          <Route path='province' element={<Province />}/>
          <Route path='citizenship' element={<CanadianCitizenship/>}/>
          <Route path='contact' element={<Contact/>} />
          <Route path='dependants' element={<DependantsInfo />}/>
          <Route path='personal-info' element={<PersonalInfo />}/>
          {/* <Route path='/whats' element={<WhatsNew/>}/> */}
          <Route path='tax-info' element={<GetStartedForm/>} />
          </Route>

        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
