import {React, useEffect, useState} from "react";
import NavBar from "../Navbar/NavBar";
import style from "./Form.module.css";
import SideLog from "../../Assets/sideLogo.png";
import { Link } from "react-router-dom";
import Axios from 'axios';

const LinkStyle= {
  textDecoration: 'none',
  color:'#000'
}


const Form = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  // const history = useHistory();
  // useEffect(() => {
  //   if (localStorage.getItem('user-info')){
  //     history.push("/add")
  //   }
  // }, []);

  //LOGIN Function
  async function login(){
    console.log({email, password});
    Axios.post("http://18.130.223.183:4000/api/v1/users/login", {
      email:email, 
      password:password
    })
    .then(result => {
      console.log(result)
    })
    .catch(error => {
      console.error(error)
    })
}
  //   let loginData = {email, password};
  //   let result = await fetch("http://18.169.241.94/api/v1/users/login", {
  //     method: 'POST',
  //     body: JSON.stringify(loginData)
  //   });

  //   result = await result.json();
  //   localStorage.setLoginData("user-info", JSON.stringify(result));
  //   history.push("/add");


  // const handleAPI = () => {
  //   Axios.post("https://reqres.in/api/login",{
  //     email:email, 
  //     password:password
  //   })
  //   .then(result => {
  //     console.log(result)
  //   })
  //   .catch(error => {
  //     console.error(error)
  //   })

  // }
  
  return (
    <div className={style.mainBox}>
      <NavBar />

      <div className={style.bottomBox}>
        <h3>Welcome!</h3>
        <p>
       Login now to access the dashboard
        </p>
      </div>
      <div className={style.imgAndForm}>
        <div className={style.sideBox}>
          <img src={SideLog} width="100%" />
        </div>
        <div className={style.formBox}>
          <h2>Sign In With Credentials</h2>

          <section>
            <input value={email} onChange={handleEmail} className={style.textfields} type="email" placeholder="Email"/>
            <br />
            <input value={password} onChange={handlePassword} className={style.textfields} type="password" placeholder="Password" />   
            <input type="checkbox" id="remember-me" name="remember-me" value="Remember Me"/>
            <label for="remember" style={{paddingLeft:'12px'}}>Remember Me</label>
          </section>
          <Link to={"/dashboard"} style={LinkStyle}>
            <button onClick={login}>SIGN IN</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Form;
