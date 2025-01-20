import React from "react";

const CategoryBox = (props) => {
  return (
    <div className="inline text-[5px] mt-3 rounded-sm bg-blue-400 p-1 lg:text-lg">
      {props.title}
    </div>
  );
};

export default CategoryBox;
