import { useContext } from "react";
import { FavArrayContext } from "../Views/Favorites";

export default function CityCard() {

    const arrayState = useContext(FavArrayContext)

    return(
        <div className="card-div">

            <h3>{arrayState.favArray.name}</h3>
            <h5>Temperature : </h5>
            <p>{Math.round(arrayState.favArray.main.temp)}°</p>
            <span>{arrayState.favArray.weather[0].description}</span>

        </div>
    )
}