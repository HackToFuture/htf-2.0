import React from "react";

const Prize = () => {
  return (
    <div className="px-5 md:px-7 mb-40">
      <div className="container flex flex-col justify-center bg-bg_color_2 bg-opacity-20 backdrop-blur-blur1 items-center rounded-xl px-6 md:px-10 py-12">
        <h2 className="text-2xl md:text-4xl font-interbold mb-10 ">
          🚀{" "}
          <span className="bg-gradient-right bg-clip-text text-transparent">
            Unleash Your Potential: Prize Pool ₹200,000{" "}
          </span>
          🏆
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-start">
          <div className="flex justify-center flex-shrink-0 w-full md:w-auto">
            <img
              src="src/assets/eg-logo.svg"
              alt="logo"
              className="aspect-auto w-64 md:w-96"
            />
          </div>
          <div className="ml-0 md:ml-10 mt-8 md:mt-0 md:p-20 font-intermed text-base md:text-lg">
            <p className="text-text_col_1 mb-6 leading-tight md:leading-tight">
              Step into the dynamic world of HackToFuture! Our prize pool of
              ₹200,000 is not just a reward; it's an experience.
              <br /> Imagine a virtual galaxy where lines of code dance and form
              constellations of innovation.
            </p>
            <p className="text-text_col_1 mb-6 leading-tight md:leading-tight">
              Picture your ideas soaring high like paper planes, weaving through
              a digital tapestry.
              <br /> The journey is not just about coding; it's about creating a
              symphony of technological marvels.
            </p>
            <p className="text-text_col_1  leading-tight md:leading-tight">
              Embrace the challenge, script the future, and let your creativity
              unfold. Register now and embark on an odyssey of innovation!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prize;
