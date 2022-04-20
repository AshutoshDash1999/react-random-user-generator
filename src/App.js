import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import ProfileCard from "./ProfileCard";
import { Bars } from "react-loader-spinner";

function App() {
  const [userData, setUserData] = useState("");
  const [buttonText, setButtonText] = useState("Generate New User");
  const [ascentColor, setAscentColor] = useState("");

  const apiURL = "https://randomuser.me/api/";

  const apiCall = (url) => {
    axios
      .get(url)
      .then((response) => {
        setUserData(response.data.results[0]);
        // console.log(userData);
      })
      .catch((error) => {
        alert("Something went wrong");
        console.log(error);
      });
  };

  // console.log(userData.name.title);

  const colorList = [
    "hover:bg-red-700",
    "hover:bg-orange-700",
    "hover:bg-amber-700",
    "hover:bg-yellow-700",
    "hover:bg-lime-700",
    "hover:bg-green-700",
    "hover:bg-emerald-700",
    "hover:bg-teal-700",
    "hover:bg-cyan-700",
    "hover:bg-violet-700",
    "hover:bg-purple-700",
    "hover:bg-fuchsia-700",
    "hover:bg-pink-700",
    "hover:bg-rose-700",
    "hover:bg-indigo-700",
    "hover:bg-blue-700",
    "hover:bg-cyan-700",
  ];

  useEffect(() => {
    apiCall(apiURL);
    setAscentColor(colorList[Math.floor(Math.random() * colorList.length)]);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <button
          className="user-generate-btn rounded-lg bg-blue-600 p-4 mb-8"
          onClick={() => {
            setButtonText(`Genarating...`);
            apiCall(apiURL);
            setAscentColor(
              colorList[Math.floor(Math.random() * colorList.length)]
            );
            setInterval(() => {
              setButtonText("Genarate New User");
            }, 1000);
          }}
        >
          {buttonText}
        </button>
        {userData ? (
          <ProfileCard
            picture={userData.picture.large}
            title={userData.name.title}
            firstName={userData.name.first}
            lastName={userData.name.last}
            email={userData.email}
            phone={userData.phone}
            dob={new Date(userData.dob.date).toDateString()}
            age={userData.dob.age}
            city={userData.location.city}
            state={userData.location.state}
            country={userData.location.country}
            postcode={userData.location.postcode}
            username={userData.login.username}
            password={userData.login.password}
            color={ascentColor}
          />
        ) : (
          <Bars
            heigth="100"
            width="200"
            color="white"
            ariaLabel="loading-indicator"
          />
        )}
      </header>
    </div>
  );
}

export default App;
