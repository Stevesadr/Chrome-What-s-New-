import React, { useRef } from "react";
import CategoryBox from "./CategoryBox";
import Btn from "./Btn";

const Cardinfo = (props) => {
  const closeWindow = useRef();
  const closeWindowHandler = () => {
    props.action();
  };
  window.addEventListener("click", (e) => {
    if (e.target === closeWindow.current) {
      closeWindowHandler();
    }
  });
  return (
    <div className="fixed p-4  right-0 left-0 top-0 bottom-0 bg-black/25">
      <div
        className="h-full flex  items-center justify-center  rounded-xl"
        ref={closeWindow}
      >
        <div className="w-full bg-gray-700 relative lg:flex lg:flex-row-reverse rounded-xl m-4 p-4">
          <div className="absolute right-1">
            <Btn Appearance="close" action={props.action} />
          </div>
          <div className="lg:w-1/2 m-4 lg:p-7  flex items-center justify-center">
            <img src={props.item.imgae} className="rounded-xl" />
          </div>
          <div className="lg:w-1/2 lg:p-10 m-4 flex flex-col justify-start items-start">
            <CategoryBox title={props.item.category} />
            <h3 className="text-[10px] mb-3 text-wrap font-extralight lg:text-4xl">
              {props.item.title}
            </h3>
            <p className="text-[7px] text-wrap font-black lg:text-xl">
              {props.item.description}
            </p>
            <ol className="list-decimal list-inside mt-2">
              {props.item.worker.map((worker) => (
                <li key={worker} className="text-[7px] font-thin lg:text-lg">
                  {worker}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardinfo;
