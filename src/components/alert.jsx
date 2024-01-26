import React from "react";
import { useState } from "react";
import Close from "../assets/close.svg";
import { Link } from "react-router-dom";

const alert = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    console.log(show);
  };

  return (
    show && (
      <>
        <div
          className="w-11/12 md:w-3/5 h-full p-4 bg-blue-500 rounded-xl flex flex-col items-center justify-center text-white font-inter relative"
          id="alertBanner"
        >
          <div className="flex items-center justify-center">
            <h1 className="text-xl lg:text-2xl font-bold mb-2">UPDATES</h1>
            <button
              className="right-3 top-4 absolute font-bold"
              onClick={handleClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className=" hover:stroke-yellow1 transition ease-in-out duration-300"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center text-md font-medium text-center px-6">
            {/* <div className="  w-5/6 h-full rounded flex items-center justify-center"> */}
            {/* <ul className="font-3xl font-bold text-justify">
            <li>Registrations are open. Submit abstract later.</li>
            <li>Rule Book updated.</li>
          </ul> */}
            <p>
              Registrations are open. Abstracts to be submitted by 01 Febraury
              2024.
            </p>
            <div className="mb-2" />
            {/* <p>Rule Book updated. Eligibility criteria changed.</p> */}
            <Link
              to={"submit"}
              className="border-2 p-2 rounded border-blue-300 text-blue-100 font-bold text-xl"
            >
              Abstract Submission
            </Link>
          </div>
        </div>
      </>
    )
  );
};

export default alert;
