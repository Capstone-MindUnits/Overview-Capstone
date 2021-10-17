import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

class QButton extends React.Component {
  render() {
    return (
      <div className="QButton">
        <Popup
          trigger={
            <button className="w-40 h-12 flex flex-row items-center border border-gray-600">
              <p className="font-sans font-bold text-xs ml-4 mr-2 text-gray-600">
                ADD A QUESTION
              </p>
              <svg
                width="15"
                height="15"
                className="transform float-right text-gray-800 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          }
          modal
        >
          <div class="py-12 ml-12 ">
            <h2 class="text-2xl font-bold text-gray-700">Ask Your Question</h2>
            <p class="mt-2 text-lg text-gray-600">
              About the 'Product Name Here'
            </p>
            <div class="mt-8 max-w-md">
              <div class="grid grid-cols-1 gap-6">
                <label class="block">
                  <span class="text-gray-700">Question *</span>
                  <textarea
                    class="mt-1 block w-full"
                    rows="3"
                    placeholder="Your Question..."
                    spellcheck="false"
                  ></textarea>
                </label>
                <label class="block">
                  <span class="text-gray-700">Nickame *</span>
                  <input
                    type="text"
                    class="mt-1 block w-full"
                    placeholder="Your Nickname..."
                  />
                </label>
                <label class="block">
                  <span class="text-gray-700">Email *</span>
                  <input
                    type="email"
                    class="mt-1 block w-full"
                    placeholder="Your email..."
                  />
                </label>
                <button className="w-24 h-12 flex flex-row items-center border border-gray-600">
                  <p className="font-sans font-bold  text-base ml-4 mr-2 text-gray-600">
                    SUBMIT
                  </p>
                </button>
              </div>
            </div>
          </div>{" "}
        </Popup>
      </div>
    );
  }
}

export default QButton;
