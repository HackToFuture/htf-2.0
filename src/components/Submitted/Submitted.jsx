import React from "react";
import Popup from "reactjs-popup";
import "./Submitted.css";

const Submitted = ({ triggerButton, isNotValid }) => {
  return isNotValid ? (
    <>
      <Popup trigger={triggerButton} modal nested>
        {(close) => (
          <div className="modal bg-slate-50 rounded-lg shadow-md p-4 w-80 mx-auto mt-20 md:w-full lg:w-96">
            <div className="header border-b-2 border-gray-300 py-2 text-xl font-bold flex justify-between items-center">
              <span>Please Fill the form</span>
              <button
                className="text-gray-500 hover:text-gray-600"
                onClick={close}
              >
                &times;
              </button>
            </div>
            <div className="content py-4 text-sm text-gray-700">
              {/* Your content goes here */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
              nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
              quibusdam voluptates delectus doloremque, explicabo tempore dicta
              adipisci fugit amet dignissimos?
            </div>
            {/* <div className="actions flex justify-center mt-4">
              <button className="text-text_col_1 bg-bg_color_2 transition duration-300 ease-in-out text-lg font-bold px-6 py-2 hover:scale-105 rounded-md">
                Register
              </button>
            </div> */}
          </div>
        )}
      </Popup>
    </>
  ) : (
    <>
      <Popup trigger={triggerButton} modal nested>
        
          <div className="modal bg-slate-50 rounded-lg shadow-md p-4 w-80 mx-auto mt-20 md:w-full lg:w-96">
            <div className="header border-b-2 border-gray-300 py-2 text-xl font-bold flex justify-between items-center">
              <span>Registratiin sucessfull</span>
              <button
                className="text-gray-500 hover:text-gray-600"
                onClick={close}
              >
                &times;
              </button>
            </div>
            <div className="content py-4 text-sm text-gray-700">
              {/* Your content goes here */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
              nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
              quibusdam voluptates delectus doloremque, explicabo tempore dicta
              adipisci fugit amet dignissimos?
            </div>
            <div className="actions flex justify-center mt-4">
              <a href="/">
                <button className="text-text_col_1 bg-bg_color_2 transition duration-300 ease-in-out text-lg font-bold px-6 py-2 hover:scale-105 rounded-md">
                  Back to Home
                </button>
              </a>
            </div>
          </div>
        
      </Popup>
    </>
  );
};

export default Submitted;
