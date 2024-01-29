import React from "react";

const Prize = () => {
  return (
    <div className="px-5 md:px-7 mb-40">
      <div className="flex flex-col justify-center bg-bg_color_2 bg-opacity-20 backdrop-blur-blur1 items-center rounded-xl px-6 md:px-10 py-12">
        <h2 className="text-2xl md:text-4xl font-urbanist font-bold mb-2 ">
          <span className="bg-gradient-right bg-clip-text text-transparent">
            Prize Pool ₹ 2,00,000+
          </span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:px-10 w-full">
          <div className="flex justify-center flex-shrink-0 md:w-96">
            <dotlottie-player
              src="https://lottie.host/8671c9c7-0e79-4246-a480-8692f53902e6/qXRiLril5k.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
            {/* <img
              src="src/assets/eg-logo.svg"
              alt="logo"
              className="aspect-auto w-64 md:w-96"
            /> */}
          </div>
          <div className="mt-8 md:mt-0 md:p-5 w-full font-urbanist font-medium text-lg md:text-2xl text-text_col_1 flex flex-col">
            <div className="flex flex-col mb-12 w-full">
              <h2 className="text-2xl md:text-4xl font-bold mb-5 bg-gradient-right bg-clip-text text-transparent">
                Company Theme
              </h2>
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:mr-16 w-full mb-2">
                  <p className="text-xl md:text-3xl font-semibold">
                    First Place
                  </p>
                  <p>
                    {" "}
                    <span className=" text-yellow-400">₹ 40,000</span> (per
                    problem statement)
                  </p>
                </div>
                <div className="w-full mb-2 md:mb-0">
                  <p className="text-xl md:text-3xl font-semibold">
                    First Runner-Up
                  </p>
                  <p>
                    {" "}
                    <span className=" text-yellow-400">₹ 20,000</span> (per
                    problem statement)
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-4xl font-bold mb-5 bg-gradient-right bg-clip-text text-transparent">
                Open Theme
              </h2>
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:mr-16 w-full mb-2 md:mb-0">
                  <p className="text-xl md:text-3xl font-semibold">
                    First place{" "}
                  </p>
                  <p className="text-yellow-400">₹ 15,000</p>
                </div>
                <div className="w-full">
                  <p className="text-xl md:text-3xl font-semibold">
                    First Runner-Up{" "}
                  </p>
                  <p className="text-yellow-400">₹ 10,000</p>
                </div>
              </div>
            </div>

            {/* <p className="text-text_col_1 mb-6 leading-tight md:leading-tight">
              Step into the dynamic world of HackToFuture! Our prize pool of
              ₹2,00,000 is not just a reward; it's an experience.
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
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prize;
