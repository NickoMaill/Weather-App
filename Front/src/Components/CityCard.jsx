export default function CityCard(props) {

    return (
        <div className="card-div">

            <h2>{props.name}</h2>
            <img src={props.src} alt={props.alt} title={props.title} />
            <span>{props.description}</span>
            <p><strong>Temperature :</strong> {props.temp}°</p>
            <p><strong>Humidité :</strong> {props.humidity} %</p>
            <p><strong>Vents :</strong> {props.windSpeed} KM/H</p>
            <button value={props.value} onClick={props.click}>Supprimer</button>

        </div>
    )
}