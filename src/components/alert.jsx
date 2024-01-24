import React from "react";
import { useState } from "react";

export default function alert() {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    console.log(show);
  };
  while (show) {
    return (
      <>
        <div className="w-5/6 h-24 p-5 bg-blue-500 shadow-inner rounded-lg flex flex-col items-center justify-center text-white relative">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-bold">UPDATES</h1>
            <button
              className="right-3 top-1 absolute font-bold"
              onClick={handleClose}
            >
              X
            </button>
          </div>
          <div className="flex flex-col items-center justify-center text-justify">
            {/* <div className="  w-5/6 h-full rounded flex items-center justify-center"> */}
            {/* <ul className="font-3xl font-bold text-justify">
            <li>Registrations are open. Submit abstract later.</li>
            <li>Rule Book updated.</li>
          </ul> */}
            <p className="font-3xl font-bold text-justify">
              Registrations are open. Abstracts to be submitted by 01 Febraury
              2024.
            </p>
            <br />
            <p className="font-3xl font-bold text-justify">
              Rule Book updated. Eligibility criteria changed.
            </p>
          </div>
        </div>
      </>
    );
  }
}
