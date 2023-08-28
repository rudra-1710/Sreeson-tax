import React from 'react'
import { useState } from 'react';
import { Accordion, Row, Col, Nav, Offcanvas } from 'react-bootstrap';
import logo from "../../assets/images/box.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./HomeNavbar.css"

const HomeNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
        </Col>
        <p className='Newreturn p-2 px-4'><Nav.Link>start a new return</Nav.Link></p>
       <div className='d-flex justify-content-center hrline'>
      <hr className=' m-0'></hr> 
       </div>
      </Row>
        </div>


        {/* for mobile view */}


        <div className='mobile-view'>
        <div  onClick={handleShow}>
        <FontAwesomeIcon icon={faBars}  className='p-3 m-2 menu-icon' />
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          <div>
                <p className='taxyear m-0 pt-3'>{taxYear} TAXES</p>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Row className='m-0 ps-3  w-100'>
        {/* Sidebar */}
        <Col className="home-sidebar ps-3 pe-0 w-100">
          <div className="flex-column">
            
            <Nav.Link href="#" className='py-1'>
                <img src={logo} className='main-logo' alt='logo'/>
            </Nav.Link>
            <Nav.Link href="#">
            <Accordion>
      <Accordion.Item eventKey="0" className='rounded-0'>
        <Accordion.Header className='rounded-0 accordion '><p className='nav-text'>My Returns</p></Accordion.Header>
        <Accordion.Body className='accordian rounded-0 '>
            <div>
                <Nav.Link href="#" className='rounded-0'><p className='nav-text rounded-0'>view all tax returns</p></Nav.Link>
            </div>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
            </Nav.Link>
          </div>
        </Col>
        <p className='Newreturn p-2 px-4'>start a new return</p>
       <div className='d-flex justify-content-center hrline'>
      <hr className=' m-0'></hr> 
       </div>
      </Row>
        </Offcanvas.Body>
      </Offcanvas>
        </div>
    </>
  )
}

export default HomeNavbar
