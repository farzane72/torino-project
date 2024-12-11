"use client";
import React, { useState, useEffect } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(120); // 120 seconds (2 minutes)

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className=" text-xs font-light">
      <div className="flex gap-1 ">
        <p> {formatTime(timeLeft)}</p>
        <p>ارسال مجدد تا کد </p>
      </div>

      {timeLeft === 0 && <p>زمان شما به پایان رسید!</p>}
    </div>
  );
};

export default Timer;
