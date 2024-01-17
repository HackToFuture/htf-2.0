import React from "react";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log("clicked");
  };

  return (
    <header
      className="bg-bg_color bg-opacity-70 backdrop-blur-sm h-16 md:h-20 flex items-center fixed top-0 w-full"
      id="grad"
    >
      {isMobile ? (
        <nav className="flex-grow flex justify-between items-center mr-6">
          <div className="flex-shrink-0 ml-8">
            <img
              src="src/assets/sceptix-logo.png"
              alt="logo"
              className="aspect-auto w-10"
            />
          </div>

          <button
            onClick={handleClick}
            className="flex flex-col justify-center items-center"
          >
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
            ></span>
          </button>
        </nav>
      ) : (
        <nav className="flex-grow flex justify-between items-center ">
          <div className="flex-shrink-0 ml-8">
            <img
              src="src/assets/sceptix-logo.png"
              alt="logo"
              className="aspect-auto w-16"
            />
          </div>
          <ul className="flex justify-center text-lg">
            <li className="text-white hover:text-text_col_1 transition px-8">
              <a href="#">About</a>
            </li>
            <li className="text-white hover:text-text_col_1 transition px-8">
              <a href="#">Theme</a>
            </li>
            <li className="text-white hover:text-text_col_1 transition px-8">
              <a href="#">Prizes</a>
            </li>
            <li className="text-white hover:text-text_col_1 transition px-8">
              <a href="#">FAQ</a>
            </li>
          </ul>
          {/* <button
          className="text-white font-bold  px-6 pb-2 pt-1 rounded-3xl mr-4"
          id="register"
        >
          <a
            href="https://tw-elements.com/docs/standard/navigation/headers/#!"
            target="_blank"
          >
            Register
          </a>
        </button> */}
          <div className="flex mr-8 gap-6">
            <a
              href="https://www.linkedin.com/company/sceptix/"
              className=" aspect-auto w-6 flex-shrink-0 "
            >
              <img src="src/assets/linkedin-32.png" alt="linkedin" />
            </a>
            <a
              href="https://www.instagram.com/the_sceptix_club/"
              className=" aspect-auto w-6 flex-shrink-0"
            >
              <img src="src/assets/instagram-white-icon.svg" alt="insta" />
            </a>
          </div>
        </nav>
      )}
      {isOpen && (
        <div
          className="fixed top-20 right-2 right-0 h-auto w-48 py-4"
          id="hammenu"
        >
          <ul className="flex flex-col text-lg items-center font-semibold ">
            <li className="text-white hover:text-text_col_1 transition px-8 ">
              <a href="#">About</a>
            </li>
            <li className="text-white hover:text-text_col_1 transition px-8">
              <a href="#">Theme</a>
            </li>
            <li className="text-white hover:text-text_col_1 transition px-8">
              <a href="#">Prizes</a>
            </li>
            <li className="text-white hover:text-text_col_1 transition px-8">
              <a href="#">FAQ</a>
            </li>
          </ul>
          <div className="flex justify-evenly mt-5 ">
            <a
              href="https://www.linkedin.com/company/sceptix/"
              className=" aspect-auto w-6 flex-shrink-0 "
            >
              <img src="src/assets/linkedin-32.png" alt="linkedin" />
            </a>
            <a
              href="https://www.instagram.com/the_sceptix_club/"
              className=" aspect-auto w-6 flex-shrink-0"
            >
              <img src="src/assets/instagram-white-icon.svg" alt="insta" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
