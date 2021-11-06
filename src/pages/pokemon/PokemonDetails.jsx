import { Card, CardSubtitle,CardTitle,CardText,CardBody,CardFooter, Col, Row } from "reactstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import BadgeTypePokemonInfo from "./BadgeTypePokemon";

const DetailsPokemon = ({id,name})=>{
    let namePokemon= "";
    if(name !== ""){
        namePokemon=name.toUpperCase();
        console.log(namePokemon);
    }
    const [details, setDetails] = useState([]);
    const url = name !=="" ? `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}/` : `https://pokeapi.co/api/v2/pokemon/${id}/` ;
    const loadInfoPokemon =()=>{
        axios.get(url)
            .then(result => {
                console.log(result);
                if(result.request.status === 200){
                    setDetails(result);
                }
            }).catch(error=> console.log(error));
    }

    useEffect(() => {
        
       if(name !== ""){
            loadInfoPokemon();
       }

       if(id !== 0){
            loadInfoPokemon()
       }
    }, [id, name])



    if(details.length === 0){
        return( 
            <div>
                <Card>
                    <br/>
                    <CardBody>
                        <h1 className="noMatch">there are no matches with the search</h1>
                    </CardBody>
                </Card>
            </div>
        )
    }

    return(
        <div>
            <Row>
            <Col lg="6">
                
                <Card >
                    <CardBody className="cardInfo">
                        <img src={details.data.sprites.front_default} alt=".." width="200" height="200"  style={{margin:"auto",display:"block"}}/>
                        <CardFooter style={{textAlign:"center",backgroundColor:"rgb(255 252 252 / 3%)"}}>
                            <img src={details.data.sprites.front_default} alt=".." />
                            <img src={details.data.sprites.back_default} alt=".."/>
                        </CardFooter>
                    </CardBody>
                </Card>
            </Col>
            <br/>
            <Col lg="6">
                <Card>
                    <CardBody className="cardInfo">
                        <CardTitle tag="h2" style={{textAlign:"left"}}>
                            {details.data.name}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                            style={{textAlign:"left"}}
                        >
                            {Object.values(details.data.types).map(e => 
                                <BadgeTypePokemonInfo type={e.type.name} key={e.slot} />
                            )}
                        </CardSubtitle>
                    <CardText>
                        <h5>Pokedex number</h5> 
                        {details.data.id} <br/>
                        <h5>Height</h5>{details.data.height}<br/>
                        <h5>Weight</h5>{details.data.weight}<br/>
                    </CardText>
                        <h5>Shiny</h5>
                        <img src={details.data.sprites.front_shiny} alt=".." />
                        <img src={details.data.sprites.back_shiny} alt=".."/>
                    </CardBody>
                </Card>
            </Col>
            </Row>
        </div>
    );

}

export default DetailsPokemon;