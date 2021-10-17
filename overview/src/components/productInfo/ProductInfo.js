
import React, { useEffect } from 'react';
function ProductInfo({pro}) {

    if (!pro) {
        return <p>please wait... </p>  
    }
    else {
      return (

            <div className=' text-left content-around' >
                <div className=" flex flex-row  "  >
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />

                    <ul className="flex ">
                        <li>
                            <i className="fas fa-star fa-sm text-black-500 mr-1"></i>
                        </li>
                        <li>
                            <i className="fas fa-star fa-sm text-black-500 mr-1"></i>
                        </li>
                        <li>
                            <i className="fas fa-star fa-sm text-black-500 mr-1"></i>
                        </li>
                        <li>
                            <i className="fas fa-star fa-sm text-black-500 mr-1"></i>
                        </li>
                        <li>
                            <i className="far fa-star fa-sm text-black-500 mr-1"></i>
                        </li>
                    </ul>
                    <u className="text-xs align-baseline  ">Read all reviews</u>

                </div>
                <h5>{pro.category}</h5>
                <h1 className="text-3xl "><strong>{pro.name}  </strong></h1>
                <p >${pro.default_price}</p>
            </div>
        )  
    }

}

export default ProductInfo
