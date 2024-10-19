import React, { useState } from "react";
import classes from "./Fundraiser.module.scss";
import userAvatar from "./user-avatar.svg";
import ProgressBar from "./ProgressBar";

import img from "../../../assets/pickUpExample.jpg";

const Fundraiser = () => {
  const [progress, setProgress] = useState(50);

  const increaseProgress = () => {
    setProgress((prev) => Math.min(prev + 10, 100));
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.header}>Збір N</h2>

      <div className={classes.imageBlock}>
        <img src={img} alt="photo2" className={classes.imageMain} />
        <img src={img} alt="asd" className={classes.image} />
        <img src={img} alt="gre" className={classes.image} />
        <img src={img} alt="gfd" className={classes.image} />
      </div>

      <div className={classes.mainInfo}>
        <h3 className={classes.title}>Деталі збору</h3>

        <div className={classes.mainInfoBlock}>
          <p>Зібрано, грн</p> <p>1000 / 10000</p>
        </div>
        <ProgressBar progress={progress} />
      </div>

      <div className={classes.info}>
        <h3 className={classes.subTitle}>Деталі про збір</h3>
        <p className={classes.aboutText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at ex
          vitae risus sodales bibendum sed eget ipsum. Vestibulum dictum ante
          quis bibendum laoreet. Pellentesque vel dapibus massa, ac congue
          dolor. Donec mollis mauris eu sem laoreet, ac cursus dui egestas.
          Donec sit amet aliquam justo, sed luctus nisi. Vestibulum ullamcorper
          tellus tempus mattis bibendum.
        </p>
      </div>

      <div className={classes.info}>
        <h3 className={classes.subTitle}>
          Останні користувачі, які задонатили:
        </h3>

        <div className={classes.user}>
          <img src={userAvatar} className={classes.userAvatar} alt="Avatar" />

          <p className={classes.userName}> ВолонтерN</p>
          <p className={classes.userSum}>100 грн</p>
        </div>

        <div className={classes.user}>
          <img src={userAvatar} className={classes.userAvatar} alt="Avatar" />

          <p className={classes.userName}> ВолонтерN</p>
          <p className={classes.userSum}>100 грн</p>
        </div>

        <div className={classes.user}>
          <img src={userAvatar} className={classes.userAvatar} alt="Avatar" />

          <p className={classes.userName}> ВолонтерN</p>
          <p className={classes.userSum}>100 грн</p>
        </div>
      </div>
    </div>
  );
};

export default Fundraiser;
