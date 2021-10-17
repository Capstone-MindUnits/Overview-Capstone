import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styleAsync, selectStyle, thisstyle, currentStyle, dataAsync, selectProduct } from '../../feature/ProductSlice';


function StyleSelector({ styles }) {

    console.log(styles)
    if (styles !== null) {

        return (
            <div className='text-left'>
                <p><strong> STYLE</strong> {'>'} {styles.results[0].name} </p>
                <div className='flex flex-row '>
                    <div className="m-2 border border-black testc rounded-full h-16 w-16  justify-center..."></div>
                    <div className="m-2 border border-black testc rounded-full h-16 w-16  justify-center..."></div>
                    <div className="m-2 border border-black testc rounded-full h-16 w-16  justify-center..."></div>
                    <div className="m-2 border border-black testc rounded-full h-16 w-16  justify-center..."></div>
                </div>
                <div className='flex flex-row '>
                    <div className="m-2 border border-black testc rounded-full h-16 w-16  justify-center..."></div>
                    <div className="m-2 border border-black testc rounded-full h-16 w-16  justify-center..."></div>
                    <div className="m-2 border border-black testc rounded-full h-16 w-16  justify-center..."></div>
                    <div className="m-2 border border-black testc rounded-full h-16 w-16  justify-center..."></div>
                </div>

            </div>
        )
    }
    else {
        return 'please wait...'
    }

}

export default StyleSelector
