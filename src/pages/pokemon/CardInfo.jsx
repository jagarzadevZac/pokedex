import { Card,CardBody,CardTitle ,CardSubtitle ,CardFooter} from "reactstrap";
import BadgeTypePokemonInfo from "./BadgeTypePokemon";

const CardInfoPokemon =({id,name,image,types,getIdPokemon,goSearch})=>{
    
    return(     
    <div>
        <Card onClick={()=>{getIdPokemon(id); goSearch()}} style={{width:"95%"}} >
            <CardBody className="cardInfo">
                <CardTitle 
                    tag="h5" 
                    style={{textAlign:"center"}}>
                    {name}
                </CardTitle>
                <CardSubtitle
                    style={{textAlign:"center"}}
                    className="mb-2 text-muted"
                    tag="h6"
                >
                {id}
                </CardSubtitle>
                <img src={image} alt=".." width="200" height="200"  style={{margin:"auto",display:"block"}}/>
                <CardFooter style={{textAlign:"center",backgroundColor:"rgb(255 252 252 / 3%)"}}>
                    {Object.values(types).map(e => 
                        <BadgeTypePokemonInfo type={e.type.name} key={e.slot} />
                    )}
                </CardFooter>
            </CardBody>
        </Card>
    </div>
    );
}

export default CardInfoPokemon;