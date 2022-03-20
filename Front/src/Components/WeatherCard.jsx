import { useContext } from "react";
import { WeatherContext } from "../Views/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import "../Styles/WeatherCard.css"
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faHeart)

export default function WeatherCards() {

    const weatherState = useContext(WeatherContext)

    return (
        <div className="card-div">
            <div className="title-div">
                <h3>{weatherState.weatherDetails.name}</h3>

            </div>

            <div className="info-div">

                <img src={`http://openweathermap.org/img/wn/${weatherState.weatherDetails.weather[0].icon}@2x.png`} alt="" />
                <span>{weatherState.weatherDetails.weather[0].description}</span>
                <p><strong>Temperature :</strong> {Math.round(weatherState.weatherDetails.main.temp)}°</p>
                <p><strong>Humidité :</strong> {Math.round(weatherState.weatherDetails.main.humidity)} %</p>
                <p><strong>Vents :</strong> {Math.round(weatherState.weatherDetails.wind.speed * 3, 347)} KM/H</p>

            </div>
            <div className="icon-div">
                <FontAwesomeIcon className="fav-icon" icon="fa-solid fa-heart" />
            </div>


        </div>
    )
}