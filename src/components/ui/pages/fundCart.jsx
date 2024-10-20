import React from 'react'
import classes from './fundCart.module.scss'
import moreIcon from '../../../assets/more-info-icon.svg'
import statisticIcon from '../../../assets/statistic-icon.svg'
import resultCompleteIcon from '../../../assets/result-complete-icon.svg'

import img from '../../../assets/pickUpExample.jpg'
import { Link } from 'react-router-dom'

const FundCart = ({ item }) => {
  console.log(item)
  return (
    <div className={classes.item}>
      <Link to={`/fundraiser/${item._id}`}>
        <img
          src={`http://26.122.74.29:4200/uploads/photo2.jpg`}
          alt="fundImage"
          className={classes.image}
        />
      </Link>

      <div className={classes.itemInfo}>
        <div className={classes.itemBlock}>
          <Link to={`/fundraiser/${item._id}`}>
            <h3 className={classes.title}>{item.name}</h3>
          </Link>

          <Link to={`/fundraiser/${item._id}`} className={classes.moreInfo}>
            <img src={moreIcon} alt="Icon" />
            Дізнатись більше
          </Link>
        </div>

        <p>
          Уже зібрано: {item.currentSum} із {item.totalSum} гривень
        </p>

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
  )
}

export default FundCart
