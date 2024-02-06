import './RatingButton.css'

const RatingButton = ({ value, onClick}) => {
    return (
        <button className="rating-button" onClick={() => onClick(value)}>
            {value}
        </button>
    )
}

export default RatingButton