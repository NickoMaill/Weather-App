export default function CityCard(props) {

    return(
        <div className="card-div">

            <h2>{props.name}</h2>
            <p><strong>Temperature :</strong> {props.temp}°</p>
            <span>{props.description}</span>

        </div>
    )
}