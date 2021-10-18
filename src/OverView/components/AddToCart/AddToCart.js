import React from 'react'

function AddToCart({styles}) {

    if(styles !== null ){
      return (
        <div className='text-left'>
            <div className="flex flex-row">
                <select className=" w-3/5 h-16 border m-2 border-black font-bold " >
                    <option defaultValue disabled hidden className='mx-4'>SELECT SIZE</option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
   
                </select>
                <select className="w-2/5 h-16 border m-2 border-black font-bold" >
                    <option defaultValue >1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
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
    else{
        return 'please wait ...'
    }
}

export default AddToCart
