import React from 'react'
import OverView from './OverView/OverView'
import RatindAndReview from './Rating&Reviews/RatingAndReview'
import ProductList from './Product-List/ProductList'
import QnA from './QnA/QnA'
import dotenv from 'dotenv'


function App() {

    return (

        <div className="grid-rows-4 gap-4">
            <div className='col-span-4 '> <OverView /> </div>
            <div className='col-span-4 '><ProductList /></div>
            <div className='col-span-4 my-32'><QnA /></div>
            <div className='col-span-4 my-32'><RatindAndReview /></div>
        </div>

    )
}

export default App
