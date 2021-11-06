import { useEffect, useState } from "react"
import axios from "axios";
import {Col, Row} from "reactstrap";
import CardInfoPokemon from "./CardInfo";
import DetailsPokemon from "./PokemonDetails";

const LayoutPokemons = ({searchPokemon,find, goSearch})=>{
    const [pokemon, setPokemon] = useState([]);
    const [id, setId] = useState(0);
    const [findPokemon, setFindPokemon] = useState(false);

    const loadData = () => {
		axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
			.then(resp => {
				for (let i = 0; i < resp.data.results.length; i++) {
					axios.get(resp.data.results[i].url)
						.then(result => {
							setPokemon(prevArray => [...prevArray, result.data])
						}).catch(error=> console.log(error));
				}
			}).catch(error=> console.log(error));
	};

    useEffect(loadData, []);


    const getIdPokemon=(id)=>{
        setId(id);
        setFindPokemon(true);
    }


    if(findPokemon === true && id !== 0 && searchPokemon === "" && find === true){
        return(
            <Row>
                <DetailsPokemon name={searchPokemon} id={id}  />
            </Row>
        );

    }else if(find === true && searchPokemon !== ""){
        return(
            <Row>
                <DetailsPokemon name={searchPokemon} id={id}  />
            </Row>
        );
    }else{
        return(
            <Row>
                {pokemon.map((poke, index) => (
                <Col lg={4} md={6} key={index}>
                    <CardInfoPokemon 
                        id={poke.id} 
                        name={poke.name} 
                        image={poke.sprites.front_default} 
                        types={poke.types}
                        getIdPokemon={getIdPokemon}
                        goSearch={goSearch}
                    />
                    <br></br>
                </Col> 
            ))}
            </Row>
        );
    }
}

export default LayoutPokemons;