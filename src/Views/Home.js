import { weatherRequest } from "../Modules/api";
import { useState, useContext, createContext } from "react";
import { FavoritesContext } from "../App";

export const WeatherContext = createContext()

export default function Home() {

    const favState = useContext(FavoritesContext);

    const [cityName, setCityName] = useState("");
    const [temperature, setTemperature] = useState(null);
    const [weather, setWeather] = useState("");

    const handleChange = (e) => {
        setCityName(e.target.value);
    }

    const handleClick = async () => {
        const res = await weatherRequest(cityName);
        setCityName(res.name)
        setTemperature(res.main.temp)
        setWeather(res.weather[0].description)
        console.log("resHandle", res);
        console.log("City", cityName);
        console.log("temperature", temperature);
        console.log("weather", weather);
    }

    const addFavorites = () => {

        if (favState.favorites.includes(cityName)) {
            console.warn("already added");
            return true
        } else {
            favState.favorites.push(cityName)
            console.info("ajouté!");
            console.log("arrayFav", favState.favorites);
        }

    }

    return (
        <div>

            <h1>Home</h1>

            <input type="text" onChange={handleChange} />
            <button onClick={handleClick}>Rechercher</button>
            <button onClick={addFavorites}> Ajouter aux favories </button>

        </div>
    )
}