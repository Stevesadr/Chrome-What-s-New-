import React from "react";
import CategoryBox from "./CategoryBox";
import Box from "./Box";

const MainBody = (props) => {
  console.log(props.item[1].title);
  return (
    <div className="w-full ">
      <div>
        {props.item.map((item) => {
          return <Box item={item} />;
        })}
      </div>
    </div>
  );
};

export default MainBody;
