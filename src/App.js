import React from 'react'
import OverView from './OverView/OverView'
import RatindAndReview from './Rating&Reviews/RatingAndReview'
import ProductList from './Product-List/ProductList'
import QnA from './QnA/QnA'
function App() {
    return (

        <div class=" grid grid-rows-4 ">
            <div className='col-span-4'> <OverView /> </div>
            <div className='col-span-4'><ProductList /></div>
            <div className='col-span-4'><QnA /></div>
            <div className='col-span-4'><RatindAndReview /></div>
        </div>

    )
}

export default App
