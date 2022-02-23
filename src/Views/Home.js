import { weatherRequest } from "../Modules/api";
import { useEffect, useState, useContext } from "react";

export default function Home() {
    const [cityName, setCityName] = useState("")
    const [temperature, setTemperature] = useState(null)
    const [weather, setWeather] = useState("")

    const handleChange = (e) => {
        setCityName(e.target.value)
        console.log(cityName);
    }

    // useEffect(() => {
        
    // }, [cityName])

    const handleClick = async () => {
        const res = await weatherRequest(cityName)
        console.log("resHandle",res);
    }



    return (
        <div>
            <h1>Home</h1>

            <input type="text" onChange={handleChange} />
            <button onClick={handleClick}>Rechercher</button>

        </div>
    )
}