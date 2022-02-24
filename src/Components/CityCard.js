import { useContext } from "react";
import { FavArrayContext } from "../Views/Favorites";

export default function CityCard(props) {

    const arrayState = useContext(FavArrayContext)

    return(
        <div className="card-div">

            <h2>{props.name}</h2>
            <p><strong>Temperature :</strong> {props.temp}°</p>
            <span>{props.description}</span>

        </div>
    )
}