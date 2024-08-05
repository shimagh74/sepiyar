import React, { useState } from "react";
import "./Navbar.scss";
import {
  FaAlignJustify,
  FaAngleDown,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTimes,
} from "react-icons/fa";
import { navMenu } from "../../data/NavData";
import whiteLogo from "./../../assets/img/whiteLogo.PNG";
import SubMenu from "./subMenu/subMenu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div >
      <div className="h-12  bg-primary px-4 md:px-20 text-black text-4xl justify-between flex items-center font-display ">
        <div>
          <h2 className="text-sm">Info@sepiyar.com | AU: +61 488 103 982</h2>
        </div>
        <div className="flex items-center text-3xl">
          <a href="https://www.facebook.com/profile.php?id=61560770701944">
            <FaFacebookSquare />
          </a>
          <a href="https://www.instagram.com/sepiyar.aesthetics/">
            <FaInstagramSquare />
          </a>
        </div>
      </div>
      <div className="md:block border-b-[1px] justify-around flex items-center px-5 md:px-0 ">
        <div className="h-12 bg-white md:h-24   w-full  md:justify-center flex  mx-auto py-1">
          <img src={whiteLogo}  alt="Logo"/>
        </div>
        <div className="header">
          <div className="wrapper">
            <ul className={`navigation ${openMenu && "active"}`}>
              <div className="w-1/6 md:hidden justify-center items-center flex z-100">
              <span className="close_menu" onClick={() => setOpenMenu(false)}>
                <FaTimes />
              </span>
              </div>
              <div className="w-5/6 lg:w-10/12 md:w-full md:justify-around md:px-2 md:flex md:items-center z-10">
              {navMenu.map((menu, i) => (
                <li key={i} className="list_menu">
                  <div className="nav_menu">
                    <a href={menu.path}>{menu.title}</a>
                    {menu.subMenu && (
                      <span className="menu_icon">
                        <FaAngleDown />
                      </span>
                    )}
                  </div>
                  {menu.subMenu && (
                    <div className="sub_menu">
                      <SubMenu menu={menu} />
                    </div>
                  )}
                </li>
              ))}
              </div>
            </ul>
            <span className="bar_menu" onClick={() => setOpenMenu(true)}>
              <FaAlignJustify />
            </span>
            <div>
              <a
              href="https://www.fresha.com/book-now/sepiyar-aesthetics-fl1if9ef/all-offer?id=1296763&pId=1231093"
           target="_blank" rel="noopener noreferrer"
              className={"bg-primary text-black  px-2 py-1 rounded-sm md:block hidden "}>book now</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
