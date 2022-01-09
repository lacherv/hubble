const Card = ({_item: { id, title, body, image} }) => {
    return (
        <div>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <div>
                <img src={`./images/${image}`} alt="" />
            </div>
        </div>
    );
}

export default Card;