import React from "react";
import { useState } from "react";
import {
  FaLocationArrow,
  FaUser,
  FaCalendarAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { ImKey } from "react-icons/im";
import { MdEmail } from "react-icons/md";

function ProfileCard(props) {
  const [profileData, setProfileData] = useState(
    `${props.title}. ${props.firstName} ${props.lastName}`
  );

  const showName = () => {
    setProfileData(`${props.title}. ${props.firstName} ${props.lastName}`);
  };
  const showMail = () => {
    setProfileData(`${props.email}`);
  };
  const showPhone = () => {
    setProfileData(`${props.phone}`);
  };
  const showDOB = () => {
    setProfileData(`DOB: ${props.dob}; Age: ${props.age}`);
  };
  const showAddress = () => {
    setProfileData(
      `${props.city}, ${props.state}, ${props.country} - ${props.postcode}`
    );
  };
  const showIdPassword = () => {
    setProfileData(`UserID: ${props.username}; Password: ${props.password}`);
  };

  const buttonStyle = `user-info-btn p-4 mx-4 my-8 rounded-md whitespace-normal ${props.color} transition ease-in-out shadow-2xl`;

  return (
    <div
      className={`random-user-box p-8 rounded-xl w-1/2 max-h-fit transition ease-in-out duration-300`}
    >
      <div className="mx-auto flex justify-center">
        <img className="rounded-full" src={props.picture} alt="" />
      </div>
      <div>{profileData}</div>
      <div className="flex justify-center items-center flex-wrap	">
        <div onMouseEnter={showName} className={buttonStyle}>
          <FaUser />
        </div>
        <div onMouseEnter={showMail} className={buttonStyle}>
          <MdEmail />
        </div>
        <div onMouseEnter={showPhone} className={buttonStyle}>
          <FaPhoneAlt />
        </div>
        <div onMouseEnter={showDOB} className={buttonStyle}>
          <FaCalendarAlt />
        </div>
        <div onMouseEnter={showAddress} className={buttonStyle}>
          <FaLocationArrow />
        </div>
        <div onMouseEnter={showIdPassword} className={buttonStyle}>
          <ImKey />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
