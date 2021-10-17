import React from "react";

function AButton({ changeView }) {
  return (
    <div>
      <button
        onClick={() => changeView()}
        className="w-52 h-12  flex flex-row items-center border border-gray-600 "
      >
        <p className="font-sans font-bold text-xs ml-4 text-gray-600">
          MORE ANSWERED QUESTIONS
        </p>
      </button>
    </div>
  );
}

export default AButton;
