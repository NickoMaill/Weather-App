import { createContext, useContext, useEffect, useState } from "react";
import { weatherRequest } from "../modules/API";
import WeatherCard from "../Components/WeatherCard";
import { FavoritesContext } from "../App";
import CityCard from "../Components/CityCard";

export const FavArrayContext = createContext()

export default function Favorites() {
    const favState = useContext(FavoritesContext);
    let provArray = []

    const [favArray, setFavArray] = useState([]);

    const value = {
        favArray: favArray
    }

    useEffect(() => {
        favState.favorites.forEach(async (city) => {
            const res = await weatherRequest(city)
            provArray.push(res)
            // console.log("test", provArray);
        });
    })

    return (
        <FavArrayContext.Provider value={value}>

            <div>
                <h1>Favorites</h1>
                <div className="fav-container">

                    <ul>

                        {provArray.map((city, i) => {
                            if (i === 0 || i <= provArray.length) {
                                console.log("favArray", i);
                                favArray.push(city)

                                return (
                                    <li>
                                        <CityCard key={i} />
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