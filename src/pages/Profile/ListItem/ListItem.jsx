import React from "react";
import style from "./ListItem.module.scss";

import barChart from "../../../assets/bar_chart.svg";
import coolicon from "../../../assets/coolicon.svg";

function ListItem() {
  return (
    <div className={style.listItem}>
      <div className={style.header}>
        <p>
          <span className={style.specialText}>Number: N</span>
        </p>
        <button className={style.learnMore}>
          <img src={coolicon} alt="" />
          learn more
        </button>
      </div>
      <div className={style.main}>
        <p>Уже зібрано 1000</p>
        <p>з 10000 гривень</p>
      </div>
      <div className={style.bottom}>
        <img className={style.bottomImg} src={barChart} alt="" />
        <p className={style.bottomText}>
          <span className={style.specialText}>1024</span> Participants
        </p>
      </div>
    </div>
  );
}

export default ListItem;
