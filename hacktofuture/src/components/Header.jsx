import React from "react";

const Header = () => {
  return (
    <header
      className="bg-bg_color bg-opacity-90 backdrop-blur-sm h-16 flex items-center"
      id="grad"
    >
      <nav className="flex-grow flex justify-between items-center ">
        <div className="flex-shrink-0 ml-4">
          <img src="./vite.svg" alt="logo" className="w-10 h-10" />
        </div>
        <ul className="flex justify-center text-md">
          <li className="text-white px-8">
            <a href="#">About</a>
          </li>
          <li className="text-white px-8">
            <a href="#">Theme</a>
          </li>
          <li className="text-white px-8">
            <a href="#">Prizes</a>
          </li>
          <li className="text-white px-8">
            <a href="#">FAQ</a>
          </li>
        </ul>
        <button
          className="text-white font-bold  px-6 pb-2 pt-1 rounded-3xl mr-4"
          id="register"
        >
          <a
            href="https://tw-elements.com/docs/standard/navigation/headers/#!"
            target="_blank"
          >
            Register
          </a>
        </button>
      </nav>
    </header>
  );
};

export default Header;
