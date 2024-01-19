import React from "react";
import themeimg from "../../public/vite.svg";

const Themes = () => {
  return (
    <div className="h-auto lg:mx-32 my-20 text-text_col_1 text-base md:text-lg leading-tight md:leading-tight font-inter font-medium">
      <div className="bg-bg_color_2 bg-opacity-20 backdrop-blur-blur1 rounded-xl mx-6 mb-6 py-10 p-4 flex items-center">
        <img
          src={themeimg}
          alt="themelogo"
          className=" aspect-auto w-24 flex-shrink-0 px-4"
        />
        <div>
          <h2 className=" text-2xl ml-4 font-bold bg-gradient-right bg-clip-text text-transparent">
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
          <h2 className="text-2xl ml-4 font-bold bg-gradient-right bg-clip-text text-transparent">
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
          src={themeimg}
          alt="themelogo"
          className=" aspect-auto w-24 flex-shrink-0 px-4"
        />
      </div>
      <div className="bg-bg_color_2 bg-opacity-20 backdrop-blur-blur1 rounded-xl mx-6 mb-6 py-10 p-4 flex items-center ">
        <img
          src={themeimg}
          alt="themelogo"
          className=" aspect-auto w-24 flex-shrink-0 px-4"
        />
        <div>
          <h2 className="text-2xl ml-4 font-bold bg-gradient-right bg-clip-text text-transparent">
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
