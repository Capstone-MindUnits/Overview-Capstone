import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styleAsync, selectStyle, thisstyle, currentStyle, dataAsync, selectProduct } from '../../feature/ProductSlice';


function StyleSelector({ style, styles }) {

    console.log(style)
    if (style !== null) {

        return (
            <div className='text-left'>
                <p><strong> STYLE</strong> {'>'} {style.name} </p>
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
