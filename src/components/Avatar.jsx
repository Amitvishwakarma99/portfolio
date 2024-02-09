import React from "react";

const Avatar = () => {
  return (
    <div>
      <div className="bg-cyellow w-fit h-fit  rounded-full ">
        <img
          src="../src/assets/img.png"
          alt=""
          className="mix-blend-darken hover:scale-[0.98] duration-300   bg-cyellow rounded-full rotate-[23deg]"
        />
      </div>
    </div>
  );
};

export default Avatar;
