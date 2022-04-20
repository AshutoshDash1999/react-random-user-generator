import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import ProfileCard from "./Components/ProfileCard";
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
    "red-700",
    "orange-700",
    "amber-700",
    "yellow-700",
    "lime-700",
    "green-700",
    "emerald-700",
    "teal-700",
    "cyan-700",
    "violet-700",
    "purple-700",
    "fuchsia-700",
    "pink-700",
    "rose-700",
    "indigo-700",
    "blue-700",
    "cyan-700",
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
