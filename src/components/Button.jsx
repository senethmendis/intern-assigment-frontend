import React from "react";

const Button = ({ children, customStyles, isBordered }) => {
  return (
    <button
      className={`${customStyles} ${
        isBordered
          ? "border border-navi-blue text-navi-blue"
          : " bg-navi-blue text-white"
      } rounded-full gap-6 px-6 py-2 max-h-[60px] flex flex-row items-center`}
    >
      {children}
    </button>
  );
};

export default Button;
