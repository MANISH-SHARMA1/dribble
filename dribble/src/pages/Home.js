import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { axiosClient } from "../axiosClient";
import { useParams } from "react-router-dom";
import { RiMailCheckFill } from "react-icons/ri";

function Home() {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    // function gets the profile of the user
    async function getInfo() {
      try {
        const response = await axiosClient.get(`/profile/${params.id}`);
        setData(response.data);
      } catch (error) {
        console.log("error while receiving profile: ", error);
      }
    }
    getInfo();
    sendMail();
  }, []);

  // function calls the comfirmation mail api
  async function sendMail() {
    try {
      await axiosClient.post("/confirmationMail", {
        email: `${data?.email}`,
      });
    } catch (error) {
      console.log("error while sending mail: ", error);
    }
  }

  return (
    <div>
      {/* navbar component represents the navbar */}
      <Navbar props={data?.avatar?.url} />

      <hr className="text-gray-300" />

      <div className="text-gray-500 p-20 text-center">
        <p className="text-black font-bold mb-5 text-2xl">
          Please verify your email...
        </p>
        
        <p>
          <RiMailCheckFill size={170} className="mx-auto text-gray-400" />
        </p>

        <p>
          Please verify your email address. We've sent a confirmation email to:
        </p>
        <p className="text-black font-bold my-5">{data?.email}</p>
        <p>
          Click the confirmation link in that email to begin using Dribbble.
        </p>
        <p className="my-5">
          Didn't receive the email? Check your Spam folder, it may have been
          caught by a filter. If you still don't see it, you can{" "}
          {/* user can click the below link to resend the email */}
          <span
            className="text-red-500 cursor-pointer"
            onClick={() => sendMail()}
          >
            resend the confirmation email.
          </span>
        </p>

        {/* here we can write the logic to update the email if needed */}
        <p>
          Wrong email address? <span className="text-red-500">Change it.</span>
        </p>
      </div>

      {/* footer component represents the footer */}
      <Footer />
    </div>
  );
}

export default Home;
