import React from 'react'
import { Accordion, Row, Col, Nav, Offcanvas } from 'react-bootstrap';
import logo from "../../assets/images/box.png"

import "./HomeNavbar.css"

const HomeNavbar = () => {
  
    const taxYear= new Date().getFullYear()-1;
  return (
    <>
    {/* desktop view nav bar */}


        <div className='lg-view'>
        <Row className='m-0 ps-3  w-100'>
        {/* Sidebar */}
        <Col className="home-sidebar ps-3 pe-0 w-100">
          <div className="flex-column">
            <div>
                <p className='taxyear m-0 pt-3'>{taxYear} TAXES</p>
            </div>
            <Nav.Link href="#" className='py-1'>
                <img src={logo} className='main-logo' alt='logo'/>
            </Nav.Link>
            <div className='tax-refund'>
            <Accordion >
      <Accordion.Item eventKey="0" className='rounded-0'>
        <Accordion.Header className='rounded-0 accordion '><p className='nav-text'>2022 Tax Refund</p></Accordion.Header>
        <Accordion.Body className='accordian rounded-0 p-0 '>
            <div  className='nav-links'>
                <Nav.Link href="#" className='rounded-0'><p className='nav-text rounded-0'>view all tax returns</p></Nav.Link>
            </div>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
                
            </div>
          </div>
          <p className='Newreturn p-2 px-4'><Nav.Link>start a new return</Nav.Link></p>
       <div className='d-flex justify-content-center hrline'>
      <hr className=' m-0'></hr> 
       </div>
          <div className='position-absolute bottom-0 start-0 end-0 nav-bottom-color'>
        <div className='nav-basic py-4 ps-3'>
        <Nav.Link href="#" className='rounded-0 nav-text-bottom'><p className='nav-text rounded-0'>What's new Tax</p></Nav.Link>
        <Nav.Link href="#" className='rounded-0 nav-text-bottom'><p className='nav-text rounded-0'>Get strated</p></Nav.Link>
        <Nav.Link href="#" className='rounded-0 nav-text-bottom'><p className='nav-text rounded-0'>Personal Tax profile for Hemanth</p></Nav.Link>
        </div>
        </div>
        </Col>
        
      </Row>
        </div>


        {/* for mobile view */}


        
    </>
  )
}

export default HomeNavbar
