import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo1.png";
import style from "./Navbar.module.css";


const LinkStyle= {
  textDecoration: 'none',
  color:'#000'
}


const NavBar = () => {
  let user = {
    //   border :"1px",
    marginRight: "5px",
    // marginLEft: "15px",
    // marginTop: "7px",
    //   color :
  };
  let key = {
    marginRight: "8px",
  };

  return (
    <div className={style.navbarBox}>
      <div className={style.logo}>
        <img src={Logo} width="100%" />
      </div>
      <div>
        <ul>
          <Link to={'/dashboard'} style={LinkStyle}>
            <li>
              <i className="fa-solid fa-face-smile" /> Dashboard
            </li>
          </Link>
          <li>
            <i className="fa-solid fa-circle-user" style={user} />
            Register
          </li>
          <li>
            <i className="fa-solid fa-key" style={key} />
            Login
          </li>
          <li>
            <i className="fa-solid fa-user-large" /> Profile
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
