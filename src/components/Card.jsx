import "../styles/Card.css";

const Card = ({ id, name, image, cardClickHandle }) => {
    return(
    <div onClick={() => cardClickHandle(id)} className="card">
        <div className="img-wrapper">
            <img src={image} alt={name} />
        </div>
        <div className="content-wrapper">
            <p>{name}</p>
        </div>
    </div>
    )
}

export default Card;