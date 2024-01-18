import React from "react";
import { useState, useEffect } from "react";

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
    <section>
      <div className="py-5">
        <div className=" container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
          <div className="flex flex-col w-full bg-bg_color_2 bg-opacity-10 backdrop-blur-blur1 rounded-xl lg:w-4/5 ml-6 justify-center items-start p-8">
            <img
              src="/src/assets/hack-to-future.png"
              alt="htf logo"
              className=" aspect-auto w-80 lg:w-4/5"
            />
            <p className="text-base md:text-lg font-medium text-text_col_1 mb-4 leading-tight md:leading-tight font-intermed">
              HackToFuture is a 36 hour long hackathon, running from 19-21
              February. Whether you are a seasoned professional or a newcomer to
              the tech world, HackToFuture is the perfect opportunity to
              showcase your skills, make new connections, and work towards a
              better future. <br />
              <br /> Join us for an unforgettable 36-hour experience that will
              inspire you and propel you towards your goals!
            </p>
            <button
              className="text-white text-xl font-bold px-10 pb-1 pt-1 rounded-3xl mr-4 font-interbold"
              id="register"
            >
              <a
                href="https://tw-elements.com/docs/standard/navigation/headers/#!"
                target="_blank"
              >
                Register
              </a>
            </button>
          </div>
          <div className="p-8 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-1/2 w-3/5 justify-center">
            <img src="src/assets/hero-image.png" alt="hero image" />
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
    </section>
  );
};

export default Hero;
