import Cta from "../Cta";

const MenuList = () => {
  return (
    <ul className="flex flex-col lg:flex-row lg:justify-around text-center lg:text-left gap-2 text-white text-base font-light pt-4 lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-2">
      <li className="flex flex-col gap-2">
        <a href="#" className="hover:text-LimeGreem">About Us</a>
        <a href="#" className="hover:text-LimeGreem">Contact</a>
        <a href="#" className="hover:text-LimeGreem">Blog</a>
      </li>

      <li className="flex flex-col gap-2">
        <a href="#" className="hover:text-LimeGreem">Careers</a>
        <a href="#" className="hover:text-LimeGreem">Support</a>
        <a href="#" className="hover:text-LimeGreem">Privacy Policy</a>
      </li>
      <div className="lg:text-right">
        <Cta></Cta>
        <p className="text-sm my-3">© Easybank. All Rights Reserved</p>
      </div>
    </ul>
  );
};

export default MenuList;
