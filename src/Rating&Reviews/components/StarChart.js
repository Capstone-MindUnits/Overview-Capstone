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


        // chartProgress = (object[testArray[i]] / testArray.length) * 100

        for (var i = 0; i < reviewData.length; i++) {
            percentageArray.push(reviewData[i].recommend)
            ratingArray.push(reviewData[i].rating)
            if (percentageArray[i] === true) {
                count++
            }
            percentage = (count / percentageArray.length) * 100
        }

        var testArray = ratingArray.sort((a, b) => {
            return b - a
        })
        var object = {
            5: 0,
            4: 0,
            3: 0,
            2: 0,
            1: 0,
        }
        for (var i = 0; i < testArray.length; i++) {

            object[testArray[i]] = object[testArray[i]] + 1
            console.log(object)

        }
        var percArray = []
        console.log('-----------------', Object.values(object))
        for (var i = Object.values(object).length; i > 0; i--) {

            var chartProgress;
            chartProgress = (object[i] / testArray.length) * 100
            percArray.push(chartProgress)
            console.log('chartt', percArray)
        }




        console.log(reviewData)
        console.log(ratingArray)

        return (

            <div >
                <p> {percentage} % of reviews recommended this product</p>
                {percArray.map((perc, index) => {
                    return (
                        <div className='grid grid-cols-6 gap-4 mt-2 mx-auto'>
                            <div className=" w-16 underline"> {Math.abs(index - percArray.length)} stars</div>
                            <div className="col-span-5 ... ">
                                <div className="relative pt-2.5  w-64">
                                    <div style={{ width: '100%' }} className="overflow-hidden  h-2 text-xs flex bg-gray-200 ">
                                        <div style={{ width: `${perc}%` }}
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
