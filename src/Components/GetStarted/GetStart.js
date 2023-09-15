import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';

import gif from "../../assets/images/taxgif.gif"
import { Link } from 'react-router-dom';

const GetStart = () => {
  return (
    <Container>
        <Row>
            <Col md={12} xl={5} className='d-flex justify-content center align-items-center'>
               <div >
               <h3 className='my-3'><b>Let's build your tax profile</b></h3>
                <div>Tell us about your years so we can get a picture of your tax situation</div>
               </div>
            </Col>
            <Col >
                <img src={gif} className='taxgif img-fluid' />
            </Col>
        </Row>
        <hr className='mt-5'></hr>
        <div className='d-flex justify-content-between'>
          <div className='d-flex align-items-center btn'><FontAwesomeIcon icon={faAngleLeft} className='pe-1'/>
            back
          </div>
          <Link to="/application/tax-info"><div className='btn continue-btn'>Continue</div></Link>
        </div>
    </Container>
  )
}

export default GetStart