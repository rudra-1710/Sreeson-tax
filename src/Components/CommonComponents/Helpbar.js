import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Accordion, Row, Col, Nav, Offcanvas } from 'react-bootstrap';
import logo from "../../assets/images/box.png"
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import "../Home/HomePage.css"
import { Link } from 'react-router-dom';
// import GoogleTranslateWidget from '../../utils/GoogleTranslateWidget';

const taxYear = new Date().getFullYear() - 2;

const Helpbar = () => {

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <div className='d-flex justify-content-between  align-items-center pt-2'>
        <div className='mobile-view'>
          <div onClick={handleShow} >
            <FontAwesomeIcon icon={faBars} className='p-2 menu-icon' />
          </div>

          <Offcanvas show={show} onHide={handleClose} className="mobile-navcolor" >
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
                    <div>
                      <p className='taxyear m-0 pt-3'>{taxYear} TAXES</p>
                    </div>
                    <div className='refund-value'>
                      <p>$75.00</p>
                    </div>
                    <div className='tax-refund'>
                      <Accordion >
                        <Accordion.Item eventKey="0" className='rounded-0'>
                          <Accordion.Header className='rounded-0 accordion '><p className='nav-text'>2022 Tax Refund</p></Accordion.Header>
                          <Accordion.Body className='accordian rounded-0 p-0 '>
                            <div className='nav-links'>
                              <Nav.Link className='rounded-0'><p className='nav-text rounded-0'>view all tax returns</p></Nav.Link>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>

                    </div>
                    <Nav.Link className='py-1'>
                      <img src={logo} className='main-logo' alt='logo' />
                    </Nav.Link>
                    <div className='tax-refund'>
                      <Accordion >
                        <Accordion.Item eventKey="0" className='rounded-0 mb-1'>
                          <Accordion.Header className='rounded-0 accordion '><p className='nav-text'>My Returns</p></Accordion.Header>
                          <Accordion.Body className='accordian rounded-0 p-0'>
                            <div className='nav-links'>
                              <Nav.Link className='rounded-0'><p className='nav-text rounded-0'>view all tax returns</p></Nav.Link>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>

                    </div>
                    <div className='d-flex justify-content-center hrline'>
                      <hr className=' m-0 mb-1'></hr>
                    </div>
                    <div className='tax-refund'>
                      <Accordion >
                        <Accordion.Item eventKey="0" className='rounded-0'>
                          <Accordion.Header className='rounded-0 accordion '><p className='nav-text'>My Info</p></Accordion.Header>
                          <Accordion.Body className='accordian rounded-0 p-0'>
                            <div className='nav-links'>
                              <Nav.Link className='rounded-0'><Link to="marital-status"><p className='nav-text rounded-0'>Maritial status</p></Link></Nav.Link>
                              <Nav.Link className='rounded-0'> <p className='nav-text rounded-0'>view all tax returns</p></Nav.Link>
                              <Nav.Link className='rounded-0'><Link to="province"><p className='nav-text rounded-0'>Province of residence</p></Link></Nav.Link>

                              <Nav.Link className='rounded-0'><p className='nav-text rounded-0'>Hemanth's change in residence</p></Nav.Link>

                              <Nav.Link className='rounded-0'><Link to="citizenship"> <p className='nav-text rounded-0'>Hemanth's Canadian residence</p></Link></Nav.Link>

                              <Nav.Link className='rounded-0'> <Link to="contact"><p className='nav-text rounded-0'>Contact information</p></Link></Nav.Link>

                              <Nav.Link className='rounded-0'><Link to="dependants"> <p className='nav-text rounded-0'>Dependences information</p></Link></Nav.Link>

                              <Nav.Link className='rounded-0'><Link to="personal-info"> <p className='nav-text rounded-0'>Hemanths's personal information</p></Link></Nav.Link>

                              <Nav.Link className='rounded-0'><Link to="tax-info"> <p className='nav-text rounded-0'>Personal info summery</p></Link></Nav.Link>

                              <Nav.Link className='rounded-0'><p className='nav-text rounded-0'>What's new Tax</p></Nav.Link>
                              <Nav.Link className='rounded-0'><p className='nav-text rounded-0'>Get strated</p></Nav.Link>
                              <Nav.Link className='rounded-0'><p className='nav-text rounded-0'>Personal Tax profile for Hemanth</p></Nav.Link>

                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>

                    </div>

                  </div>

                  <div className='position-absolute bottom-0 start-0 end-0'>
                    <div className='nav-basic py-4 ps-3'>
                      <Nav.Link className='rounded-0 nav-text-bottom'><p className='nav-text rounded-0'>What's new Tax</p></Nav.Link>
                      <Nav.Link className='rounded-0 nav-text-bottom'><p className='nav-text rounded-0'>Get strated</p></Nav.Link>
                      <Nav.Link className='rounded-0 nav-text-bottom'><p className='nav-text rounded-0'>Personal Tax profile for Hemanth</p></Nav.Link>
                    </div>
                  </div>

                </Col>

              </Row>

            </Offcanvas.Body>
          </Offcanvas>
        </div>
        <div className='d-flex justify-content-end w-100 '>
          <Nav.Link className='mx-2 d-none d-sm-block'>
            <div className='d-flex align-items-center p-2 question-iconhover'>
              <FontAwesomeIcon icon={faCircleQuestion} style={{ color: "#02c9e3", }} className='p-1' />
              {/* <div className='question-icon'></div> */}
              <div><p>Help</p></div>
            </div>
          </Nav.Link>
          <div className='d-flex pt-1 align-items-center language-iconhover'>
            <div className='language-icon'></div>
            {/* <GoogleTranslateWidget/> */}
            <div>

            </div>
          </div>

        </div>
      </div>
      <hr className='mt-1'></hr>
    </>
  )
}

export default Helpbar
