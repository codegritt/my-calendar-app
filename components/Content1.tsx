import React from "react";
import ReactPlayer from "react-player";

const Content1 = () => {
  return (
    <>
      <div className="flex p-14 bg-[#FFCE32]">
        <ReactPlayer
          style={{ minWidth: "500px", width: "512px" }}
          className="bg-white shadow-xl overflow-hidden rounded-lg mx-auto mt-8 text-gray-900 font-semibold text-center"
          url="https://www.youtube.com/watch?v=zmyTqpwkXeo&ab_channel=StockFootages"
        />
        {/* <div
          style={{ minWidth: "500px", width: "512px" }}
          className="bg-white shadow-xl overflow-hidden rounded-lg mx-auto mt-8 text-gray-900 font-semibold text-center"
        >
          <div className="flex items-center justify-around px-4 py-6">
            <button className="p-4 rounded-md bg-indigo-200 text-[#1D63FF]">
              <svg
                className="w-4 h-4 stroke-current"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <div className="text-lg text-[#1D63FF]">May, 2020</div>
            <button className="p-4 rounded-md bg-indigo-200 text-[#1D63FF]">
              <svg
                className="w-4 h-4 stroke-current"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-7 grid-col-dense grid-rows-6 p-6 gap-1">
            <div className="text-[#1D63FF]">Mon</div>
            <div className="text-[#1D63FF]">Tue</div>
            <div className="text-[#1D63FF]">Wed</div>
            <div className="text-[#1D63FF]">Thu</div>
            <div className="text-[#1D63FF]">Fri</div>
            <div className="text-[#1D63FF]">Sat</div>
            <div className="text-[#1D63FF]">Sun</div>
            <a
              href="#"
              className="hover:bg-indigo-100 rounded-md p-2 text-gray-500"
            >
              27
            </a>
            <a
              href="#"
              className="hover:bg-indigo-100 rounded-md p-2 text-gray-500"
            >
              28
            </a>
            <a
              href="#"
              className="hover:bg-indigo-100 rounded-md p-2 text-gray-500"
            >
              29
            </a>
            <a
              href="#"
              className="hover:bg-indigo-100 rounded-md p-2 text-gray-500"
            >
              30
            </a>
            <a href="#" className="hover:bg-indigo-100 rounded-md p-2">
              1
            </a>
            <a href="#" className="hover:bg-indigo-100 rounded-md p-2">
              2
            </a>
            <a href="#" className="hover:bg-indigo-100 rounded-md p-2">
              3
            </a>
            <a href="#" className="hover:bg-indigo-100 rounded-md p-2">
              4
            </a>
            <a href="#" className="hover:bg-indigo-100 rounded-md p-2">
              5
            </a>
            <a href="#" className="hover:bg-indigo-100 rounded-md p-2">
              6
            </a>
            <a href="#" className="hover:bg-indigo-100 rounded-md p-2">
              7
            </a>
            <a href="#" className="hover:bg-indigo-100 rounded-md p-2">
              8
            </a>
            <a href="#" className="hover:bg-indigo-100 rounded-md p-2">
              9
            </a>
            <a href="#" className="hover:bg-indigo-100 rounded-md p-2">
              10
            </a>
            <a href="#" className="hover:bg-indigo-100 rounded-md p-2">
              11
            </a>
            <a href="#" className="hover:bg-indigo-100 rounded-md p-2">
              12
            </a>
            <a href="#" className="hover:bg-indigo-100 rounded-md p-2">
              13
            </a>
            <a href="#" className="hover:bg-indigo-100 rounded-md p-2">
              14
            </a>
            <a href="#" className="hover:bg-indigo-100 rounded-md p-2">
              15
            </a>
            <a href="#" className="hover:bg-indigo-100 rounded-md p-2">
              16
            </a>
            <a href="#" className="hover:bg-indigo-100 rounded-md p-2">
              17
            </a>
            <a href="#" className="hover:bg-indigo-100 rounded-md p-2">
              18
            </a>
            <a href="#" className="hover:bg-indigo-100 rounded-md p-2">
              19
            </a>
            <a href="#" className="hover:bg-indigo-100 rounded-md p-2">
              20
            </a>
            <a href="#" className="hover:bg-indigo-100 rounded-md p-2">
              21
            </a>
            <a href="#" className="hover:bg-indigo-100 rounded-md p-2">
              22
            </a>
            <a
              href="#"
              className="hover:bg-[#1D63FF] rounded-md p-2 bg-[#1D63FF] text-white"
            >
              23
            </a>
            <a href="#" className="hover:bg-indigo-100 rounded-md p-2">
              24
            </a>
            <a href="#" className="hover:bg-indigo-100 rounded-md p-2">
              25
            </a>
            <a href="#" className="hover:bg-indigo-100 rounded-md p-2">
              26
            </a>
            <a href="#" className="hover:bg-indigo-100 rounded-md p-2">
              27
            </a>
            <a href="#" className="hover:bg-indigo-100 rounded-md p-2">
              28
            </a>
            <a href="#" className="hover:bg-indigo-100 rounded-md p-2">
              29
            </a>
            <a href="#" className="hover:bg-indigo-100 rounded-md p-2">
              30
            </a>
            <a href="#" className="hover:bg-indigo-100 rounded-md p-2">
              31
            </a>
            <a
              href="#"
              className="hover:bg-indigo-100 rounded-md p-2 text-gray-500"
            >
              1
            </a>
            <a
              href="#"
              className="hover:bg-indigo-100 rounded-md p-2 text-gray-500"
            >
              2
            </a>
            <a
              href="#"
              className="hover:bg-indigo-100 rounded-md p-2 text-gray-500"
            >
              3
            </a>
            <a
              href="#"
              className="hover:bg-indigo-100 rounded-md p-2 text-gray-500"
            >
              4
            </a>
            <a
              href="#"
              className="hover:bg-indigo-100 rounded-md p-2 text-gray-500"
            >
              5
            </a>
            <a
              href="#"
              className="hover:bg-indigo-100 rounded-md p-2 text-gray-500"
            >
              6
            </a>
            <a
              href="#"
              className="hover:bg-indigo-100 rounded-md p-2 text-gray-500"
            >
              7
            </a>
          </div>
        </div> */}

        <div className="flex content-center p-4 lg:py-16 lg:px-8 text-center max-w-xl mx-auto my-auto">
          <div className="px-2">
            <span className="fas fa-bookmark w-12 h-12 lg:w-16 lg:h-16 bg-purple-700 rounded-full text-center text-white text-lg lg:text-2xl pt-4 lg:pt-5"></span>
            <h1 className="text-left text-4xl lg:text-5xl my-3 lg:mt-4">
              You Can Do It When You Calendar It.
            </h1>
            <p className="text-xl text-center">
              A Sync A Day Helps You Work, Rest And Play.
            </p>
            <p className="text-xl text-center">
              Gonna Be A While? Grab A Calendar!
            </p>

            <p className="text-xl text-center">Work Hard, Scheduled Harder</p>

            <button className="bg-[#1D63FF] hover:bg-gray-600 text-white py-2 px-4 lg:py-3 lg:px-6 rounded mt-6 lg:mt-12">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content1;
