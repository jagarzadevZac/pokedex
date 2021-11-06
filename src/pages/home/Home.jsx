import React, { useState } from "react";
import Header from "../header/header";
import { Card, Row, Col ,InputGroup ,Input } from 'reactstrap';
import LayoutPokemons from "../pokemon/Layout";
import Back from "../../assets/images/Icons/Back.svg";
import Search from "../../assets/images/Icons/Search.svg";

const HomePokedex = ()=>{

    const [searchPokemon, setSearchPokemon] = useState("");
    const [find, setFind] = useState(false);
    const [showButtonHome, setShowButtonHome] = useState(false);
    const goSearch = ()=>{
        setFind(true);
        setShowButtonHome(true);
    };
    const goHome = () =>{
        setFind(false);
        setShowButtonHome(false);        
    }
    
    return(
        <section>
        <Row >
            <Col lg="2" md="3" xs="12" style={{backgroundColor:"#566cd6"}}>
                <Header />
            </Col>
            <Col lg="10" md="9" xs="12">
                <Row >
                    <Card style={{border:" 0px",margin:"20px"}}>
                        <Row>
                            <Col lg="6" md="4" xs="4">
                                <span className="round" onClick={()=>goHome()}  style={{visibility:(showButtonHome === false ? "hidden" : "")}}>
                                    <img src={Back}  alt=".." width="20" height="20"/>
                                </span>
                                <br></br>
                            </Col>
                            <Col lg="6" md="8" xs="8" >
                                 <InputGroup style={{width:"75%"}}>
                                    <Input 
                                        id="search"
                                        style={{width:"40%"}}
                                        values={searchPokemon}
                                        onKeyUp={e =>setSearchPokemon(e.target.value)}
                                        onKeyPress={e => {
                                            if (e.key === 'Enter') goSearch(e);
                                        }}
                                    />
                                    <span className="round"  onClick={()=> goSearch()}  >
                                        <img src={Search}  alt=".." width="20" height="20"/>
                                    </span>
                                </InputGroup>
                            </Col>
                        </Row>
                    </Card>
                </Row>
                <Row>
                    <Card body style={{border:" 0px"}}>
                        <LayoutPokemons searchPokemon={searchPokemon} find={find} goSearch={goSearch} />
                    </Card>
                </Row>
            </Col>
        </Row>
        </section>
    )
}

export default HomePokedex;