import React from 'react'
import style from './Profile.module.scss'

import defImg from '../../assets/profile.svg'

import fix from '../../assets/fix.svg'
import ListItem from './ListItem/ListItem'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.mainInfo}>
          <div className={style.pfpContainer}>
            <img src={defImg} alt="profilePic" />
          </div>
          <div className={style.infoContainer}>
            <button className={style.updateImg}>Завантажити нове фото</button>

            <div className={style.info}>
              <div className={style.infoHeader}>
                <h5 className={style.infoTitle}>Name and Surname</h5>
                <Link to="/profile-settings">
                  <img src={fix} alt="" />
                </Link>
              </div>
              <div className={style.infoContent}>
                <p>User role: user</p>
                <p>E-mail: someExample@Gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  )
}

export default Profile
