import React from 'react'
import "./HomePage.css";
import {Container, Nav} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChevronDown } from '@fortawesome/free-solid-svg-icons';
import ReturnData from './ReturnData';
import image from '../../assets/images/mobile_rocket.png'
import Helpbar from '../CommonComponents/Helpbar';

const HomePage = () => {
  return (
    <>
    <Helpbar />
    <Container>
      <div>
      <div className='d-flex flex-column'>
        <div className='image-logo center mt-4 mb-3'>
          <img src={image} alt="doc-logo"  />
        </div>
        <div className='center'><h4 className='greet mb-3'>Great to see you again!</h4></div>
        <div className='center mb-4'>
          <p className='text-center'>
            this is your home base for creating new tax returns, switching between returnsin progress and viewing previous year returns
          </p>
        </div>
      </div>
      <div className='d-flex refil'>
        <p >Make adjustment to your field returns and Submit them online to the CRA via </p>
        <Nav.Link href='#'><p className='theme-color'>&nbsp;ReFILE</p></Nav.Link>
      </div>
      </div>
      <div>
        <ReturnData />
      </div>
      <div className='d-flex justify-content-between align-items-center p-3 returns-open' >
        <div>
          <p>Access your filed tax  returns</p>
        </div>
        <div>
          <Nav.Link>
            <p>open <FontAwesomeIcon icon={faChevronDown} style={{color: "#02c9e3",}} /></p>
          </Nav.Link>
        </div>
      </div>
      <div className='d-sm-flex d-block justify-content-center py-2 align-items-center'>
            <p className='d-flex justify-content-center'>Looking for older version of  Sreeson Tax? &nbsp;</p>
            <p className='d-flex justify-content-center py-2'><Nav.Link className='theme-color'>Sign in to 2021</Nav.Link> &nbsp; | &nbsp; <Nav.Link className='theme-color'>Sign in to 2020</Nav.Link></p>
        </div>
        <div className='d-flex justify-content-center py-2'>
          <p className='d-flex align-items-center theme-color'>
            Importent Offer Details and Discussions &nbsp; <FontAwesomeIcon icon={faChevronDown} style={{color: "#02c9e3",}} />
          </p>
        </div>
        </Container>
    </>
  )
}

export default HomePage
