import { apiKey } from '../App'

export const weatherRequest = (cityName) => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            detailsWeather(data[0].lat, data[0].lon)
        })
        .catch((err) => {
            console.error("Error while charging adress", err);
        })

    const detailsWeather = (lat, lon) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log("dataFetch",data);
                return data


            })
            .catch((err) => {
                console.error("Error while charging weather...", err);
            })

    }
}
