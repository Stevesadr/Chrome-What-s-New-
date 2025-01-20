import React, { useState } from "react";
import Btn from "./Btn";
import Cardinfo from "./Cardinfo";

const Card = (props) => {
  const [open, setOpen] = useState(false);
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };
  const actionforopne = () => {
    setOpen(!open);
  };
  return (
    <div className="p-3 m-5 h-52 w-56 rounded-xl  bg-gray-700 flex flex-col justify-start items-between md:h-[310px] md:w-[450px] lg:h-[360px] lg:w-96">
      <div className="flex items-center md:h-2/3 justify-center">
        <img
          src={props.item.imgae}
          className="rounded-xl md:h-full md:w-full"
        />
      </div>
      <div className="flex flex-col justify-start items-start md:h-1/3  overflow-hidden whitespace-nowrap text-ellipsis">
        <h2 className="text-[12px] mt-3 mb-1 font-extralight md:text-base lg:text-lg">
          {truncateText(props.item.title, 30)}
        </h2>
        <p className="text-[7px] font-black lg:text-sm md:text-base">
          {truncateText(props.item.description, 55)}
        </p>
        <div className="flex justify-end items-center w-full">
          <Btn Appearance="open" action={actionforopne} />
          {open === true ? (
            <Cardinfo item={props.item} action={actionforopne} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
