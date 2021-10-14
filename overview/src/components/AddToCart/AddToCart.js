import React from 'react'

function AddToCart() {
    return (
        <div className='text-left'>
            <div className="flex flex-row">
                <select className=" w-3/5 h-16 border m-2 border-black font-bold " >
                    <option selected disabled hidden>SELECT SIZE</option>
                    <option>1</option>
                    <option>2</option>
                </select>
                <select className="w-2/5 h-16 border m-2 border-black font-bold" >
                    <option selected >1</option>
                    <option>2</option>
                </select>
            </div>
            <div className="flex flex-row">
                <button className="w-4/5 h-16 border m-2 border-black font-bold flex flex-row justify-between items-center " ><p className="mx-4">ADD TO BAG</p><p className="mx-4 text-3xl">+</p></button>
                <button className="w-1/5 h-16 border m-2 border-black font-bold " >
                <i className="far fa-star fa-sm text-black-500 mr-1  "></i>
                </button>
            </div>
        </div>
    )
}

export default AddToCart
