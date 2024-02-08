import { useState } from "react"
import RatingButton from "./RatingButton"
import './Rating.css'
import ThankYou from "./ThankYou"

const Rating = () => {
    const [rating, setRating] = useState(null)
    const [submitted, setSubmitted] = useState(false)

    const handleRating = (selectedRating) => {
        setRating(selectedRating)
    }

    const handleSubmit = () => {
        setSubmitted(true)
    }


    return (
        <div className="container">
            {submitted ? (
                <ThankYou selectedRating={rating}/>
            ) : (

            <>

            
            <div className="icon">
                <img src="./images/icon-star.svg" alt="Star Icon" />
            </div>


            <div className="text">
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </div>
            <div className="rating-buttons">
                <RatingButton value={1} onClick={handleRating} />
                <RatingButton value={2} onClick={handleRating} />
                <RatingButton value={3} onClick={handleRating} />
                <RatingButton value={4} onClick={handleRating} />
                <RatingButton value={5} onClick={handleRating} />
            </div>
            <button className="submit-button" onClick={handleSubmit}>SUBMIT</button>
            </>
            )}
        </div>
    )
}


export default Rating