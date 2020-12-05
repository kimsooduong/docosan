import React, { useEffect, useState } from "react";
import "./style.scss";
import logo from "../../logo_name_white.png";
export default function Footer(props) {
  return (
    <div className="footer">
      <div className="content">
        <div className="row">
          <div className="col-md-6">
            <img src={logo} alt="logo" />
          </div>
          <div className="col-md-3">
            <div className="block-left">
              16192 Coastal Highway Lewes, Delaware 19958 United States of
              America
            </div>
          </div>
          <div className="col-md-3">
            <div className="block-right">
              Lim Tower 25F, 9-11 Ton Duc Thang Street Ho Chi Minh City, Vietnam
            </div>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
}
