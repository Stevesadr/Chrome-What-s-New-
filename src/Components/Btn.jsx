import React from "react";
import { FaPlus } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Btn = (props) => {
  return (
    <button
      onClick={props.action}
      className="bg-blue-300 p-2 rounded-full text-[7px] flex items-center justify-center text-black lg:h-14 lg:w-14 lg:text-xl"
    >
      {props.Appearance === "close" ? <MdClose /> : <FaPlus />}
    </button>
  );
};

export default Btn;
