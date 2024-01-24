import React from "react";
import { useState, useEffect } from "react";
import htflogo from "../assets/hero-htf-main.svg";
import RegModal from "./RegModal/RegModal";
import DownloadRule from "./downloadRule";
import Alert from "./alert";

const Hero = () => {
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

  return (
    <div className="py-20 md:py-20">
      <div className="flex flex-col md:flex-row items-center px-2 md:px-0 my-4 w-full justify-center h-2/3">
        <Alert />
      </div>
      <div className="flex flex-col md:flex-row items-center px-5 md:px-0 my-8 w-full">
        {/* might need to change md:w-96 later */}
        <div className="flex flex-col bg-bg_color_2 bg-opacity-20 backdrop-blur-blur1 rounded-xl lg:w-4/5 mx-1 md:mx-7 md:w-96 py-10 p-6 md:p-10 justify-center items-start">
          <div className="flex flex-shrink-0 justify-center w-full md:w-auto mb-10">
            <img
              src={htflogo}
              alt="htf logo"
              className="aspect-auto w-11/12 lg:w-4/5"
            />
          </div>
          <p className="text-base md:text-lg text-text_col_1 mb-4 leading-tight md:leading-tight font-inter font-medium">
            HackToFuture is a 36 hour long hackathon, running from 19-21
            February. Whether you are a seasoned professional or a newcomer to
            the tech world, HackToFuture is the perfect opportunity to showcase
            your skills, make new- connections, and work towards a better
            future. <br />
            <br /> Join us for an unforgettable 36-hour experience that will
            inspire you and propel you towards your goals!
          </p>

          {/* <a
            href="/registration"
            className="text-white text-xl font-bold px-12 py-2 my-3 rounded-3xl font-interbold"
            id="register"
          >
            <button>Register</button>
          </a> */}
          <div className="flex flex-col p-2 sm:flex-row justify-center items-center ">
            <RegModal />
            <DownloadRule />
          </div>
        </div>{" "}
        <div className="md:w-3/4">
          <dotlottie-player
            src="https://lottie.host/1983ae77-1eaf-40de-a80a-ffdd542071f1/mMjS3sCYL8.json"
            background="transparent"
            speed="1"
            direction="1"
            playMode="normal"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div>
          {isMobile && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              className="h-10 w-10 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
