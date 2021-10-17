import React from 'react'

function NumberStars({ reviewData }) {
    const starsArray = []
    var average = 0
    var total = 0
    if (reviewData) {
        for (var i = 0; i < reviewData.length; i++) {
            starsArray.push(reviewData[i].rating)
            total += starsArray[i]
            average = Math.ceil(total / starsArray.length)
        }
    }
    const newStarArray = new Array(starsArray.length)
    newStarArray.fill(average, 0, average)
    newStarArray.fill(0, average, newStarArray.length)

    const checking = () => {
        if (!reviewData) {
            return (
                <div>
                    <h2>
                        Loading
                    </h2>
                </div>
            )
        } else {
            return (
                <div>
                    <p>RATING & REVIEWS</p>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
                    <ul className="flex mt-4">
                        <p className="text-8xl  font-bold ordinal ...">
                            {average}
                        </p>
                        <div className='flex ml-4 mt-6'>
                            <ul className="flex">
                                {newStarArray.map((_, index) => {
                                    return (index < average ?
                                        <li key={index}>
                                            <i className="fas fa-star fa-sm text-black-500 mr-1"> </i>
                                        </li>
                                        :
                                        <li key={index}>
                                            <i className="far fa-star fa-sm text-black-500 mr-1"> </i>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </ul>
                </div>
            )
        }
    }
    return (
        checking()

    )
}

export default NumberStars
