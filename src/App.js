import React, { useState } from "react";
import "./styles.css";

var ts = [
  "Yamaha Rx-z",
  "Yamaha Rx-135",
  "Yamaha Rx-100",
  "Suzuki Samurai",
  "Suzuki Samrat"
];

var Sports = [
  "Triumph street triple rs",
  "Kawasaki ninja H2",
  "Ducati panigale v4",
  "Suzuki hayabuza"
];

var rc = ["Bajaj Pulsar 200ns", "Yamaha FZ-s", "Yamaha R15 v3", "KTM duke 200"];

export default function App() {
  const [output, setoutput] = useState("");
  function twoStroke() {
    var output = "";

    output = ts.map((item) => <li key={item}>{item}</li>);

    setoutput(output);
  }

  function recent() {
    var output = "";

    output = rc.map((item) => <li key={item}>{item}</li>);

    setoutput(output);
  }

  function Sport() {
    var output = "";

    output = Sports.map((item) => <li key={item}>{item}</li>);

    setoutput(output);
  }

  return (
    <div className="App">
      <h2>My favourite bikes</h2>
      <button onClick={() => twoStroke()}>2 strokes!</button>
      <button onClick={() => recent()}>Recent bikes</button>
      <button onClick={() => Sport()}>Sports</button>
      <div>{output}</div>
    </div>
  );
}
