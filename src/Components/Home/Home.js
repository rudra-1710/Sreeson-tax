import {Row, Col} from "react-bootstrap"
import HomeNavbar from "./HomeNavbar";
import HomePage from "./HomePage";
import "./Home.css"
import { useEffect, useState } from "react";
import { getCookie } from "../../utils/services/cookei";
import { useNavigate } from "react-router-dom";

const Home = () =>{
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
    return (
        <>
        {isLogin && (
        <Row className="w-100 Home-page">
            
            <Col sm={4} lg={3} xl={2} xs={5} className="home-navbar1 p-0">
                <HomeNavbar />
            </Col>
            <Col sm={4} lg={3} xl={2} xs={5} className="home-navbar2 p-0">
            
        </Col>
        <Col >
                <HomePage />
            </Col>
        </Row>
        )}
        </>
    )
}

export default Home