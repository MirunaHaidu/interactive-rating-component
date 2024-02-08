import './ThankYOu.css'


const ThankYou = ({ selectedRating }) => {
    return (
        <div className="thank-you-container">
            <div className="picture">
                <img src="./images/illustration-thank-you.svg" alt="Star Icon" />
            </div>


            <span className="rating-text">You selected {selectedRating} out of 5</span>

            <div className="thank-you-text">
                <h1>Thank you!</h1>
                <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to fet in touch!</p>
            </div>

        </div>
    )

}

export default ThankYou