import React from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { BsBagX } from "react-icons/bs";

function Navbar({ props }) {
  return (
    <div className="text-center md:text-justify md:flex md:items-center md:justify-around py-3">
      <div className="block md:flex md:gap-5 md:items-center text-gray-500">
        <p className="font-bold text-black text-left">dribble</p>

        {/* In below links we can provide the path to the links if needed */}
        <div>
          <Link>Inspiration</Link>
        </div>
        <div>
          <Link>Find Work</Link>
        </div>
        <div>
          <Link>Learn Design </Link>
        </div>
        <div>
          <Link>Go Pro</Link>
        </div>
        <div>
          <Link>Hire Designers</Link>
        </div>
      </div>

      <div className="justify-center sm:flex sm:gap-3 sm:items-center text-gray-500">
        {/* here we can write the logic to search content relevant to the website */}
        <div className="flex items-center rounded px-2 bg-gray-100  ">
          <IoIosSearch className="text-lg" />
          <input
            type="text"
            placeholder="Search"
            className="w-20 bg-gray-100 p-1 "
          />
        </div>

        <BsBagX />

        {/* current user image get render here, if provided */}
        <div>
          <img
            src={props}
            alt="img"
            width="25px"
            height="25px"
            className="rounded-full mx-auto sm:mx-0"
          />
        </div>

        {/* Here we can write the logic to update the image of user, if needed */}
        <button className=" bg-red-300 text-white font-semibold p-1 rounded">
          Upload
        </button>
      </div>
    </div>
  );
}

export default Navbar;
