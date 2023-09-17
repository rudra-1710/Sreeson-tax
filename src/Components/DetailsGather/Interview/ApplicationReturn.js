import React, { useEffect } from 'react'
import {Row, Col} from "react-bootstrap"
import "../../Home/Home.css"
import InterviewNavbar from './InterviewNavbar'
import Helpbar from '../../CommonComponents/Helpbar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { getCookie } from '../../../utils/services/cookei'


const ApplicationReturn = () => {

  const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
    useEffect(()=>{
        const userToken = getCookie('token');
        if(userToken){
            setIsLogin(true);
        } else {
            setIsLogin(false);
            return navigate('/login');
        }
    });
    function view() {
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
                {/* <div className='text-center bottom-1 left-0 right-0'>
            <div className='my-5'>
              <p>License Agreement Privacy Statement Cobrowse</p>
              <p>© 2023 Sreeson Canada ULC or one of its affiliates. All rights reserved.</p>
            </div>
          </div> */}
            </Col>
        </Row>
      )
    }
  return (
    <>
    {
      isLogin && view()
    }
    </>
  )
}

export default ApplicationReturn;
