import React from "react";
import style from "./card.module.css";
import logo from "../../Assets/sideLogo.png";

const Cards = () => {
  return (
    <div className={style.cardParentBox}>
      <div className={style.cardParent}>
        <div className="">
          <section className={style.cardBox}>
            <div>
              <p>TRAFFIC</p>
              <p>350,897</p>
            </div>
            <div className={style.imgBOx}>
              <img src={logo} width="100%" />
            </div>
          </section>
        </div>
        <div>
          <span className={style.cardBottom}>
            <i className="fa-solid fa-arrow-up"></i>
            3.48 <span>Since Last Month</span>
          </span>
        </div>
      </div>

      <div className={style.cardParent}>
        <div className="">
          <section className={style.cardBox}>
            <div>
              <p>TRAFFIC</p>
              <p>350,897</p>
            </div>
            <div className={style.imgBOx}>
              <img src={logo} width="100%" />
            </div>
          </section>
        </div>
        <div>
          <span className={style.cardBottom}>
            <i className="fa-solid fa-arrow-up"></i>
            3.48 <span>Since Last Month</span>
          </span>
        </div>
      </div>

      <div className={style.cardParent}>
        <div className="">
          <section className={style.cardBox}>
            <div>
              <p>TRAFFIC</p>
              <p>350,897</p>
            </div>
            <div className={style.imgBOx}>
              <img src={logo} width="100%" />
            </div>
          </section>
        </div>
        <div>
          <span className={style.cardBottom}>
            <i className="fa-solid fa-arrow-up"></i>
            3.48 <span>Since Last Month</span>
          </span>
        </div>
      </div>

      <div className={style.cardParent}>
        <div className="">
          <section className={style.cardBox}>
            <div>
              <p>TRAFFIC</p>
              <p>350,897</p>
            </div>
            <div className={style.imgBOx}>
              <img src={logo} width="100%" />
            </div>
          </section>
        </div>
        <div>
          <span className={style.cardBottom}>
            <i className="fa-solid fa-arrow-up"></i>
            3.48 <span>Since Last Month</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
