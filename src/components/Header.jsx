import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import htflogo from "../assets/hero-htf-main.svg";
import RegModal from "./RegModal/RegModal";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log("clicked");
  };

  return (
    visible && (
      <header className="bg-bg_color bg-opacity-40 backdrop-blur-blur1 h-16 md:h-20 flex items-center fixed top-0 w-full font-intermed z-10">
        {isMobile ? (
          <nav className="flex-grow flex justify-between items-center mr-6">
            <div className="flex-shrink-0 ml-8">
              <img src={htflogo} alt="logo" className="aspect-auto w-24" />
            </div>

            <button
              onClick={handleClick}
              className="flex flex-col justify-center items-center mr-3"
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
            <div className="flex-shrink-0 ml-8 cursor-pointer">
              <Link
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                <img src={htflogo} alt="logo" className="aspect-auto w-24" />
              </Link>
            </div>
            <ul className="flex justify-center font-inter font-medium text-md">
              <li className="text-white hover:text-text_col_2 transition px-8 cursor-pointer">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li className="text-white hover:text-text_col_2 transition px-8 cursor-pointer">
                <Link
                  activeClass="active"
                  to="prize"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                >
                  Prizes
                </Link>
              </li>
              <li className="text-white hover:text-text_col_2 transition px-8 cursor-pointer">
                <Link
                  activeClass="active"
                  to="theme"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                >
                  Themes
                </Link>
              </li>

              <li className="text-white hover:text-text_col_2 transition px-8 cursor-pointer">
                <Link
                  activeClass="active"
                  to="faq"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                >
                  FAQ
                </Link>
              </li>
            </ul>

            {/* <button
            onClick={googleAuth}
            className="text-white text-lg font-bold  px-8 py-1 rounded-3xl mr-6"
            id="register"
          >
            <a href="/registration">Register</a>
          </button> */}
            <RegModal />
          </nav>
        )}
        {isOpen && (
          <div className="fixed top-20 right-2 h-auto w-48 py-4" id="hammenu">
            <ul className="flex flex-col text-lg items-center font-inter font-medium text-text_col_1 ">
              <li className="transition px-8 hover:text-black">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                >
                  About
                </Link>
                <li className="transition px-8 hover:text-black"></li>
                <Link
                  activeClass="active"
                  to="prize"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                >
                  Prizes
                </Link>
              </li>
              <li className="transition px-8 hover:text-black">
                <Link
                  activeClass="active"
                  to="theme"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                >
                  Themes
                </Link>
              </li>
              <li className="transition px-8 hover:text-black">
                <Link
                  activeClass="active"
                  to="faq"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                >
                  FAQ
                </Link>
              </li>
            </ul>
            <div className=" h-16 flex items-center justify-center">
              <div className="ml-5">
                {/* <button
                onClick={(e) => googleAuth(e)}
                className="bg-bg_color_2 transition duration-300 ease-in-out text-lg font-bold px-10 py-1 hover:scale-105 rounded-3xl mr-6 "
              >
                <a href="/registration" className="text-text_col_1">
                  Register
                </a>
              </button> */}
                <RegModal />
              </div>
            </div>
          </div>
        )}
      </header>
    )
  );
};

export default Header;
