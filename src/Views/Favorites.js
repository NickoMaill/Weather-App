import { createContext, useContext, useEffect, useState } from "react";
import { weatherRequest } from "../modules/API";
import { FavoritesContext } from "../App";
import CityCard from "../Components/CityCard";

export const FavArrayContext = createContext()

export default function Favorites() {
    const favState = useContext(FavoritesContext);

    const [favArray, setFavArray] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        favState.favorites.forEach(async (city) => {
            const res = await weatherRequest(city)
            favArray.push(res)
            setIsLoaded(true);
        });
    })

    if (isLoaded !== true) {
        return (
            <h1>Favorites</h1>
        )
    }

    return (

            <div>
                <h1>Favorites</h1>
                <div className="fav-container">

                    {favArray.map((city, i) => {
                        if (i === 0 || i <= favArray.length) {

                            return (

                                <CityCard
                                    key={i}
                                    name={city.name}
                                    temp={city.main.temp}
                                    description={city.weather[0].description} />

                            )
                        }
                    })}

                </div>

            </div>
    )
}