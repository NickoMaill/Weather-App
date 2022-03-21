//MODULES IMPORT
import { useState, useContext, createContext, useEffect } from "react";
import { FavoritesContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

//STYLE IMPORT
import "../Sass/Home.scss";
import weatherRequest from "../utils/API";
//CREATE CONTEXT

export const WeatherContext = createContext();

library.add(faHeart);
//Here start the function App
export default function Home() {
	//create variable for context
	const favState = useContext(FavoritesContext);

	//Create State
	const [inputValue, setInputValue] = useState("");
	const [weatherDetails, setWeatherDetails] = useState({});
	const [isLoaded, setIsLoaded] = useState(false);
	const [idVerify, setIdVerify] = useState([]);

	//set value for context export

	const value = {
		weatherDetails: weatherDetails,
		setWeatherDetails: setWeatherDetails,
	};

	//function on page load

	useEffect(() => {

			weatherRequest("paris").then(res => {
			setWeatherDetails(res);
			setIsLoaded(true);
			console.log(res);
		});
	}, []);

	//function for listen input

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	//function for launch weatherRequest() (function locate in API.js)

	const handleClick = () => {
		if (inputValue === "") {
			console.error("oups");
			return true;
		} else {
			weatherRequest(inputValue).then(res => {
				setWeatherDetails(res);
				setIsLoaded(true);
				console.log(weatherDetails);

			});
		}
	};

	// function for adding a favorite in Favorites view

	const addFavorite = () => {
		if (idVerify.includes(weatherDetails.id)) {
			console.warn("already added");
			return true;
		} else if (favState.favorites.length === 3) {
			console.warn("limité a 3 favoris");
			return true;
		} else {
			setIdVerify((prevId) => [...prevId, weatherDetails.id]);
			favState.setFavorites((prevData) => [...prevData, weatherDetails]);
			console.info("ajouté!");
			console.log("arrayFav", favState.favorites);
			console.log("idArray", idVerify);
		}
	};

	//Guard on page load

	if (isLoaded !== true) {
		return (
			<div>
				<h1>Home</h1>

				<div className="load-div">
					<div className="lds-facebook">
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		);
	}

	//main return

	return (
		<WeatherContext.Provider value={value}>
			<div className="home-content">
				<h1>Home</h1>

				<div className="home-container">
					<input
						className="input-search"
						placeholder="&#128269;  recherche"
						type="text"
						onChange={handleChange}
					/>

					<div className="btn-group">
						<button className="btn search-btn" onClick={handleClick}>
							Rechercher
						</button>
					</div>

					<div className="card-div">
						<div className="title-div">
							<h3>{weatherDetails.name}</h3>
						</div>

						<div className="info-div">
							<img
								src={`http://openweathermap.org/img/wn/${weatherDetails.weather[0].icon}@2x.png`}
								alt={weatherDetails.weather[0].description}
								title={weatherDetails.weather[0].description}
							/>

							<span>{weatherDetails.weather[0].description}</span>
							<p>
								<strong>Temperature :</strong> {Math.round(weatherDetails.main.temp)}°
							</p>
							<p>
								<strong>Humidité :</strong> {Math.round(weatherDetails.main.humidity)} %
							</p>
							<p>
								<strong>Vents :</strong> {Math.round(weatherDetails.wind.speed * 3, 347)} KM/H
							</p>
						</div>

						<div onClick={addFavorite} className="icon-div">
							<FontAwesomeIcon className={"fav-icon"} icon="fa-regular fa-heart" />
							{/* <FontAwesomeIcon icon="fa-regular fa-heart" /> */}
						</div>
					</div>
				</div>
			</div>
		</WeatherContext.Provider>
	);
}
