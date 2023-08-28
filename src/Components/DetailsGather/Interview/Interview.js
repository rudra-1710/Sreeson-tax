import React from 'react'
import {Row, Col} from "react-bootstrap"
import "../../Home/Home.css"
import InterviewHomepage from './InterviewHomepage'
import InterviewNavbar from './InterviewNavbar'


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
            <InterviewHomepage />
        </Col>
    </Row>
    </>
  )
}

export default Interview
