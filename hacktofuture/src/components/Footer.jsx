import React from "react";

const Footer = () => {
  return (
    <footer className=" flex items-center justify-between py-2 relative">
      <p className="text-text_col_1 font-semibold text-2xl ml-8 ">SJEC</p>
      <p className="text-text_col_1 font-thin text-xs absolute left-1/2 transform -translate-x-1/2 w-56 bottom-12 sm:bottom-4">
        &copy;2024 thesceptixclub | All rights reserved.
      </p>
      <img
        src="/src/assets/hack-to-future-mini.png"
        alt="htf logo"
        className=" aspect-auto w-32 mr-6"
      />
    </footer>
  );
};

export default Footer;
