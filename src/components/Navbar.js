import React, { useState } from "react";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(true);
  return (
    <div className="bg-blue-900 py-5 flex justify-around items-center">
      {/* Slide Navbar */}
      <div
        className={`h-[100vh] w-2/3 ${
          toggleNav ? "left-0" : "left-[-100%]"
        }  fixed  p-10 text-white top-0 z-50 bg-blue-800 duration-300 `}
      >
        <button
          onClick={() => {
            setToggleNav(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10 absolute right-5 top-5 rounded bg-white/20 backdrop-blur-md"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="text-2xl">
          <h1>Catagory</h1>
          <p className="pl-5 py-1 my-3 text-[20px]  hover:bg-white/40 hover:backdrop-blur-md rounded">
            Man Collection
          </p>
          <p className="pl-5 py-1 my-3 text-[20px]  hover:bg-white/40 hover:backdrop-blur-md rounded">
            Woman Collection
          </p>
        </div>
      </div>
      <button
        onClick={() => {
          setToggleNav(true);
        }}
        className=" p-1 rounded hover:backdrop-blur-sm hover:bg-white/10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 text-white "
        >
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <h1 className=" uppercase text-white text-xl text-center  ">
        aristocracy
      </h1>
      <div className="flex justify-between space-x-3 items-center">
        <div className="p-1 rounded hover:backdrop-blur-sm hover:bg-white/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </div>
        <div className="p-1 rounded hover:backdrop-blur-sm hover:bg-white/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
