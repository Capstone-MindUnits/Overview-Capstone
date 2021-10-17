import React from 'react'

function AddReviewButton() {
    return (
        <div>
            <button className='flex truncate md:overflow-clip ... font-semibold py-2 px-6  border border-black  inline-block '>
                <p>ADD A REVIEW</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </button>

        </div>
    )
}

export default AddReviewButton
