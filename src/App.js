import React, { createContext, useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import ProfileCard from "./Components/ProfileCard";
import { Bars } from "react-loader-spinner";
import { FcLike } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ThemeContext = createContext();
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
    "bg-red-700",
    "bg-orange-700",
    "bg-amber-700",
    "bg-yellow-700",
    "bg-lime-700",
    "bg-green-700",
    "bg-emerald-700",
    "bg-teal-700",
    "bg-cyan-700",
    "bg-violet-700",
    "bg-purple-700",
    "bg-fuchsia-700",
    "bg-pink-700",
    "bg-rose-700",
    "bg-indigo-700",
    "bg-blue-700",
    "bg-cyan-700",
  ];

  useEffect(() => {
    apiCall(apiURL);
    setAscentColor(colorList[Math.floor(Math.random() * colorList.length)]);
  }, []);

  return (
    <div className="App">
      <header className="App-header p-8 h-screen">
        <ToastContainer toastClassName="dark-toast" />
        <h1 className="text-xl md:text-2xl xl:text-4xl mb-12">
          Random <span className="text-orange-500">User Generator</span>
        </h1>
        <ThemeContext.Provider value={ascentColor}>
          <button
            className="user-generate-btn rounded-lg bg-blue-600 hover:bg-blue-700 p-4 mb-8"
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
            />
          ) : (
            <Bars
              heigth="100"
              width="200"
              color="white"
              ariaLabel="loading-indicator"
            />
          )}
        </ThemeContext.Provider>
        <footer className="flex justify-around mt-20">
          Made with &nbsp;
          <FcLike />
          &nbsp; by &nbsp;
          <a
            className="underline underline-offset-4"
            href="https://ashutoshdash.netlify.app/"
          >
            Ashutosh Dash
          </a>
        </footer>
      </header>
    </div>
  );
}

export default App;
export { ThemeContext };
