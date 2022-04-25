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
import UserInfoButton from "./UserInfoButton";

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

  // console.log(props.color);
  return (
    <div
      className={`random-user-box p-8 rounded-xl w-1/2 max-h-fit transition-all ease-in-out duration-300`}
    >
      <div className="mx-auto flex justify-center">
        <img
          className="rounded-full"
          src={props.picture}
          alt="user profile pic"
        />
      </div>
      <div>{profileData}</div>
      <div className="flex justify-center items-center flex-wrap	">
        <div onMouseEnter={showName}>
          <UserInfoButton text={<FaUser />} />
        </div>
        <div onMouseEnter={showMail}>
          <UserInfoButton text={<MdEmail />} />
        </div>
        <div onMouseEnter={showPhone}>
          <UserInfoButton text={<FaPhoneAlt />} />
        </div>
        <div onMouseEnter={showDOB}>
          <UserInfoButton text={<FaCalendarAlt />} />
        </div>
        <div onMouseEnter={showAddress}>
          <UserInfoButton text={<FaLocationArrow />} />
        </div>
        <div onMouseEnter={showIdPassword}>
          <UserInfoButton text={<ImKey />} />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
