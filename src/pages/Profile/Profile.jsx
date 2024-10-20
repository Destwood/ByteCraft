import style from "./Profile.module.scss";

import defImg from "../../assets/profile.svg";
import fix from "../../assets/fix.svg";
import ListItem from "./ListItem/ListItem";
import { Link } from "react-router-dom";
import { item } from './data';
import React, { useState } from 'react';


function Profile() {
  const [count, setCount] = useState(0);

  const handleNext = () => {
    setCount((prevCount) => (prevCount + 1) % 3);
  };
  
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.mainInfo}>
          <div className={style.pfpContainer}>
            <img src={defImg} alt="profilePic" />
          </div>
          <div className={style.infoContainer}>
            <button className={style.updateImg}>Завантажити нове фото</button>

            <button onClick={handleNext} className={style.updateImg}>Перемкнути користувача</button>
            <div className={style.info}>
              <div className={style.infoHeader}>
                <h5 className={style.infoTitle}>Ім'я та прізвище</h5>
                <Link to="/profile-settings">
                  <img src={fix} alt="" />
                </Link>
              </div>
              <div className={style.infoContent}>
                <p>Роль користувача:
                  {count === 0 && 
                  <>
                    користувач
                  </>}
                  {count === 1 && 
                  <>
                    волонтер
                  </>}
                  {count === 2 && 
                  <>
                    поставщик
                  </>}
                </p>
                <p>E-mail: someExample@Gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {count === 0 && 
      <>
        <div className={style.middle}>
            <div className={style.info}>
              <div className={style.dontaionInfo}>
                <div className={style.dontaionAmount}>
                  <h6 className={style.donationTitle}>Приєднався до</h6>
                  <p className={style.donationText}>N зборів</p>
                </div>
                <div className={style.uahAmount}>
                  <h6 className={style.donationTitle}>
                    Задонатив на користь нашої перемоги
                  </h6>
                  <p className={style.donationText}>100000 гривень</p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.bottom}>
            <h3 className={style.lastestTitle}>Мої останні збори:</h3>
            <div className={style.latestList}>
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
            </div>
          </div>
        </>
        }
      {count === 1 && 
        <>
        <div className={style.middle}>
            <div className={style.info}>
              <div className={style.dontaionInfo}>
                <div className={style.dontaionAmount}>
                  <h6 className={style.donationTitle}>Приєднався до</h6>
                  <p className={style.donationText}>N зборів</p>
                </div>
                <div className={style.uahAmount}>
                  <div className={style.dontaionAmount}>
                    <h6 className={style.donationTitle}>Організував</h6>
                    <p className={style.donationText}>N зборів</p>
                  </div>
                </div>
                <div className={style.uahAmount}>
                  <div className={style.dontaionAmount}>
                    <h6 className={style.donationTitle}>Задонатив</h6>
                    <p className={style.donationText}>1000 гривень</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={style.secondBlock}>
            <button className={style.secondButtton}>Переглянути відкриті збори</button>
            <button className={style.secondButtton}>Переглянути закриті збори</button>
          </div>

          <div className={style.bottom}>
            <h3 className={style.lastestTitle}>Мої останні збори:</h3>
            <div className={style.latestList}>
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
            </div>
          </div>
        </>
      }
      {count === 2 && 
        <>
        <div className={style.secondBlock}>
            <button className={style.thirdButtton}>Додати товар</button>
          </div>
          <div className={style.bottom}>
            <h3 className={style.lastestTitle}>Останні опубліковані оголошення:</h3>
            <div className={style.latestList}>
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
            </div>
          </div>
        </>
      }
        
    </div>
  )
}

export default Profile
