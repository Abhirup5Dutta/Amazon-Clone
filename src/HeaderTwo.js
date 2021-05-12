import React from "react";
import "./HeaderTwo.css";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

function HeaderTwo() {
  return (
    <div className="header__two">
      <LocationOnOutlinedIcon className="header2__locationIcon" />

      <div className="header2__nav">
        <div className="header2__option">
          <span className="header2__optionOne ">Deliver to</span>
          <span className="header2__optionTwo ">India</span>
        </div>

        <div className="header2__option__one">
          <p className="header2__option__one__two ">Today's Deals</p>
          <p className="header2__option__one__two ">Customer Service</p>
          <p className="header2__option__one__two ">Gift Cards</p>
          <p className="header2__option__one__two ">Registry</p>
          <p className="header2__option__one__two ">Sell</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderTwo;