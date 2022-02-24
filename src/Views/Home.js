import { weatherRequest } from "../modules/API";
import { useState, useContext, createContext, useEffect } from "react";
import { FavoritesContext } from "../App";
import WeatherCard from "../Components/WeatherCard";

export const WeatherContext = createContext()

export default function Home() {

    const favState = useContext(FavoritesContext);

    const [inputValue, setInputValue] = useState("");
    const [weatherDetails, setWeatherDetails] = useState({});
    const [isLoaded, setIsLoaded] = useState(false)

    const value = {
        weatherDetails: weatherDetails,
        setWeatherDetails: setWeatherDetails
    }

    useEffect(async () => {
        const res = await weatherRequest("Paris")
        setWeatherDetails(res);
        setIsLoaded(true);
        console.log(weatherDetails);
    }, [])

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleClick = async () => {
        const res = await weatherRequest(inputValue);
        setWeatherDetails(res)
        console.log("resHandle", weatherDetails);
    }

    const addFavorite = () => {

        if (favState.favorites.includes(weatherDetails.name)) {
            console.warn("already added");
            return true
        } else {
            favState.favorites.push(weatherDetails.name)
            console.info("ajouté!");
            console.log("arrayFav", favState.favorites);
        }

    }

    if (isLoaded !== true) {
        return (
            <div>

                <h1>Home</h1>

                <input type="text" onChange={handleChange} />
                <button onClick={handleClick}>Rechercher</button>
                <button onClick={addFavorite}> Ajouter aux favoris </button>

            </div>
        )
    }

    return (
        <WeatherContext.Provider value={value}>

            <div>

                <h1>Home</h1>

                <input type="text" onChange={handleChange} />
                <button onClick={handleClick}>Rechercher</button>
                <button onClick={addFavorite}> Ajouter aux favoris </button>
                <WeatherCard />

            </div>

        </WeatherContext.Provider>
    )
}