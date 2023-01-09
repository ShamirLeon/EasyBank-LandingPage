const NavLink = ({title,link}) => {

  return(
    <li className="group/item">
      <a href={link} className="relative">{title}
      <span className="h-1 w-[100%] bg-gradient-to-r from-green-400 to-blue-500  rounded-lg absolute -bottom-2 left-0 opacity-0 group-hover/item:opacity-100 transition-all ease-in"></span>
      </a>
    </li>
  )

};

export default NavLink;
