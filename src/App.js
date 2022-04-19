import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import ProfileCard from "./ProfileCard";

function App() {
  const [genderFilter, setGenderFilter] = useState("");
  const [name] = useState({
    title: "",
    first: "",
    last: "",
  });

  const [contact] = useState({
    email: "",
    phone: "",
  });

  const [dob] = useState({
    age: "",
    date: "",
  });

  const [location] = useState({
    city: "",
    state: "",
    country: "",
    postcode: "",
  });

  const [picture, setPicture] = useState("");

  const [login] = useState({
    username: "",
    password: "",
  });
  const [ascentColor, setAscentColor] = useState("");

  const apiURL = "https://randomuser.me/api/";

  const apiCall = (url) => {
    axios
      .get(url)
      .then((response) => {
        const userData = response.data.results[0];
        // console.log(userData);
        name.title = userData.name.title;
        name.first = userData.name.first;
        name.last = userData.name.last;

        contact.email = userData.email;
        contact.phone = userData.phone;

        dob.age = userData.dob.age;
        dob.date = new Date(userData.dob.date).toDateString();

        location.city = userData.location.city;
        location.state = userData.location.state;
        location.country = userData.location.country;
        location.postcode = userData.location.postcode;

        login.username = userData.login.username;
        login.password = userData.login.password;

        setPicture(userData.picture.large);
      })
      .catch((error) => {
        alert("Something went wrong");
        console.log(error);
      });
  };

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
        {name.first ? (
          <ProfileCard
            picture={picture}
            title={name.title}
            firstName={name.first}
            lastName={name.last}
            email={contact.email}
            phone={contact.phone}
            dob={dob.date}
            age={dob.age}
            city={location.city}
            state={location.state}
            country={location.country}
            postcode={location.postcode}
            username={login.username}
            password={login.password}
            color={ascentColor}
          />
        ) : (
          <h1>Waiting for data....</h1>
        )}
      </header>
    </div>
  );
}

export default App;
