import React from 'react'
// import Popup from 'reactjs-popup';
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function ButtonsComp({ moreReviews, reviewData }) {
    return (
        <div className='grid-row gap-3  ml-40  flex'>
            <button
                onClick={() => moreReviews()}
                className='truncate md:overflow-clip ... font-semibold py-4 px-3 border border-black '>MORE REVIEWS</button>

            <Popup
                trigger={
                    <button className='flex truncate md:overflow-clip ... font-semibold py-4 px-6  border border-black  inline-block '>
                        <p className='mt-1'>ADD A REVIEW</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>
                }
                modal
            >
                <div className="py-12  ml-12 ">
                    <h2 className="text-2xl font-bold text-gray-700">
                        Add your review
                    </h2>
                    <label className="block mt-12 ">
                        <input
                            type="text"
                            className="mt-1 block"
                            placeholder="Reviewer Email"
                        />
                    </label>

                    <div className="mt-8 max-w-md">
                        <label className="block mt-12">
                            <input
                                type="text"
                                className="mt-1 block "
                                placeholder="Example: Best purchase!"
                            />
                        </label>
                        <div className="grid grid-cols-1 gap-6">
                            <label className="block">
                                <textarea
                                    className="mt-1 block w-full"
                                    rows="2"
                                    placeholder="Review"
                                    spellCheck="false"
                                ></textarea>
                                <div class="mt-2">
                                    <p>
                                        Do you recommend this product ?
                                    </p>
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio" name="accountType" value="personal" />
                                        <span className="ml-2">Yes</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <input type="radio" className="form-radio" name="accountType" value="busines" />
                                        <span className="ml-2">No</span>
                                    </label>
                                </div>
                            </label>

                            <button className="w-48 h-12 flex flex-row items-center border border-gray-600">
                                <p className="font-sans font-bold  text-base ml-4 mr-2 text-gray-600">
                                    Upload Your Photos
                                </p>
                            </button>
                            <button className="w-24 h-12 flex flex-row items-center border border-gray-600">
                                <p className="font-sans font-bold  text-base ml-4 mr-2 text-gray-600">
                                    SUBMIT
                                </p>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div class="flex mt-6">
                            <label class="flex items-center">
                                <input type="checkbox" class="form-checkbox" />
                                <span class="ml-2">I agree to the <span class="underline">privacy policy</span></span>
                            </label>
                        </div>

                    </div>
                </div>
            </Popup>
            <div>
            </div>
        </div>





    )
}

export default ButtonsComp
