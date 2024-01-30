import React from "react";
import blockchain from "/src/assets/blockchain.png";
import hacker from "/src/assets/hacker.png";
import markettrend from "/src/assets/market-trends.png";
import laptop from "/src/assets/laptop.png";

const Themes = () => {
  return (
    <div className="h-auto lg:mx-32 my-20 text-text_col_1 text-lg md:text-xl leading-tight md:leading-tight font-urbanist font-medium">
      <div className="bg-bg_color_2 bg-opacity-20 backdrop-blur-blur1 rounded-xl mx-6 mb-6 py-10 p-4 flex flex-col items-center">
        <div className="flex flex-row justify-evenly">
          <img
            src={markettrend}
            alt="themelogo"
            className="aspect-square h-24 flex-shrink-0 p-4 mt-8"
          />
          <div>
            <h2 className=" text-2xl ml-4 font-bold bg-gradient-right bg-clip-text text-transparent">
              Problem Statement 1
            </h2>

            <p className="p-4 text-xl font-bold">
              Anonymise user identities in large databases to ethically employ
              machine learning in understanding customer trends and behaviour
              without violating their rights.
            </p>
          </div>
        </div>
        <p className="p-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cumque,
          suscipit ad ea non nam fuga iusto, quam accusantium repudiandae
          perferendis vero corporis reprehenderit excepturi nemo at dignissimos
          sit? Pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Sed illo dolor sit, nesciunt delectus possimus quia doloribus
          ipsa nobis fuga corporis quam iste recusandae nemo error perspiciatis
          libero doloremque mollitia. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ut cumque, suscipit ad ea non nam fuga iusto, quam
          accusantium repudiandae perferendis vero corporis reprehenderit
          excepturi nemo at dignissimos sit? Pariatur. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Sed illo dolor sit, nesciunt
          delectus possimus quia doloribus ipsa nobis fuga corporis quam iste
          recusandae nemo error perspiciatis libero doloremque mollitia.
        </p>
      </div>
      <div className="bg-bg_color_2 bg-opacity-20 backdrop-blur-blur1 rounded-xl mx-6 mb-6 py-10 p-4 flex flex-col items-center ">
        <div className="flex flex-row justify-evenly">
          <img
            src={blockchain}
            alt="themelogo"
            className=" aspect-square h-24 flex-shrink-0 p-4 mt-8"
          />
          <div>
            <h2 className="text-2xl ml-4 font-bold bg-gradient-right bg-clip-text text-transparent">
              Problem Statement 2
            </h2>
            <p className="p-4 text-xl font-bold">
              Create a blockchain-powered platform allowing users to lease their
              information to various services, with the assurance that the data
              will not be retained upon exiting the service.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-evenly">
          <p className="p-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cumque,
            suscipit ad ea non nam fuga iusto, quam accusantium repudiandae
            perferendis vero corporis reprehenderit excepturi nemo at
            dignissimos sit? Pariatur. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Sed illo dolor sit, nesciunt delectus possimus
            quia doloribus ipsa nobis fuga corporis quam iste recusandae nemo
            error perspiciatis libero doloremque mollitia. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ut cumque, suscipit ad ea non nam
            fuga iusto, quam accusantium repudiandae perferendis vero corporis
            reprehenderit excepturi nemo at dignissimos sit? Pariatur. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Sed illo dolor
            sit, nesciunt delectus possimus quia doloribus ipsa nobis fuga
            corporis quam iste recusandae nemo error perspiciatis libero
            doloremque mollitia.
          </p>
        </div>
      </div>
      <div className="bg-bg_color_2 bg-opacity-20 backdrop-blur-blur1 rounded-xl mx-6 mb-6 py-10 p-4 flex flex-col items-center ">
        <div className="flex flex-row justify-evenly">
          <img
            src={hacker}
            alt="themelogo"
            className=" aspect-square h-24 flex-shrink-0 p-4 mt-8"
          />
          <div>
            <h2 className="text-2xl ml-4 font-bold bg-gradient-right bg-clip-text text-transparent">
              Problem Statement 3
            </h2>
            <p className="p-4 text-xl font-bold">
              Develop an AI based solution to offer timely insights into current
              global hacking trends, prioritising potential threats based on
              their likelihood of targeting specific enterprises.
            </p>
          </div>
        </div>
        <p className="p-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cumque,
          suscipit ad ea non nam fuga iusto, quam accusantium repudiandae
          perferendis vero corporis reprehenderit excepturi nemo at dignissimos
          sit? Pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Sed illo dolor sit, nesciunt delectus possimus quia doloribus
          ipsa nobis fuga corporis quam iste recusandae nemo error perspiciatis
          libero doloremque mollitia. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ut cumque, suscipit ad ea non nam fuga iusto, quam
          accusantium repudiandae perferendis vero corporis reprehenderit
          excepturi nemo at dignissimos sit? Pariatur. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Sed illo dolor sit, nesciunt
          delectus possimus quia doloribus ipsa nobis fuga corporis quam iste
          recusandae nemo error perspiciatis libero doloremque mollitia.
        </p>
      </div>

      <div className="bg-bg_color_2 bg-opacity-20 backdrop-blur-blur1 rounded-xl mx-6 mb-6 py-10 p-4 flex items-center justify-between">
        <img
          src={laptop}
          alt="themelogo"
          className=" aspect-auto w-24 flex-shrink-0 px-4"
        />
        <div>
          <h2 className="text-2xl ml-4 font-bold bg-gradient-right bg-clip-text text-transparent w-full">
            Open Theme
          </h2>
          <p className="p-4 text-xl font-bold">
            Work on your own problem statement under the theme 'Social
            Innovation'. Open to first and second semester students of BE only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Themes;
