import Logo from "../../assets/icons/logo-white.svg";
import Cta from "../Cta";
import Atributtion from "./Atributtion";
import MenuList from "./MenuList";
import SocialMedia from "./SocialMedia";

const FooterC = () => {
  return (
    <footer className="bg-DarkBlue grid lg:grid-rows-[1fr_.3fr] lg:grid-flow-col lg:grid-cols-3 lg:pt-12">
      <div className="lg:flex lg:flex-col lg:justify-between ">
        <img src={Logo} alt="Logo" className="mx-auto pt-10 lg:pt-0" />
        <SocialMedia />
      </div>
      <MenuList />
      <Atributtion />
    </footer>
  );
};

export default FooterC;
