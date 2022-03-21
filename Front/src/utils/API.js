// const dotenv = require('dotenv')

const weatherRequest = (cityName) => {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=fr&appid=${process.env.REACT_APP_APIKEY}`;

	return(
		fetch(url)
		.then(res => res.json())
		.catch(err => {
			console.error(err);
		})
	)
};

export default weatherRequest