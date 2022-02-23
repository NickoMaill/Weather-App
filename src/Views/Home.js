import { weatherRequest } from "../Modules/api";
import { useEffect, useState, useContext } from "react";

export default function Home() {
    const [cityName, setCityName] = useState("")
    const [temperature, setTemperature] = useState(null)
    const [weather, setWeather] = useState("")

    const handleChange = (e) => {
        setCityName(e.target.value);
        console.log(cityName);
    }

    const handleClick = async () => {
        const res = await weatherRequest(cityName);
        setCityName(res.name)
        setTemperature(res.main.temp)
        setWeather(res.weather[0].description)
        console.log("resHandle",res);
        console.log("City",cityName);
        console.log("temperature",temperature);
        console.log("weather",weather);
    }

    const addFavorites = () => {
        
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