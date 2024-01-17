import React from "react";

const Hero = () => {
  

  return (
    <section>
      <div class="bg-black text-white py-20">
        <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
          <div class="flex flex-col w-full lg:w-4/5 justify-center items-start p-8 border-white border-2">
            <img
              src="/src/assets/hack-to-future.png"
              alt="htf logo"
              className=" aspect-auto w-80 lg:w-4/5"
            />
            <p class=" text-base md:text-lg font-medium text-text_col_1 mb-4 leading-tight md:leading-tight">
              HackToFuture is a 36 hour long hackathon, running from 19-21
              February. Whether you are a seasoned professional or a newcomer to
              the tech world, HackToFuture is the perfect opportunity to
              showcase your skills, make new connections, and work towards a
              better future. Join us for an unforgettable 36-hour experience
              that will inspire you and propel you towards your goals!
            </p>
            <button
              className="text-white text-xl font-bold px-10 pb-2 pt-1 rounded-3xl mr-4"
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
          <div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
            <div class="h-48 flex flex-wrap content-center">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
