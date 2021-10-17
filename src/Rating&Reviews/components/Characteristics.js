import React from 'react'

function Characteristics() {
    return (
        <div style={{ height: '350px' }} className="grid grid-rows-4 mt-20  text-xs">
            <div className="grid grid-rows">
                <p className='font-bold'>Size</p>
                <div className='w-80 flex gap-20 '>
                    <p>Small</p>
                    <p>Perfect</p>
                    <p>Wide</p>
                </div>
                <div className='w-80 flex gap-4'>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex  bg-gray-200 w-20">
                        <div style={{ width: "100%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600">
                        </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex  bg-gray-200 w-20">
                        <div style={{ width: "0%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600">
                        </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex  bg-gray-200 w-20">
                        <div style={{ width: "0%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600">
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-rows ">
                <p className='font-bold'>Width</p>
                <div className='w-80 flex gap-20'>
                    <p>Small</p>
                    <p>Ok</p>
                    <p>Large</p>
                </div>
                <div className='w-80 flex gap-4'>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex  bg-gray-200 w-20">
                        <div style={{ width: "0%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600">
                        </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex  bg-gray-200 w-20">
                        <div style={{ width: "100%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600">
                        </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex  bg-gray-200 w-20">
                        <div style={{ width: "0%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600">
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-rows">
                <p className='font-bold'>Comfort</p>
                <div className='w-80 flex gap-20'>
                    <p>Poor</p>
                    <p>Ok</p>
                    <p>Perfect</p>
                </div>
                <div className='w-80 flex gap-4'>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex bg-gray-200 w-20">
                        <div style={{ width: "0%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600">
                        </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex  bg-gray-200 w-20">
                        <div style={{ width: "0%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600">
                        </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex  bg-gray-200 w-20">
                        <div style={{ width: "100%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600">
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-rows ">
                <p className='font-bold'>Quality</p>
                <div className='w-80 flex gap-20'>
                    <p>Poor</p>
                    <p>Ok</p>
                    <p>Perfect</p>
                </div>
                <div className='w-80 flex gap-4'>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex  bg-gray-200 w-20">
                        <div style={{ width: "0%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600">
                        </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex  bg-gray-200 w-20">
                        <div style={{ width: "0%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600">
                        </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex  bg-gray-200 w-20">
                        <div style={{ width: "100%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Characteristics
