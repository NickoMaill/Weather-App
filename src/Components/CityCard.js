export default function CityCard(props) {

    return(
        <div className="card-div">

            <h2>{props.name}</h2>
            <p><strong>Temperature :</strong> {props.temp}°</p>
            <span>{props.description}</span>
            <img src={props.src} alt={props.alt} title={props.title}/>
            <button value={props.value} onClick={props.click}>Supprimer</button>

        </div>
    )
}