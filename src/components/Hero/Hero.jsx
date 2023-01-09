import Data from "../../data/data.json";
import BgDesktop from "../../assets/icons/bg-intro-desktop.svg"
import HeroImg from "../../assets/images/image-mockups.png";
import Cta from "../Cta";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse lg:items-center">
      <div className="relative mb-5 bg-heroMobile bg-cover lg:bg-none">
        <img src={BgDesktop} alt="Backgroun Intro" className="hidden lg:block absolute min-w-[42rem] -left-[6rem] -top-[8rem]"/>
        <img
          src={HeroImg}
          alt="Mobile Mockups"
          className="relative -top-20 lg:w-[1000px]"
        />
      </div>
      <div className="relative z-10 p-6 text-center lg:text-left lg:px-24">
        <h1 className="text-4xl text-DarkBlue mb-5 leading-tight">
          {Data.head.title}
        </h1>
        <p className="text-GrayishBlue mb-8 text-base">
          {Data.head.description}
        </p>
        <Cta></Cta>
      </div>
    </div>
  );
};

export default Hero;
