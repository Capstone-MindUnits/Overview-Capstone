import React from 'react'

function StarChart({ reviewData }) {
    if (!reviewData) {
        return (
            <div><h1>Loading</h1></div>
        )
    } else {
        console.log(reviewData)
        const percentageArray = new Array(reviewData.length)
        console.log(percentageArray)
        return (
            <div className="grid grid-cols-6 gap-4 mt-10 mx-auto">
                <div className="col-span-6 ...">100% of reviews recommended this product</div>
                <div className="... w-16 underline"> 5 stars</div>
                <div className="col-span-5 ... ">
                    <div className="relative pt-2.5  w-64">
                        <div style={{ width: '100%' }} className="overflow-hidden  h-2 text-xs flex bg-gray-200 ">
                            <div style={{ width: 150 }}
                                className=" shadow flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="... w-16 underline">4 stars</div>
                <div className="col-span-5 ...">
                    <div className="relative pt-2.5  w-64">
                        <div style={{ width: '100%' }} className="overflow-hidden h-2 text-xs flex bg-gray-200 ">
                            <div style={{ width: 80 }}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="... w-16 underline">3 stars</div>
                <div className="col-span-5 ...">
                    <div className="relative pt-2.5 w-64">
                        <div className="overflow-hidden h-2 text-xs flex bg-gray-200">
                            <div style={{ width: 200 }}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="... w-16 underline">2 stars</div>
                <div className="col-span-5 ...">
                    <div className="relative pt-2.5  w-64">
                        <div className="overflow-hidden h-2 text-xs flex bg-gray-200">
                            <div style={{ width: 150 }}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="... w-16 underline">1 stars </div>
                <div className="col-span-5 ...">
                    <div className="relative pt-2.5  w-64">
                        <div className="overflow-hidden h-2 text-xs flex bg-gray-200">
                            <div style={{ width: 60 }}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600">
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        )
    }
}

export default StarChart
