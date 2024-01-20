import React from "react";

const Footer = () => {
  return (
    <footer className="bg-bg_color_2 py-2 w-full">
      <div className="flex items-center justify-between h-12">
        <a href="https://sjec.ac.in/">
          <p className="text-text_col_1 font-semibold text-2xl ml-4 sm:ml-8 ">
            SJEC
          </p>
        </a>
        <p className="text-text_col_1 font-thin text-xs  w-56 bottom-11 sm:bottom-3">
          &copy;2024 The sceptix club | All rights reserved.
        </p>
        <img
          src="src/assets/htf-logo.png"
          alt="htf logo"
          className=" aspect-auto w-14 sm:w-16 mr-6"
        />
      </div>
    </footer>
  );
};

export default Footer;
