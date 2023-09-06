import React from 'react'
import {Row, Col} from "react-bootstrap"
import "../../Home/Home.css"
import InterviewHomepage from './InterviewHomepage'
import InterviewNavbar from './InterviewNavbar'
import Province from '../../ProvinceOfResidence/Province'
import Helpbar from '../../CommonComponents/Helpbar'
import TaxReturnType from '../../TaxReturnType/TaxReturnType'
import CanadianCitizenship from '../../CanadianCitizenship/CanadianCitizenship'
import Contact from '../../ContactInformation/Contact'
import DependantsInfo from '../../DependantsInfo/DependantsInfo'
import PersonalInfo from '../../PersonalInfo/PersonalInfo'
import WhatsNew from '../../WhatsNew/WhatsNew'
import GetStartedForm from '../../GetStarted/GetStartedForm'
import { Route, Routes } from 'react-router-dom'


const Interview = () => {
  return (
    <>
    <Row className="w-100 Home-page">

        <Col sm={4} lg={3} xl={2} xs={5} className="home-navbar1 p-0">
            <InterviewNavbar />
        </Col>
        <Col sm={4} lg={3} xl={2} xs={5} className="home-navbar2 p-0">
            
        </Col>
        <Col >
        <Helpbar />
        <Routes>
          <Route path='/tax-type' element={<TaxReturnType />}/>
          <Route path='/province' element={<Province />}/>
          <Route path='/citizenship' element={<CanadianCitizenship/>}/>
          <Route path='/contact' element={<Contact/>} />
          <Route path='/dependants' element={<DependantsInfo />}/>
          <Route path='/personal' element={<PersonalInfo />}/>
          <Route path='/whats' element={<WhatsNew/>}/>
          <Route path='/getstart' element={<GetStartedForm/>} />
          <Route path='/marital-status' element={<InterviewHomepage/>} />
        </Routes>
            <div className='text-center bottom-1 left-0 right-0'>
        <div className='my-5'>
          <p>License Agreement Privacy Statement Cobrowse</p>
          <p>© 2023 Sreeson Canada ULC or one of its affiliates. All rights reserved.</p>
        </div>
      </div>
        </Col>
    </Row>
    </>
  )
}

export default Interview
