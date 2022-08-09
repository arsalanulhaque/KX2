import React from "react";
import Graph from "../../Assets/graph.PNG";
import Temperature from "../../Assets/temperature.PNG";
import style from "./garphTemperature.module.css";

const GraphTemperature = () => {
  return (
    <div className={style.graphParent}>
      <div className={style.middleBox}>
        <div className={style.graphBox}>
          <div className={style.graphHeader}>
            <section>
              <small>OVERVIEW</small>
              <p>Sales Value</p>
            </section>
            <section>
              <button className={style.btn1}>Month</button>
              <button className={style.btn2}>Week</button>
            </section>
          </div>
          <img src={Graph} width="100%" />
        </div>
        <div className={style.tempBox}>
          <div className={style.text}>
            <small>PERFORMANCE</small>
            <p>Total Orders</p>
          </div>
          <img src={Temperature} width="100%" height="400px" />
        </div>
      </div>
    </div>
  );
};

export default GraphTemperature;
