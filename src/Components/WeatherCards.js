import { useContext } from "react";
// import { FavoritesContext } from "../App";
import { WeatherContext } from "../Views/Home";

export default function WeatherCards() {

    const weatherState = useContext(WeatherContext)

    return(
        <div>

            <h3>{weatherState.weatherDetails.name}</h3>
            <h5>Temperature : </h5>
            <p>{Math.round(weatherState.weatherDetails.main.temp)}°</p>
            <span>{weatherState.weatherDetails.weather[0].description}</span>

        </div>
    )
}