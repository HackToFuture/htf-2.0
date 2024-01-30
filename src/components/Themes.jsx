import React from "react";
import blockchain from "/src/assets/blockchain.png";
import hacker from "/src/assets/hacker.png";
import markettrend from "/src/assets/market-trends.png";
import laptop from "/src/assets/laptop.png";

const Themes = () => {
  return (
    <div className="h-auto lg:mx-32 my-20 text-text_col_1 text-base md:text-lg leading-tight md:leading-tight font-inter font-medium">
      <div className="bg-bg_color_2 bg-opacity-20 backdrop-blur-blur1 rounded-xl mx-6 mb-6 py-10 p-4 flex items-center">
        <img
          src={markettrend}
          alt="themelogo"
          className=" aspect-auto w-24 flex-shrink-0 px-4"
        />
        <div>
          <h2 className=" text-2xl ml-4 font-bold bg-gradient-right bg-clip-text text-transparent">
            Problem Statement 1
          </h2>

          <p className="p-4">
            Develop an ethical and secure machine learning framework that helps
            businesses uncover customer trends while anonymizing user
            identities, addressing privacy concerns in today's data-driven
            world.
          </p>
        </div>
      </div>
      <div className="bg-bg_color_2 bg-opacity-20 backdrop-blur-blur1 rounded-xl mx-6 mb-6 py-10 p-4 flex items-center ">
        <div>
          <h2 className="text-2xl ml-4 font-bold bg-gradient-right bg-clip-text text-transparent">
            Problem Statement 2
          </h2>
          <p className="p-4">
            Design a blockchain platform for secure, automatic data leasing with
            user-controlled deletion and built-in trust mechanisms.
          </p>
        </div>
        <img
          src={blockchain}
          alt="themelogo"
          className=" aspect-auto w-24 flex-shrink-0 px-4"
        />
      </div>
      <div className="bg-bg_color_2 bg-opacity-20 backdrop-blur-blur1 rounded-xl mx-6 mb-6 py-10 p-4 flex items-center ">
        <img
          src={hacker}
          alt="themelogo"
          className=" aspect-auto w-24 flex-shrink-0 px-4"
        />
        <div>
          <h2 className="text-2xl ml-4 font-bold bg-gradient-right bg-clip-text text-transparent">
            Problem Statement 3
          </h2>
          <p className="p-4">
            Develop an AI based solution to offer timely insights into current
            global hacking trends, prioritising potential threats based on their
            likelihood of targeting specific enterprises.
          </p>
        </div>
      </div>

      <div className="bg-bg_color_2 bg-opacity-20 backdrop-blur-blur1 rounded-xl mx-6 mb-6 py-10 p-4 flex items-center justify-between">
        <div>
          <h2 className="text-2xl ml-4 font-bold bg-gradient-right bg-clip-text text-transparent w-full">
            Open Theme
          </h2>
          <p className="p-4">
            Work on your own problem statement under the theme 'Social
            Innovation'. Open to first and second semester students of BE only.
            Priority is given to novelty and innovation.
          </p>
        </div>
        <img
          src={laptop}
          alt="themelogo"
          className=" aspect-auto w-24 flex-shrink-0 px-4"
        />
      </div>
    </div>
  );
};

export default Themes;
