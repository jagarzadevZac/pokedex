import { Badge } from "reactstrap";

const BadgeTypePokemonInfo =({type})=>{

    switch (type) {
        case "fire": return <Badge color="warning" pill >{type}</Badge>;
        case "grass": return <Badge color="success" pill >{type}</Badge>;
        case "poison": return <Badge color="secondary" pill >{type}</Badge>;
        case "flying": return <Badge color="info" pill >{type}</Badge>;
        case "water": return <Badge color="primary" pill >{type}</Badge>;
        case "bug": return <Badge color="success" pill >{type}</Badge>;
        default: return <Badge color="secondary" pill >{type}</Badge>;
    }


}

export default BadgeTypePokemonInfo;