import React from 'react'

function Header({ reviewData }) {

    const checkData = () => {
        if (!reviewData) {
            return (<div >
                <h1></h1>
            </div>)
        } else {
            return (
                <div className='tile-header font-bold'>
                    {reviewData.length} reviews, sorted by
                    <select className="underline ml-3 mt-10 font-bold">
                        <option>relevance</option>
                        <option>helpful</option>
                        <option>newest</option>
                    </select>
                </div>

            )
        }
    }
    return (
        checkData()

    )
}

export default Header
