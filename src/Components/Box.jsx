import React from "react";
import CategoryBox from "./CategoryBox";

const Box = (props) => {
  return (
    <div
      className={
        props.item.id % 2 == 0
          ? "p-7 md:m-12 lg:flex "
          : "p-7 md:m-12 lg:flex lg:flex-row-reverse"
      }
    >
      <div className="lg:w-1/2 lg:p-7 flex items-center justify-center">
        <img src={props.item.imgae} className="rounded-xl" />
      </div>
      <div className="lg:w-1/2  lg:p-10   flex flex-col justify-start items-start">
        <CategoryBox title={props.item.category} />
        <h3 className="text-[10px] md:text-lg mb-3 font-extralight lg:text-4xl">
          {props.item.title}
        </h3>
        <p className="text-[7px] md:text-lg font-black lg:text-xl">
          {props.item.description}
        </p>
        <ol className="list-decimal list-inside mt-2">
          {props.item.worker.map((worker) => (
            <li
              key={worker}
              className="text-[7px] md:text-lg font-thin lg:text-lg"
            >
              {worker}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Box;
