import React, { useState, useEffect } from "react";

const Greeting = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const months = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
  ]

  let month = months[date.getMonth()]
  
 let today = `${date.getUTCDate()} ${month} ${date.getFullYear()}`

  let greeting = "";

  if (hours > 0 && hours < 12) {
    greeting = "Good morning";
  } 
  else if (hours >= 12 && hours < 18) {
    greeting = "Good afternoon";
  } 
  else if (hours >= 18 && hours < 21) {
    greeting = "Good evening";
  } 
  else {
    greeting = "Good night";
  }

  return (
    <div className="py-7 px-10 max-lg:px-2 max-lg:py-3">
      <div className=" max-w-[1600px] max-lg:container flex justify-between items-center">
        <h1 className=" text-white font-bold flex items-center gap-1 text-4xl max-m:text-lg mb-10 mt-2"><span className="max-lg:text-3xl">&#128075;</span>{greeting}</h1>

        <div>
          <p className=" text-white font-semibold text-lg max-sm:text-sm">{today}</p>
          <p className="text-white font-semibold text-lg max-sm:text-sm">
            {hours < 10 ? `0${hours}` : hours}:
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
