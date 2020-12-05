import React from "react";
import "./style.scss";
import logo from "../../docosan-logo.jpg";
export default function Header(props) {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}
