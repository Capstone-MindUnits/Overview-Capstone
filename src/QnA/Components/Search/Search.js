import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p className="font-sans font-ms text-sm text-gray-600 mb-4">
            QUESTIONS & ANSWERS
          </p>
        </div>
        <form className="relative">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-800 "
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-medium text-black placeholder-gray-600 border  border-gray-600 rounded-none py-2 pl-4 font-bold text-xs h-12	"
            type="text"
            aria-label="Filter projects"
            placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
          />
        </form>
      </div>
    );
  }
}

export default Search;
