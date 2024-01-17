import React from "react";

const Header = () => {
  return (
    <div className="bg-bg_color border-white border-2 h-20 flex">
      <img src="./vite.svg" alt="logo" />
      <nav className="fl">
        <ul className="flex">
          <li className="text-white">
            <a href="#">Home</a>
          </li>
          <li className="text-white">
            <a href="#">About</a>
          </li>
          <li className="text-white">
            <a href="#">Prizes</a>
          </li>
          <li className="text-white">
            <a href="#">FAQ</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
