export default function Card({cardHeading, cardBody}){
    return(
        <div className="cardLayout">
            <div className="card-heading">
                <h3>{cardHeading}</h3>
            </div>
            <div className="card-body">
                <p>{cardBody}</p>
            </div>
        </div>
    )
}