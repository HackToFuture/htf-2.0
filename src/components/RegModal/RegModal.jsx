import React from "react";
import Popup from "reactjs-popup";
import "./RegModal.css";
import { auth, provider } from "../../config/firebase.js";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const RegModal = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState("");
  const [authDone, setAuthDone] = useState(false);
  const googleAuth = (event) => {
    event.preventDefault();
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      sessionStorage.setItem("email", data.user.email);
      sessionStorage.setItem("name", data.user.displayName);
      setAuthDone(true);
      navigate("/registration");
    });
  };
  return (
    <Popup
      trigger={
        <button className="text-white bg-[#0097e4] transition duration-300 ease-in-out text-lg font-bold px-10 py-1 hover:scale-105 rounded-3xl lg:mr-6 ">
          Register
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal bg-slate-50 rounded-lg shadow-md p-4 w-80 mx-auto mt-20 md:w-full lg:w-96">
          <div className="header border-b-2 border-gray-300 py-2 text-xl font-bold flex justify-between items-center">
            <span>Register</span>
            <button
              className="text-gray-500 hover:text-gray-600"
              onClick={close}
            >
              &times;
            </button>
          </div>
          <div className="content py-4 text-sm text-gray-700">
            {/* Your content goes here */}
            {/* Dear participant, if you plan on registering for the 36-hour company
            themed hackathon, an abstract must be submitted along with your
            application. Please make a copy of{" "}
            <a
              className="border-b-2 border-blue-300 text-blue-500 font-bold"
              href="https://docs.google.com/document/d/1b8UOI4Ptn2G0G_Gks3H4MfAa81GuI8QJqq2wPhnBVgY/edit?usp=sharing"
              target="_blank"
            >
              this Google Document
            </a>
            , edit it to fill your abstract details, and copy the link with
            access set to "Anyone on the internet with the link can view". */}
            Dear participants, while registering for the upcoming 36-hour
            company-themed hackathon, please be aware that the open theme is
            exclusively for first-year participants. There is no need to submit
            abstracts during registration; however, we kindly request that you
            submit your abstract before February 1.
            <p>
              {" "}
              <a
                href="https://docs.google.com/document/d/1b8UOI4Ptn2G0G_Gks3H4MfAa81GuI8QJqq2wPhnBVgY/edit?usp=sharing"
                target="_blank"
                className="border-b-2 border-blue-300 text-blue-500 font-bold"
              >
                Format of abstract submission{" "}
              </a>
            </p>
          </div>
          <div className="actions flex flex-col justify-center mt-4">
            <button
              onClick={(e) => googleAuth(e)}
              className="text-text_col_1 bg-bg_color_2 transition duration-300 ease-in-out text-lg font-bold px-6 py-2 hover:scale-105 rounded-md mb-2"
            >
              Company Specific
            </button>
            <a
              href="https://forms.gle/9KwkqhRn3jx86eZDA"
              target="_blank"
              className="w-full"
            >
              <button className="text-text_col_1 w-full bg-bg_color_2 transition duration-300 ease-in-out text-lg font-bold px-6 py-2 hover:scale-105 rounded-md">
                Open theme : 1st years only
              </button>
            </a>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default RegModal;
