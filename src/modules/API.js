import { apiKey } from '../App'

export const weatherRequest = (cityName) => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`
    // const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            detailsWeather(data[0].lat, data[0].lon)
        })

        const detailsWeather = (lat, lon) => {
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
        
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
        
            })
        
        }
}
