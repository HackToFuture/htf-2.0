import React from "react";

const Themes = () => {
  return (
    <div className="h-auto text-text_col_1 text-base leading-tight font-intermed">
      <div className="mb-6 p-4 flex items-center border-white border-2">
        <img
          src="public/vite.svg"
          alt="themelogo"
          className=" aspect-auto w-24 flex-shrink-0 px-4"
        />
        <div>
          <h2 className="text-xl ml-4 bg-gradient-right bg-clip-text text-transparent">
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
      <div className="mb-6 p-4 flex items-center border-white border-2">
        <div>
          <h2 className="text-xl ml-4">Problem Statement 2</h2>
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
      <div className="mb-6 p-4 flex items-center border-white border-2">
        <img
          src="public/vite.svg"
          alt="themelogo"
          className=" aspect-auto w-24 flex-shrink-0 px-4"
        />
        <div>
          <h2 className="text-xl ml-4">Problem Statement 3</h2>
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
