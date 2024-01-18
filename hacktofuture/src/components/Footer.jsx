import React from "react";

const Footer = () => {
  return (
    <footer className="bg-bg_color_2 py-2">
      <div className="bg-bg_color_2 h-6 flex sm:hidden"></div>
      <div className="flex items-center justify-between h-10 relative">
        <p className="text-text_col_1 font-semibold text-2xl ml-8 ">SJEC</p>
        <p className="text-text_col_1 font-thin text-xs absolute left-1/2 transform -translate-x-1/2 w-56 bottom-11 sm:bottom-3">
          &copy;2024 thesceptixclub | All rights reserved.
        </p>
        <img
          src="/src/assets/hack-to-future-mini.png"
          alt="htf logo"
          className=" aspect-auto w-32 mr-6"
        />
      </div>
    </footer>
  );
};

export default Footer;
