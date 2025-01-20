import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { ImYoutube } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineHelp } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full bg-gray-600 mt-5">
      <div className="w-full h-10  lg:h-20 pl-1  border-b border-gray-300">
        <div className="h-full flex w-1/3 text-[7px] lg:text-lg lg:w-1/5 items-center justify-around ">
          <h5>Follow us</h5>
          <span>
            <ImYoutube />
          </span>
          <span>
            <BsTwitterX />
          </span>
          <span>
            <ImFacebook2 />
          </span>
        </div>
      </div>
      <div className="w-full lg:flex ">
        <div className="flex items-center justify-start m-2 lg:m-5">
          <h3 className="text-[12px] lg:text-3xl">Google</h3>
        </div>
        <div className="text-[5px] flex items-center justify-around w-1/2 lg:text-lg">
          <h2>Privacy and Terms</h2>
          <h2>About Google</h2>
          <h2>Google Products</h2>
        </div>
        <div className="flex items-center justify-between w-1/2 lg:justify-end">
          <div className="flex m-2 items-center justify-center">
            <MdOutlineHelp className="text-[8px] lg:text-lg" />
            <h3 className="text-[5px] ml-2 lg:text-lg">Help</h3>
          </div>
          <div className="flex m-2 items-center justify-start border-b border-gray-800">
            <p className="text-[5px] lg:text-lg">English - United States</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
