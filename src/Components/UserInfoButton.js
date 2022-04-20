import React from "react";

function UserInfoButton(props) {
  return (
    <button className="user-info-btn p-4 mx-4 my-8 relative inline-flex items-center justify-start overflow-hidden transition-all rounded group">
      <span
        className={`w-0 h-0 rounded ${props.color} absolute top-0 left-0 ease-out duration-200 transition-all group-hover:w-full group-hover:h-full -z-1`}
      ></span>
      <span className="w-full text-black transition-colors duration-200 ease-in-out group-hover:text-white z-10">
        {props.text}
      </span>
    </button>
  );
}

export default UserInfoButton;
