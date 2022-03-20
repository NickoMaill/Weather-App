import { useContext } from "react";
import { FavoritesContext } from "../App";
import CityCard from "../Components/CityCard";
import { DateTime } from "luxon";
import "../Sass/Favorites.scss";

export default function Favorites() {
	const favState = useContext(FavoritesContext);

	// const deleteFavorite = (e) => {

	//     favState.setFavorites(favState.favorites.filter( => favState.favorites[0] !== id ))
	// }

	if (favState.favorites.length === 0) {
		return (
			<div>
				<h1>Favorites</h1>
				<p>pas de favoris</p>
			</div>
		);
	} else {
		return (
			<div>
				<h1>Favorites</h1>

				<div className="fav-container">
					<div className="center-div">
						{favState.favorites.map((cityMap, i) => {
							if (i === 0 || i <= favState.favorites.length) {
								return (
									<CityCard
										key={i}
										name={cityMap.name}
										temp={Math.floor(cityMap.main.temp)}
										description={cityMap.weather[0].description}
										src={`http://openweathermap.org/img/wn/${cityMap.weather[0].icon}@2x.png`}
										alt={cityMap.weather[0].description}
										title={cityMap.weather[0].description}
										humidity={Math.round(cityMap.main.humidity)}
										windSpeed={Math.round(cityMap.wind.speed * 3, 347)}
										value={i}
									/>
								);
							}
						})}
					</div>
				</div>
			</div>
		);
	}
}
