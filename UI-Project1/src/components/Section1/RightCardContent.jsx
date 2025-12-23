import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="absolute w-full h-full top-0 left-0 p-8 flex flex-col justify-between">
      <h2 className="bg-white h-10 w-10 rounded-full flex justify-center items-center text-xl font-semibold">
        {props.id+1}
      </h2>
      <div>
        <p className="text-shadow-2xs text-xl leading-relaxed text-white mb-14 ">
          {props.intro}
        </p>
        <div className="flex justify-between">
          <button style={{backgroundColor:props.color}} className="text-white font-medium rounded-full px-8 py-2 cursor-pointer">
            {props.tag}
          </button>
          <button className="bg-white text-grey font-medium rounded-full px-3 py-2 cursor-pointer">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
