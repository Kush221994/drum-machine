import React from "react";
import { Button, IconButton } from "@mui/material";
import img1 from "../../assets/nav-logos/git.png";
// import img2 from "../../assets/nav-logos/tweeter.jpg";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import { Router, Route, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-heading">Drum Machine</div>
        <div className="navbuttons">
          <a href="https://github.com/Kush221994/p3drummachine" target="_blank">
            <IconButton color="primary">
              <img src={img1} className="img" />
            </IconButton>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
