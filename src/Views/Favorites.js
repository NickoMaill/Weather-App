import { createContext, useContext, useEffect, useState } from "react";
import { weatherRequest } from "../modules/API";
import WeatherCard from "../Components/WeatherCard";
import { FavoritesContext } from "../App";
import CityCard from "../Components/CityCard";

export const FavArrayContext = createContext()

export default function Favorites() {
    const favState = useContext(FavoritesContext);

    const [favArray, setFavArray] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)

    const value = {
        favArray: favArray
    }

    useEffect(() => {
        favState.favorites.forEach(async (city) => {
            const res = await weatherRequest(city)
            favArray.push(res)
            setIsLoaded(true);
            // console.log("test",);
        });
    })

    if (isLoaded !== true) {
        return(
            <h1>Favorites</h1>
        )
    }

    return (
        <FavArrayContext.Provider value={value}>

            <div>
                <h1>Favorites</h1>
                <div className="fav-container">

                    <ul>

                        {favArray.map((city, i) => {
                            if (i === 0) {
                                // console.log("favArray", city);

                                return (
                                    <li key={i}>
                                        <CityCard
                                            name={city.name} 
                                            temp={city.main.temp}
                                            description={city.weather[0].description}/>
                                    </li>
                                )
                            }
                        })}
                    </ul>


                </div>


            </div>

        </FavArrayContext.Provider>
    )
}