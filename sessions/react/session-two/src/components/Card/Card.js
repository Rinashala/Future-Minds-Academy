import "./Card.css";
function Card(title, description, price, currency, features) {
    return <>
        <div className="card">
            <img src="https://via.placeholder.com/150" alt="Card 1" />
            <h3>Basic - <u>{title}$</u></h3>
            <p>{description}</p>
            <ul className="card-list">
                <li>{features[0]}</li>
                <li>{features[1]}</li>
            </ul>
        </div>
    </>
}
export default Card;