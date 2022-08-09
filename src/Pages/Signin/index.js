import React from "react";
import NavBar from "../../Components/Navbar/NavBar";
import style from "./signin.module.css";
import SideLog from "../../Assets/sideLogo.png";


const Signin = () => {
  return (
    <div className={style.mainBox}>
      <NavBar />

      <div className={style.bottomBox}>
        <h3>Welcome!</h3>
        <p>
          Login to access the dashboard
        </p>
      </div>
      <div className={style.imgAndForm}>
        <div className={style.sideBox}>
          <img src={SideLog} width="100%" />
        </div>
        <div className={style.formBox}>
          <h2>Login With Credentials</h2>
          <section>
            <input className={style.textfields} type="email" placeholder="Email" />
            <br />
            <input className={style.textfields} type="password" placeholder="Password" />
            <input className={style.rememberCheckbox} type="checkbox" id="remember-me" name="remember-me" value="Remember Me" />
            <label className={style.rememberLabel} for="remember" >Remember Me</label>
          </section>
          <button> Login </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
