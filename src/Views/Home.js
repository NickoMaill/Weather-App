//MODULES IMPORT

import { weatherRequest } from "../modules/API";
import { useState, useContext, createContext, useEffect } from "react";
import { FavoritesContext } from "../App";


//COMPONENTS IMPORT

import WeatherCard from "../Components/WeatherCard";

//STYLE IMPORT
import "../Styles/Home.css"
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
    const [idVerify, setIdVerify] = useState([])

    //set value for context export

    const value = {
        weatherDetails: weatherDetails,
        setWeatherDetails: setWeatherDetails
    }

    //function on page load

    // useEffect(async () => {
    //     const res = await weatherRequest("paris")
    //     setWeatherDetails(res);
    //     setIsLoaded(true);
    //     console.log(weatherDetails);
    // }, [])

    //function for listen input

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    //function for launch weatherRequest() (function locate in API.js)

    const handleClick = async () => {
        if (inputValue === "") {
            console.error("oups");
            return true
        } else {
            const res = await weatherRequest(inputValue);
            setWeatherDetails(res)
            setIsLoaded(true);
            console.log("resHandle", weatherDetails);
        }
    }

    // function for adding a favorite in Favorites view

    const addFavorite = () => {

        if (idVerify.includes(weatherDetails.id)) {
            console.warn("already added");
            return true

        } else if (favState.favorites.length === 3) {
            console.warn("limité a 3 favoris")
            return true

        } else if (inputValue === "") {
            console.warn("chercher d'abord une ville avant de l'ajouter a vos favoris");
            return true

        } else {

            setIdVerify(prevId => [...prevId, weatherDetails.id])
            favState.setFavorites(prevData => [...prevData, weatherDetails])
            console.info("ajouté!");
            console.log("arrayFav", favState.favorites);
            console.log("idArray", idVerify);
        }
    }

    //Guard on page load

    if (isLoaded !== true) {
        return (
            <div>

                <h1>Home</h1>

                <input className="input-search" placeholder="&#128269;  recherche" type="text" onChange={handleChange} />
                <button className="btn search-btn" onClick={handleClick}>Rechercher</button>
                <button className="btn fav-btn" onClick={addFavorite}> Ajouter aux favoris </button>

            </div>
        )
    }

    //main return

    return (
        <WeatherContext.Provider value={value}>

            <div>

                <h1>Home</h1>

                <input className="input-search" placeholder="&#128269;  recherche" type="text" onChange={handleChange} />
                <button className="btn search-btn" onClick={handleClick}>Rechercher</button>
                <button className="btn fav-btn" onClick={addFavorite}> Ajouter aux favoris </button>
                <WeatherCard />

            </div>

        </WeatherContext.Provider>
    )
}