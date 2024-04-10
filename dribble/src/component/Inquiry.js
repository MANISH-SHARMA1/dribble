import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import designer from "../assets/designer.jpg";
import designer2 from "../assets/designer2.jpg";
import designer3 from "../assets/designer3.jpg";
import { axiosClient } from "../axiosClient";
import { MdChevronLeft } from "react-icons/md";

function Inquiry() {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  // handles the option that is selected on change
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // handles the submission of the selected option
  const handleSubmit = async () => {
    try {
      await axiosClient.put(`/option/${params.id}`, {
        selectedOption,
      });

      // after successfull submission page navigates to home page
      navigate(`/home/${params.id}`);
    } catch (error) {
      console.log("Error from Inquiry: ", error);
    }
  };

  const options = [
    {
      img: designer,
      description: "I'm a designer looking to share my work",
    },
    {
      img: designer2,
      description: "I'm looking to hire a designer",
    },
    {
      img: designer3,
      description: "I'm looking for design inspiration",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="font-bold mx-10 my-5 text-center">
        <div className="flex items-center gap-4 text-xl text-left">
          <p className="italic text-amber-800 ">dribble</p>
          <p
            onClick={() => navigate(`/createProfile/${params.id}`)}
            className="bg-gray-300 rounded cursor-pointer"
          >
            <MdChevronLeft />
          </p>
        </div>
        <p className="text-3xl ">What brings you to Dribble?</p>
        <p className="text-gray-500 my-5">
          Select the options that best describe you. Don't worry, you can
          explore other options later.
        </p>

        <div className="sm:flex sm:gap-14 mt-20">
          {options.map((data, idx) => (
            <div className="border rounded-xl p-5 my-5 sm:my-0" key={idx}>
              <img src={data.img} alt="img" />
              <label>
                <p>{data.description}</p>
                <input
                  type="radio"
                  name="group"
                  value={data.description}
                  checked={selectedOption === `${data.description}`}
                  onChange={handleOptionChange}
                />
              </label>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="bg-red-300 text-white font-semibold py-1 px-10 rounded mt-8"
          onClick={(e) => handleSubmit()}
        >
          Finish
        </button>
      </div>
    </div>
  );
}

export default Inquiry;
