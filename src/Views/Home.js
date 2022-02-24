//MODULES IMPORT

import { weatherRequest } from "../modules/API";
import { useState, useContext, createContext, useEffect } from "react";
import { FavoritesContext } from "../App";

//COMPONENTS IMPORT

import WeatherCard from "../Components/WeatherCard";

//CREATE CONTEXT

export const WeatherContext = createContext()

//Here start the function App
export default function Home() {

    //create variable for context
    const favState = useContext(FavoritesContext);

    //Create State
    const [inputValue, setInputValue] = useState("");
    const [weatherDetails, setWeatherDetails] = useState({});
    const [isLoaded, setIsLoaded] = useState(false)

    //set value for context export

    const value = {
        weatherDetails: weatherDetails,
        setWeatherDetails: setWeatherDetails
    }

    //function on page load

    useEffect(async () => {
        const res = await weatherRequest("Paris")
        setWeatherDetails(res);
        setIsLoaded(true);
        console.log(weatherDetails);
    }, [])

    //function for listen input

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    //function for launch weatherRequest() (function locate in API.js)

    const handleClick = async () => {
        const res = await weatherRequest(inputValue);
        setWeatherDetails(res)
        console.log("resHandle", weatherDetails);
    }

    // function for adding a favorite in Favorites view

    const addFavorite = () => {

            favState.favorites.push(weatherDetails)
            console.info("ajouté!");
            console.log("arrayFav", favState.favorites);

            // if (favState.favorites.includes(weatherDetails.name)) {
            //     console.warn("already added");
            //     return true
    }

    //Guard on page load

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

    //main return

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