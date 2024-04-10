import React from "react";
import { CiBasketball } from "react-icons/ci";
import { FaTwitter, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-gray-100 text-gray-500 p-10">
      <div className="text-center md:flex md:gap-8 py-10">
        <div className="">
          <p className="text-red-500 font-semibold">dribble</p>
          <div>
            <p className="md:w-48 my-5">
              Dribble is the world's leading community for creatives to share,
              grow, and get hired.
            </p>
            <div className="hidden md:flex md:gap-5 ">
              <CiBasketball />
              <FaTwitter />
              <FaFacebookSquare />
              <FaInstagram />
              <FaPinterest />
            </div>
          </div>
        </div>
        <div>
          <p className="text-black font-semibold">For designers</p>
          <p>Go Pro!</p>
          <p>Explore design work</p>
          <p>Design blog</p>
          <p>Overtime podcast</p>
          <p>Playoffs</p>
          <p>Weekly Warm-Up</p>
          <p>Refer a Friend</p>
          <p>Code of conduct</p>
        </div>
        <div>
          <p className="text-black font-semibold">Hire designers</p>
          <p>Post a job opening</p>
          <p>Post a freelance project</p>
          <p>Search for designers</p>
          <p className="text-black font-semibold">Brands</p>
          <p>Advertise with us</p>
        </div>
        <div>
          <p className="text-black font-semibold">Company</p>
          <p>About</p>
          <p>Careers</p>
          <p>Support</p>
          <p>Media Kit</p>
          <p>Testimonials</p>
          <p>API</p>
          <p>Terms of service</p>
          <p>Privacy policy</p>
          <p>Cookie policy</p>
        </div>
        <div>
          <p className="text-black font-semibold">Directories</p>
          <p>Design jobs</p>
          <p>Designers for hire</p>
          <p>Freelance designers for hire</p>
          <p>Tags</p>
          <p>Places</p>
          <p className="text-black font-semibold">Design assets</p>
          <p>Dribbble Marketplace</p>
          <p>Fontspring</p>
          <p>Font Squirrel</p>
        </div>
        <div>
          <p className="text-black font-semibold">Design Resources</p>
          <p>Freelancing </p>
          <p>Design Hiring </p>
          <p>Design Portfolio</p>
          <p>Design Education</p>
          <p>Creative Process</p>
          <p>Design Industry Trends</p>
        </div>
      </div>
      <hr className="text-gray-500" />
      <div className="text-center sm:flex sm:justify-between">
        <p>&#169; 2023 Dribble. All rights reserved.</p>
        <p className="sm:flex sm:items-center sm:gap-2">
          <span className="text-black">20,501,853</span> shots dribbbled{" "}
          <span className="hidden sm:block text-red-900 font-extrabold">
            <CiBasketball />
          </span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
