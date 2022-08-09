import React, { useState, useEffect } from "react";
import style from "./Sidebar.module.css";
import Basket from "../../Assets/basket.png";
import { Link } from "react-router-dom";

const LinkStyle = {
  textDecoration: 'none',
  color: '#000'
}

const TopBar = (props) => {
  const [text, setText] = useState(props.text)

  useEffect(() => {
    setText(props.text)
  }, [text]);

  return (
    <div className={style.sideMainBox}>
      <header className={style.sideBox}>
        <Link to='/dashboard' style={LinkStyle}>
          <section>
            <p className={style.heading}>{text.length ==0? "NA" : text}</p>
          </section>
        </Link>

        <section className={style.nav}>
          <div className={style.inpBox}>
            <span className={style.srchIcon}>
              <i className="fa-solid fa-magnifying-glass" />
            </span>
            <input type="text" placeholder="Search" />
          </div>
          <div className={style.profile}>
            <section className={style.navImgBox}>
              <img src={Basket} width="100%" />
            </section>
            <p style={{ marginTop: '20px', fontWeight: '600', fontSize: '18px', color: '#fff' }}>ADMIN</p>
          </div>
        </section>
      </header>
    </div>
  );
}
export default TopBar;