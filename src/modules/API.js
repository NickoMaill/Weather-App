export const weatherRequest = async (cityName) => {
	const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${process.env.REACT_APP_APIKEY}`;
	const result = await fetch(url);
	const res = await result.json();
	return await detailsWeather(res[0].lat, res[0].lon);
};

const detailsWeather = async (lat, lon) => {
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=fr&appid=${process.env.REACT_APP_APIKEY}`;
	const result = await fetch(url);
	return await result.json();
};

