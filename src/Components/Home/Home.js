import {Row, Col} from "react-bootstrap"
import HomeNavbar from "./HomeNavbar";
import HomePage from "./HomePage";
import "./Home.css"

const Home = () =>{
    return (
        <>
        <Row className="w-100 Home-page">
            <Col >
                <HomePage />
            </Col>
            <Col sm={4} lg={3} xl={2} xs={5} className="home-navbar1 p-0">
                <HomeNavbar />
            </Col>
        </Row>
        </>
    )
}

export default Home