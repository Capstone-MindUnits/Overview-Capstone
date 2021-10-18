
import React from 'react'




function StyleSelector({ styles }) {

    if (styles !== null) {

        return (
            <div className='text-left'>
                <p><strong> STYLE</strong> {'>'} {styles.results[0].name} </p>
                <div className='flex flex-row '>
                    <div className="bg-gray-900 m-2 border border-black  rounded-full h-16 w-16  justify-center..."></div>
                    <div className=" bg-yellow-900 m-2 border border-black  rounded-full h-16 w-16  justify-center..."></div>
                    <div className="bg-green-900 m-2 border border-black  rounded-full h-16 w-16  justify-center..."></div>
                    <div className="bg-blue-900 m-2 border border-black  rounded-full h-16 w-16  justify-center..."></div>
                </div>
                <div className='flex flex-row '>
                    <div className="bg-pink-900 m-2 border border-black  rounded-full h-16 w-16  justify-center..."></div>
                    <div className="m-2 border border-black  rounded-full h-16 w-16  justify-center..."></div>
                    <div className=" bg-black m-2 border border-black  rounded-full h-16 w-16  justify-center..."></div>
                </div>

            </div>
        )
    }
    else {
        return 'please wait...'
    }

}

export default StyleSelector
