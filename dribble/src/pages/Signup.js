import React, { useState } from "react";
import img from "../assets/signup.png";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../axiosClient";

function Signup() {
  const formFields = {
    name: "",
    username: "",
    email: "",
    password: "",
    termsAccepted: false,
  };

  const [formData, setFormData] = useState(formFields);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const response = await axiosClient.post("/", formData);

      setFormData(formFields);
      navigate(`/createProfile/${response.data._id}`);
    } catch (error) {
      console.log("Error from Signup: ", error);
    }
  };

  return (
    <div className="lg:flex lg:items-center gap-24 mx-10 md:mx-24">
      {/* left-part */}
      <div className="text-amber-800 md:h-screen my-5">
        <div className="bg-yellow-200 p-5 md:p-10 lg:p-14 font-semibold">
          <p className="italic text-amber-800 text-xl">dribbble</p>
          <p className="md:text-3xl font-bold my-4 lg:my-6 ">
            Discover the world's top Designers & Creatives.
          </p>

          <img src={img} alt="img" className="mx-auto" />
        </div>
        <p className="mt-5">
          Art by <span className="underline cursor-pointer">Peter Tarka</span>
        </p>
      </div>

      {/* right-part */}
      <div className="font-bold">
        <p className="text-center sm:text-right mb-2 md:mb-5 font-semibold">
          Already a memeber?{" "}
          <span className="text-blue-800 cursor-pointer">Sign In</span>
        </p>
        <p className="text-2xl text-center sm:text-left">Sign up to Dribble</p>

        {/* signup form */}
        <form className="md:my-10" onSubmit={handleSubmit}>
          <div className="md:flex md:justify-between my-5">
            <div>
              <label htmlFor="name">Name</label> <br />
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-gray-200 rounded p-1 font-normal w-full"
              />
            </div>
            <div className="my-5 md:my-0">
              <label htmlFor="username">Username</label> <br />
              <input
                id="username"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="bg-gray-200 rounded p-1 font-normal w-full "
              />
            </div>
          </div>
          <div className="my-5">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-gray-200 rounded w-full p-1 font-normal"
            />
          </div>
          <div className="my-5">
            <label htmlFor="password">Password</label>
            <br />
            <input
              id="password"
              type="password"
              name="password"
              placeholder="6+ characters"
              value={formData.password}
              onChange={handleChange}
              required
              className="bg-gray-200 rounded w-full p-1 font-normal"
            />
          </div>
          <div className="my-5">
            <label htmlFor="checkbox" className="text-gray-600 font-semibold">
              <input
                id="checkbox"
                type="checkbox"
                name="termsAccepted"
                className="border-gray-200 rounded"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
              />
              Creating an account means you're okay with our{" "}
              <span className="text-blue-700 ">
                Terms of Service. Privacy Policy,
              </span>{" "}
              and our default{" "}
              <span className="text-blue-700 ">Notification Settings.</span>
            </label>
          </div>
          <button
            type="submit"
            className=" bg-red-300 text-white font-semibold py-1 px-3 sm:px-8 rounded"
          >
            Create Account
          </button>
        </form>

        <p className="text-gray-600 font-semibold">
          This site is protected by reCAPTCHA and the Google{" "}
          <span className="text-blue-700 ">Privacy Policy</span> and{" "}
          <span className="text-blue-700 ">Terms of Service</span> apply.
        </p>
      </div>
    </div>
  );
}

export default Signup;
