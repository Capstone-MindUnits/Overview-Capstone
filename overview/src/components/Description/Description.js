import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectProduct, } from '../../feature/ProductSlice';

function Description() {
    const pro = useSelector(selectProduct);

    if(!pro ){
        return <p>please wait... </p>  
      
    }
    else {
        return (
        <div className="flex ">
            <div className='text-left'>
                <strong>{pro.slogan} </strong>
                <p className="max-w-xl" >{pro.description}</p>
            </div>

            <div className='vl mx-10'></div >

            <div>
                {pro.features.map(el =>
                    <p className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {el.feature}{el.value}
                    </p>
                )}


            </div>

        </div>
    )  
    }
    
}

export default Description
