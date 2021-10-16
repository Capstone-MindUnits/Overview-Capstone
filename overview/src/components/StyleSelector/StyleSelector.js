import React, { useEffect } from 'react';
    import { useSelector, useDispatch } from 'react-redux';
    import {styleAsync,selectStyle,} from '../../feature/ProductSlice';
function StyleSelector() {

    const style = useSelector(selectStyle);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(styleAsync())  
    }, [dispatch])
     console.log(style)
    if(style !== null){
     return (
        <div className='text-left'>
            <p><strong> STYLE</strong> {'>'} {style.results[0].name} </p>
            <div className='flex flex-row'>
            <div className="m-2 border border-black testc rounded-full h-16 w-16  justify-center..."></div>
            <div className="m-2 border border-black testc rounded-full h-16 w-16  justify-center..."></div>
            <div className="m-2 border border-black testc rounded-full h-16 w-16  justify-center..."></div>
            <div className="m-2 border border-black testc rounded-full h-16 w-16  justify-center..."></div>
            </div>
            <div className='flex flex-row'>
            <div className="m-2 border border-black testc rounded-full h-16 w-16  justify-center..."></div>
            <div className="m-2 border border-black testc rounded-full h-16 w-16  justify-center..."></div>
            <div className="m-2 border border-black testc rounded-full h-16 w-16  justify-center..."></div>
            <div className="m-2 border border-black testc rounded-full h-16 w-16  justify-center..."></div>
            </div>
        </div>
    )   
    }
    else{
        return 'please wait...'
    }
    
}

export default StyleSelector
