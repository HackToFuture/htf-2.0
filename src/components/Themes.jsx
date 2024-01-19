import React from "react";
import { Route, Router } from "react-router-dom";

const Themes = () => {
  return (
    <div className="h-auto lg:mx-32 my-20 text-text_col_1 text-base leading-tight font-intermed">
      <div className="bg-bg_color_2 bg-opacity-20 backdrop-blur-blur1 rounded-xl mx-6 mb-6 py-10 p-4 flex items-center">
        <img
          src="public/vite.svg"
          alt="themelogo"
          className=" aspect-auto w-24 flex-shrink-0 px-4"
        />
        <div>
          <h2 className=" text-xl ml-4 font-interbold bg-gradient-right bg-clip-text text-transparent">
            Problem Statement 1
          </h2>

          <p className="p-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit sequi
            sunt totam expedita ex animi suscipit corporis quos quidem impedit,
            nam rerum enim assumenda! Nostrum, qui impedit. Vero, enim
            voluptate?
          </p>
        </div>
      </div>
      <div className="bg-bg_color_2 bg-opacity-20 backdrop-blur-blur1 rounded-xl mx-6 mb-6 py-10 p-4 flex items-center ">
        <div>
          <h2 className="text-xl ml-4 font-interbold bg-gradient-right bg-clip-text text-transparent">
            Problem Statement 2
          </h2>
          <p className="p-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit sequi
            sunt totam expedita ex animi suscipit corporis quos quidem impedit,
            nam rerum enim assumenda! Nostrum, qui impedit. Vero, enim
            voluptate?
          </p>
        </div>
        <img
          src="public/vite.svg"
          alt="themelogo"
          className=" aspect-auto w-24 flex-shrink-0 px-4"
        />
      </div>
      <div className="bg-bg_color_2 bg-opacity-20 backdrop-blur-blur1 rounded-xl mx-6 mb-6 py-10 p-4 flex items-center ">
        <img
          src="public/vite.svg"
          alt="themelogo"
          className=" aspect-auto w-24 flex-shrink-0 px-4"
        />
        <div>
          <h2 className="text-xl ml-4 font-interbold bg-gradient-right bg-clip-text text-transparent">
            Problem Statement 3
          </h2>
          <p className="p-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit sequi
            sunt totam expedita ex animi suscipit corporis quos quidem impedit,
            nam rerum enim assumenda! Nostrum, qui impedit. Vero, enim
            voluptate?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Themes;
