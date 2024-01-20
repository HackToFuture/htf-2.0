import htflogo from "../assets/hero-htf-main.svg";

const HeaderReg = () => {
  return (
    <header className="bg-bg_color bg-opacity-40 backdrop-blur-blur1 h-16 md:h-20 flex items-center fixed top-0 w-full font-intermed z-10">
      <nav className="flex-grow flex justify-between items-center ">
        <div className="flex-shrink-0 ml-8">
          <img src={htflogo} alt="logo" className="aspect-auto w-24" />
        </div>
      </nav>
    </header>
  );
};

export default HeaderReg;
