import { ButtonPropsTypes } from "@/types/types";
import React from "react";

const Button: React.FC<ButtonPropsTypes> = ({
  text,
  width,
  bg,
  border_color,
  text_color,
}) => {
  return (
    <div>
      <button
        className={`bg-${bg} text-${text_color}  h-14  border-[1px] flex justify-center items-center rounded-md border-${border_color}-100`}
        style={{ width: `${width}rem` }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
