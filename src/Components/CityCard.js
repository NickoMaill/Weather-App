import { useContext } from "react";
import { FavArrayContext } from "../Views/Favorites";

export default function CityCard(props) {

    const arrayState = useContext(FavArrayContext)

    return(
        <div className="card-div">

            <h3>{props.name}</h3>
            <h5>Temperature : </h5>
            <p>{props.temp}°</p>
            <span>{props.description}</span>

        </div>
    )
}