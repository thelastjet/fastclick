import React from "react";
import "./App.css";
import Start from "./start";
import mouseClick from "../src/mouseClick.jpg";

export default function App() {
  return (
    <div className="body">
      <h1>
        Fast Click <span className="h1span">(curiously addicting)</span>
      </h1>
      {
        <img
          className="mouseClick"
          src={mouseClick}
          alt="clicking a computer mouse"
        />
      }

      <p>Click timer speed and then click start!</p>
      <Start />
      <p>Click the button as fast as you can!</p>
      <p>See how many times you can click before time expires!</p>
    </div>
  );
}
