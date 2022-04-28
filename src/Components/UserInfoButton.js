import React, { useContext } from "react";
import { ThemeContext } from "../App";

function UserInfoButton(props) {
  const themeColor = useContext(ThemeContext);

  const spanFirstStyle = `w-0 h-0 rounded ${props.btnColor} absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1`;
  // console.log(themeColor);
  return (
    <button
      className="user-info-btn btn p-4 m-4 relative inline-flex items-center justify-start overflow-hidden transition-all rounded group"
      aria-label="info-button"
    >
      <span
        className={`w-0 h-0 rounded ${themeColor} absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1`}
      ></span>
      <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
        {props.text}
      </span>
    </button>
  );
}

export default UserInfoButton;
