import React from 'react'

function ProductInfo() {
    return (
        <div className='w-1/3 text-left ' >
            <div className="w-1/4" >
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
                <p>see all here</p>

            </div>
            <h5>CATEGORY</h5>
            <h1 className="text-3xl "><strong>Expanded Product Name</strong></h1>
            <p >$365</p>
        </div>
    )
}

export default ProductInfo
