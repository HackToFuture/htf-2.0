import React, { useState } from "react";
import Tablelayout from "./Tablelayout";

const Table = () => {
  const [show, setShow] = useState("Problem Statement 1");

  //   const clickHandler = (id) => {
  //     setStatement = { id };
  //     console.log(setStatement);
  //   };
  return (
    <>
      <div className="flex flex-col items-center justify-center w-5/6 bg-bg_color_2 rounded-xl p-6 text-text_col_1 font-urbanist overflow-scroll bg-opacity-40 backdrop-blur-blur1">
        <h1 className="text-4xl font-bold text-center text-text_col_1 font-urbanist">
          Shortlisted Teams
        </h1>
        <div className="flex  justify-between items-center p-2 m-2 mt-0 pt-0">
          <button
            className="bg-blue1 focus:bg-black text-white font-bold py-2 px-4 rounded-sm p-2 m-2"
            onClick={() => setShow("Problem Statement 1")}
          >
            Problem Statement 1
          </button>
          <button
            className="bg-blue1 focus:bg-black text-white font-bold py-2 px-4 rounded-sm p-2 m-2"
            onClick={() => setShow("Problem Statement 2")}
            // id="PS2"
          >
            Problem Statement 2
          </button>
          <button
            className="bg-blue1 focus:bg-black text-white font-bold py-2 px-4 rounded-sm p-2 m-2"
            onClick={() => setShow("Problem Statement 3")}
            // id="PS3"
          >
            Problem Statement 3
          </button>
          {/* <button
            className="bg-blue1 focus:bg-black text-white font-bold py-2 px-4 rounded-sm p-2 m-2"
            // onClick={clickHandler}
            // id="Open Theme"
          >
            Open Theme
          </button> */}
        </div>
        <div className="flex flex-col items-center justify-center ">
          <Tablelayout show={show} />
        </div>
      </div>
    </>
  );
};

export default Table;
