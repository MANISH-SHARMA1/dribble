import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BiSolidCameraPlus } from "react-icons/bi";
import { axiosClient } from "../axiosClient";

function CreateProfile() {
  const [userImg, setUserImg] = useState("");
  const [location, setLocation] = useState("");

  const navigate = useNavigate();
  const params = useParams();

  // function handles the image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      if (fileReader.readyState === fileReader.DONE) {
        setUserImg(fileReader.result);
      }
    };
  };

  // function handles the submission of the image and location
  const submitImage = async (e) => {
    try {
      e.preventDefault();
      await axiosClient.put(`/${params.id}`, {
        userImg,
        location,
      });
      setUserImg("");
      setLocation("");

      // after successfull submission it auto navigates to inquiry page
      navigate(`/inquiry/${params.id}`);
    } catch (error) {
      console.log("Error from create profile: ", error);
    }
  };

  return (
    <div className="font-bold mx-10 my-5 ">
      <p className="italic text-amber-800 text-xl">dribble</p>
      <div className="md:flex md:justify-center">
        <div>
          <p className="text-2xl md:text-3xl ">
            Welcome! Let's create your profile
          </p>
          <p className="text-gray-400 font-normal my-5">
            Let others get to know you better! You can do these later
          </p>

          <form onSubmit={submitImage}>
            <p className="text-lg md:text-xl">Add an avatar</p>
            <div className="flex justify-center items-center gap-10 my-5">
              {userImg ? (
                <div>
                  <img
                    src={userImg}
                    alt="userImg"
                    className="border-2 border-dashed rounded-full w-48 h-48"
                  />
                </div>
              ) : (
                <label
                  htmlFor="inputImg"
                  className="border-2 border-dashed rounded-full p-10 md:p-20"
                >
                  <BiSolidCameraPlus />
                </label>
              )}

              <div className="hidden sm:block">
                <input
                  id="inputImg"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <p className="text-gray-300 font-semibold mt-5">
                  Or choose one of our defaults
                </p>
              </div>
            </div>

            <p className="text-lg md:text-xl my-5">Add your location</p>

            <input
              type="text"
              placeholder="Enter a location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="focus:border-transparent focus:outline-none mb-2"
            />
            <hr className="text-gray-300" />
            <button
              type="submit"
              className=" bg-red-300 text-white font-semibold py-1 px-5 md:px-10 rounded my-6"
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateProfile;
