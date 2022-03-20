//function for call API weatherMap, makes with async & await, 
//I can't solve it by a simple fetch and .then don't know why, but this method works fine!

export const weatherRequest = async (cityName) => {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=fr&appid=${process.env.REACT_APP_APIKEY}`;
	const result = await fetch(url);
	return await result.json()
	// const res = await result.json();
	// return await detailsWeather(res[0].lat, res[0].lon);
};

// const detailsWeather = async (lat, lon) => {
// 	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=fr&appid=${process.env.REACT_APP_APIKEY}`;
// 	const result = await fetch(url);
// 	return await result.json();
// };
