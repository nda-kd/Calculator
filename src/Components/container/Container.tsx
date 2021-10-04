import React from "react";
import "./Container.scss";
import LCD from "../LCD/LCD";
import KeyPad from "../Keypad/Keypad";

function Container() {
  return (
    <div className="container-wrap">
      <div className="inside">
        <LCD />
        <KeyPad />
      </div>
    </div>
  );
}

export default Container;
