import React from "react";
import logoWhite from "../../../assets/images/aws-final.png";
import logoBlack from "../../../assets/images/aws-final.png";

const NavbarHeader = ({ type, fixed, width, handleCollapse, collapse }) => (
  <div className="navbar-header">
    <button
      type="button"
      className="navbar-toggle"
      data-toggle="collapse"
      data-target="#navbar-menu"
      onClick={handleCollapse}
    >
      <i
        className={
          "eicon ion-android-" + (collapse === true ? "close" : "menu")
        }
      ></i>
    </button>
    <div className="logo">
      <a href={process.env.PUBLIC_URL}>
        {!fixed && width > 1023 ? (
          <img
            className="logo logo-display"
            src={type === "dark" ? logoBlack : logoWhite}
            alt=""
          />
        ) : !fixed && width < 1023 && type !== "dark" ? (
          <img className="logo logo-scrolled" src={logoBlack} alt="" />
        ) : (
          <img
            className="logo logo-scrolled"
            src={type === "dark" ? logoWhite : logoBlack}
            alt=""
          />
        )}
      </a>
    </div>
  </div>
);

export default NavbarHeader;
