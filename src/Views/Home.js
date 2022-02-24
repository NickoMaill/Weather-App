import { weatherRequest } from "../modules/API";
import { useState, useContext, createContext } from "react";
import { FavoritesContext } from "../App";

export const WeatherContext = createContext()

export default function Home() {

    const favState = useContext(FavoritesContext);

    const [inputValue, setInputValue] = useState("");
    const [weatherDetails, setWeatherDetails] = useState({});

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleClick = async () => {
        const res = await weatherRequest(inputValue);
        setWeatherDetails(res)
        console.log("resHandle", weatherDetails);
    }

    const addFavorites = () => {

        if (favState.favorites.includes(weatherDetails.name)) {
            console.warn("already added");
            return true
        } else {
            favState.favorites.push(weatherDetails.name)
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
            <button onClick={addFavorites}> Suprimer des favories </button>

        </div>
    )
}