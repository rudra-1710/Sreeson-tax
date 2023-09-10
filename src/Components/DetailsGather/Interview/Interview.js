import React from 'react'
import {Row, Col} from "react-bootstrap"
import "../../Home/Home.css"
import InterviewNavbar from './InterviewNavbar'
import Helpbar from '../../CommonComponents/Helpbar'
import { Outlet } from 'react-router-dom'


const Interview = () => {
  return (
    <Row className="w-100 Home-page">

        <Col sm={4} lg={3} xl={2} xs={5} className="home-navbar1 p-0">
            <InterviewNavbar />
        </Col>
        <Col sm={4} lg={3} xl={2} xs={5} className="home-navbar2 p-0">
            
        </Col>
        <Col >
        <Helpbar />
        <Outlet/>
            <div className='text-center bottom-1 left-0 right-0'>
        <div className='my-5'>
          <p>License Agreement Privacy Statement Cobrowse</p>
          <p>© 2023 Sreeson Canada ULC or one of its affiliates. All rights reserved.</p>
        </div>
      </div>
        </Col>
    </Row>
  )
}

export default Interview
