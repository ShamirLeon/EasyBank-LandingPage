import Logo from "../../assets/icons/logo.svg";
import IconHamburguer from "../../assets/icons/IconHamburguer";
import NavLink from "./NavLink";
import Cta from "../Cta";
import { useState, useRef } from "react";


const NavBar = () => {

  const [ul, setUl] = useState(false);
  const refUl = useRef(null);

  const OpenMenu = "absolute z-5 bg-white w-[85%] rounded-lg py-5 flex items-center flex-col gap-4 text-base text-GrayishBlue  shadow-2xl opacity-100 transition-all ease-in top-20 lg:relative lg:flex-row lg:justify-center lg:top-0 lg:bg-transparent lg:rounded-none lg:shadow-none lg:py-0 lg:w-auto";

  const CloseMenu = "absolute bg-white w-[85%] rounded-lg py-5 flex items-center flex-col gap-4 text-base text-GrayishBlue  shadow-2xl opacity-0 transition-all ease-out top-20 -left-80 lg:relative lg:flex-row lg:justify-center lg:top-0 lg:left-0 lg:bg-transparent lg:rounded-none lg:shadow-none lg:py-5 lg:opacity-100 lg:w-auto"

  const HandleClickMenu = () => {
    setUl(!ul)
  }

  return (
    <nav className="flex justify-between items-center p-5 relative z-50 bg-white lg:px-24 ">
      <a href="#">
        <img src={Logo} alt="Easybank" />
      </a>
      <ul ref={refUl} className={ul ? OpenMenu : CloseMenu}>
        <NavLink title="Home" link="#" />
        <NavLink title="About Us" link="#"/>
        <NavLink title="Contact" link="#"/>
        <NavLink title="Blog" link="#"/>
        <NavLink title="Careers" link="#"/>
      </ul>
      <Cta/>
      <button className="lg:hidden" onClick={HandleClickMenu}>
        <IconHamburguer/>
      </button>
    </nav>
  );
};

export default NavBar;
