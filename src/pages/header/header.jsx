import React from 'react';
import { Button, Row, Col } from 'reactstrap';
import ReactRoundedImage from "react-rounded-image";
import Avatar from "../../assets/images/avatar.png";
import Title from "../../assets/images/logo.png";
import Logout from "../../assets/images/Icons/Logout.svg";
import Menu from "../../assets/images/Icons/Menu.svg";

const Header =()=>{


    const goHome = () => {
        window.location.reload();
    }

    return (
        <>
            <div className="pc userInfoPc" >
                <Row>
                    <Col className="center-image" onClick={()=>goHome()} >
                        <img src={Title} alt=".." width="100" height="40"></img>
                    </Col>
                </Row>
                <Row>
                    <Col className="center-image panding-image" >
                        <ReactRoundedImage
                            image={Avatar}
                            roundedColor="#566cd6"
                            imageWidth="150"
                            imageHeight="150"
                            roundedSize="13"
                            borderRadius="70"
                        />
                    </Col>
                </Row>
                <br/><br/>
                <Row>
                    <Col>
                    <h3 className="player-pokemon">ASHK123</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5 className="level-text">Level 1</h5>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <h6 className="description-text">description</h6>
                    </Col>
                </Row>
                <Row>
                    <Col style={{padding:"10em 2em 1em 2em"}}>
                        <Button className="ButtonLogOut" size="lg">
                            <img className="imgLogOut" src={Logout} alt=".." width="20" height="20" />
                            <h6 className="titleLogOut">LOG OUT</h6>
                        </Button>  
                    </Col>
                </Row>
            </div>
            <div className="mobil">
                <Row className="userinfoMobil">
                    <Col className="userMenuMobil" sm="2" xs="2">
                        <img src={Menu} alt=".." width="60" height="30" ></img>
                    </Col>
                    <Col className="userImageTitle"  onClick={()=>goHome()} sm="10" xs="10" >
                        <img src={Title} alt=".." width="100" height="40"></img>
                    </Col>
                </Row>
            </div>
        </>
    );
    
}

export default Header;