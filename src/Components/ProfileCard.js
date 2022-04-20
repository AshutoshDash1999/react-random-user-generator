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

  const buttonStyle = `user-info-btn p-4 mx-4 my-8 rounded-md whitespace-normal hover:bg-${props.color} transition-all ease-in-out shadow-2xl`;

  return (
    <div
      className={`random-user-box p-8 rounded-xl w-1/2 max-h-fit transition-all ease-in-out duration-300`}
    >
      <div className="mx-auto flex justify-center">
        <img className="rounded-full" src={props.picture} alt="" />
      </div>
      <div>{profileData}</div>
      <div className="flex justify-center items-center flex-wrap	">
        <div onMouseEnter={showName}>
          <UserInfoButton text={<FaUser />} color={`bg-${props.color}`} />
        </div>
        <div onMouseEnter={showMail}>
          <UserInfoButton text={<MdEmail />} color={`bg-${props.color}`} />
        </div>
        <div onMouseEnter={showPhone}>
          <UserInfoButton text={<FaPhoneAlt />} color={`bg-${props.color}`} />
        </div>
        <div onMouseEnter={showDOB}>
          <UserInfoButton
            text={<FaCalendarAlt />}
            color={`bg-${props.color}`}
          />
        </div>
        <div onMouseEnter={showAddress}>
          <UserInfoButton
            text={<FaLocationArrow />}
            color={`bg-${props.color}`}
          />
        </div>
        <div onMouseEnter={showIdPassword}>
          <UserInfoButton text={<ImKey />} color={`bg-${props.color}`} />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
