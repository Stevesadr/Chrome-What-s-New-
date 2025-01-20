import React from "react";

const Header = () => {
  return (
    <div className="h-20 md:h-52 lg:h-80 size-11/12 m-2 lg:mt-5 lg:w-full lg:mr-10 lg:ml-10 lg:size-full rounded-xl bg-[url('../public/809457.jpg')] flex flex-col items-center justify-center relative">
      <h1 className="text-lg lg:text-4xl text-white font-bold">
        What’s New in Chrome
      </h1>
      <div classname="relative bottom-0 left-1/2 transform -translate-x-1/2">
        <img
          className="size-10 lg:size-20 lg:bottom-[-38px] absolute left-1/2 bottom-[-20px] transform -translate-x-1/2"
          src={"../public/images/87865_chrome_icon.png"}
          alt="google icon"
        />
      </div>
    </div>
  );
};

export default Header;
