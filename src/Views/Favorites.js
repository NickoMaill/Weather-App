import { useContext, useEffect, useState } from "react";
import { weatherRequest } from "../modules/API";
import { FavoritesContext } from "../App";
import CityCard from "../Components/CityCard";

export default function Favorites() {
    
    const favState = useContext(FavoritesContext);

    return (

        <div>
            <h1>Favorites</h1>

            <div className="fav-container">

                {favState.favorites.map((cityMap, i) => {
                    if (i === 0 || i <= favState.favorites.length) {
                        console.log(i);
                    
                    return (

                            <CityCard
                                key={i}
                                name={cityMap.name}
                                temp={Math.floor(cityMap.main.temp)}
                                description={cityMap.weather[0].description}
                                src={`http://openweathermap.org/img/wn/${cityMap.weather[0].icon}@2x.png`}
                                alt={cityMap.weather[0].description}
                                title={cityMap.weather[0].description} />

                        )

                    }

                })}

            </div>

        </div>
    )
}

