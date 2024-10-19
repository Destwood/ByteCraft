import React from "react";
import classes from "./fundCart.module.scss";
import moreIcon from "../../../assets/more-info-icon.svg";
import statisticIcon from "../../../assets/statistic-icon.svg";
import resultCompleteIcon from "../../../assets/result-complete-icon.svg";

import img from "../../../assets/pickUpExample.jpg";

const FundCart = ({ item }) => {
  console.log(item);

  return (
    <div className={classes.item}>
      <img src={img} alt="fundImage" className={classes.image} />

      <div className={classes.itemInfo}>
        <div className={classes.itemBlock}>
          <h3 className={classes.title}>{item.name}</h3>
          <button className={classes.moreInfo}>
            <img src={moreIcon} alt="Icon" />
            Дізнатись більше
          </button>
        </div>

        <p>Уже зібрано: {item.currentSum} із гривень</p>

        <div className={classes.itemBlock}>
          <h3 className={classes.title}>
            <img src={statisticIcon} alt="Icon" />
            <span>{item.donaters} учасників</span>
          </h3>

          <button className={classes.resultComplete}>
            <img src={resultCompleteIcon} alt="Icon" />
            Задонатив
          </button>
        </div>
      </div>
    </div>
  );
};

export default FundCart;
