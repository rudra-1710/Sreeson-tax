import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./PreSummary.scss"
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';




const PerSummary = () => {
  return (
    <Container className='pre-summ py-5'>
        <div className='profile-box py-4'>
        <div className='d-flex justify-content-center  my-3'>
            <div className='profile '></div>
        </div>
        <h4 className='text-center'>Your personal info summary</h4>
        </div>
        <div className='py-5'>
          <div>
            <Row className='py-3'>
              <div className='d-flex justify-content-between'>
              <h4>Hemanth Lavu</h4>
             <Link className='px-3' >Edit</Link>
             </div>
             <Col >
                <p className='py-1'><b>Sin</b></p>
                <p>.......123  <span>Show</span></p>
              </Col>
              <Col >
              <p className='py-1'><b>Date of birth</b></p>
              <p>March 25 ,1997</p>
              </Col>
            </Row><hr />
            <Row className='py-3'>
            <div className='d-flex justify-content-between'>
              <h4></h4>
             <Link className='px-3' >Edit</Link>
             </div>
              <Col >
                <p className='py-1'><b>Sin</b></p>
                <p>Social Insurance Number needed</p>
              </Col>
              <Col >
              <p className='py-1'><b>Date of birth</b></p>
              <p>N/A</p>
              </Col>
            </Row><hr />
            <Row className='py-3'>
              <div className='d-flex justify-content-between'>
              <h4>Marital status</h4>
             <Link className='px-3' >Edit</Link>
             </div>
              <Col >
                <p>Livin relation</p>
              </Col>
            </Row><hr />
            <Row className='py-3'>
              <div className='d-flex justify-content-between'>
              <h4>Dependants</h4>
             <Link className='px-3' >Edit</Link>
             </div>
              <Col >
                <p>none</p>
              </Col>
              <Col className='justify-content-end d-flex'>
              </Col>
            </Row><hr />
            <Row className='py-3'>
              <div className='d-flex justify-content-between'>
              <h4>Province of residence</h4>
             <Link className='px-3' >Edit</Link>
             </div>
              <Col >
                <p>Yukon</p>
              </Col>
            </Row><hr />
            <Row className='py-3'>
              <div className='d-flex justify-content-between'>
              <h4>Canadian residency</h4>
             <Link className='px-3' >Edit</Link>
             </div>
              <Col >
                <p>Canadian residency has changed</p>
                <p>Yes</p>
              </Col>
            </Row><hr />
            <Row className='py-3'>     
              <div className='d-flex justify-content-between'>
              <h4>Canadian Citizenship</h4>
             <Link className='px-3' >Edit</Link>
             </div>
              <Col >
                <p>No</p>
              </Col>
            </Row><hr />
            <Row className='py-3'>
             <div className='d-flex justify-content-between'>
             <h4>Contact info</h4>
             <Link className='px-3' >Edit</Link>
             </div>
              <Col >
                <p><b>Mailing adress</b></p>
                <p>hello@gmail.com</p>
              </Col>
              <Col >
              <p><b>Phone Number</b></p>
                <p>(123) 456-7890</p>
              </Col>
              <Col >
              <p><b>Preffered Language</b></p>
                <p>English</p>
              </Col>
            </Row>
          </div>
        </div>
        <hr className='mt-2'></hr>
        <div className='d-flex justify-content-between'>
          <div className='d-flex align-items-center btn back-btn'>
            <Link to="/application/personal-info"><FontAwesomeIcon icon={faAngleLeft} className='pe-1'/>
            back</Link>
          </div>
          <Link to="/application/whats"><div className='btn continue-btn'>Continue</div></Link>
        </div>
    </Container>
  )
}

export default PerSummary