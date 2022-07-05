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
          {/* <a href="https://www.facebook.com/" target="_blank"> */}
          <IconButton color="primary">
            {/* <FavoriteIcon />*/} <img src={img1} className="img" />
          </IconButton>
          {/* </a> */}
          {/* <a href="https://twitter.com" target="_blank">
            <IconButton color="primary">
              <img src={img2} className="img" />
            </IconButton>
          </a> */}
          {/* <Button variant="contained">Sign Up</Button>
          <Button variant="contained">Log In</Button>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
