import React, { useEffect, useState } from "react";

export default function Start() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(30);
  const [isRunning, setIsRunning] = useState(false);
  const superFast = 100;
  const fast = 250;
  const medium = 500;
  const [speed, setSpeed] = useState("fast");
  let btn = document.querySelector(".btn");
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".btn").disabled = true;
  });

  useEffect(() => {
    let intervalId = null;
    if (isRunning && time > 0) {
      btn.disabled = false;
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, `${speed}`);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  useEffect(() => {
    document.querySelector(
      ".counter"
    ).textContent = `You clicked ${count} times`;
  }, [count]);

  if (time == 0) {
    btn.disabled = true;
  }

  return (
    <div className="game">
      Timer Speed:
      <span className="speed">
        <button
          className="speedBtn"
          onClick={() => {
            setSpeed(superFast);
          }}
        >
          Super Fast
        </button>
        <button
          className="speedBtn"
          onClick={() => {
            setSpeed(fast);
          }}
        >
          Fast
        </button>
        <button
          className="speedBtn"
          onClick={() => {
            setSpeed(medium);
          }}
        >
          Slow
        </button>
      </span>
      <span>
        {!isRunning ?
        <button
          className="startBtn"
          onClick={() => {
            setIsRunning(true);
          }}
        >
          Start
        </button>
        :
        <button
          className="resetBtn"
          onClick={() => {
            setIsRunning(false);
            btn.disabled = true;
            setTime(30);
            setCount(0);
          }}
        >
          Reset
        </button>}
      </span>
      <span className="timeRemaining">Time Remaining: {time}</span>
      <span>
        <button className="btn" onClick={() => setCount((count) => count + 1)}>
          CLICK ME
        </button>
      </span>
      <span className="counter"></span>
    </div>
  );
}
