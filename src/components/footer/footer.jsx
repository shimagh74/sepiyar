import React from "react";
import { Icons } from "./menus.jsx";
import SocialIcons from "./socialIcons.jsx";
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white md:rounded-tr-[140px] mt-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:px-8 px-5 py-12 items-center justify-items-center">
        <div className="md:pl-8">
          <h3 className="text-xl font-semibold pb-3">Our Locations</h3>
          <p>
          Cheltenham, Melbourne, VIC
          </p>
        </div>
        <div className="items-center justify-start md:pl-8">
          <h3 className="text-xl font-semibold pb-3">Contact Us</h3>
          <div className="flex items-center ">
            {" "}
            <FaPhoneAlt /> <p className="px-1">Info@sepiyar.com </p>{" "}
          </div>
          <div className="flex items-center ">
            <FaRegEnvelope />
            <p className="px-1">AU: +61 488 103 982</p>
          </div>
        </div>
        <div className="md:pl-8">
          <a href={Icons.link}><SocialIcons Icons={Icons} /></a>
        </div>
      </div>
      <div
        className="grid grid-cols-1 
      text-center pt-2 text-secondary text-sm pb-4"
      >
        <span>Copyright © 2024 SEPIYAR, All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
