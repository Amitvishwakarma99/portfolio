import React from "react";
import myimg from "../assets/myimg.png";

const Avatar = () => {
  return (
    <div>
      <div className="h-fit w-fit rounded-full  bg-cyellow ">
        <img
          src={myimg}
          alt="myimg"
          className="rotate-[23deg] rounded-full bg-cyellow   mix-blend-darken duration-300 hover:scale-[0.98]"
        />
      </div>
    </div>
  );
};

export default Avatar;
