import React from 'react'

function StarChart({ reviewData }) {
    if (!reviewData) {
        return (
            <div><h1>Loading</h1></div>
        )
    } else {

        var percentage;
        var count = 0
        var percentageArray = []
        var ratingArray = []
        for (var i = 0; i < reviewData.length; i++) {
            percentageArray.push(reviewData[i].recommend)
            ratingArray.push(reviewData[i].rating)
            if (percentageArray[i] === true) {
                count++
            }
            percentage = (count / percentageArray.length) * 100
        }

        console.log(reviewData)
        console.log(ratingArray)

        return (

            <div >
                <p> {percentage} % of reviews recommended this product</p>
                {ratingArray.map((rating) => {
                    return (
                        <div className='grid grid-cols-6 gap-4 mt-2 mx-auto'>
                            <div className=" w-16 underline"> {i--} stars</div>
                            <div className="col-span-5 ... ">
                                <div className="relative pt-2.5  w-64">
                                    <div style={{ width: '100%' }} className="overflow-hidden  h-2 text-xs flex bg-gray-200 ">
                                        <div style={{ width: '50%' }}
                                            className=" shadow flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })}


            </div>
        )
    }
}

export default StarChart
