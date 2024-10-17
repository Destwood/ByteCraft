import classes from "./Home.module.scss"
import moreIcon from './more-info-icon.svg'
import statisticIcon from './statistic-icon.svg'
import resultCompleteIcon from './result-complete-icon.svg'

import React, { useState } from "react";
import { items } from "./data.js";

const Home = () => {
    const [organizationFilter, setOrganizationFilter] = useState("all");
    const [donationFilter, setDonationFilter] = useState("all");
    const [sumRange, setSumRange] = useState("all");

    const handleOrganizationFilterChange = (event) => {
        setOrganizationFilter(event.target.value);
    };

    const handleDonationFilterChange = (event) => {
        setDonationFilter(event.target.value);
    };

    const handleSumRangeChange = (event) => {
        setSumRange(event.target.value);
    };

    const filterItems = () => {
        return items.filter(item => {
            const isOrganizationMatch = organizationFilter === "all" || 
                item.organization === organizationFilter;

            const isDonationMatch = donationFilter === "all" || 
                item.donaters <= Number(donationFilter);

            const isSumInRange = sumRange === "all" || 
                item.max_donations <= Number(sumRange);

            return isOrganizationMatch && isDonationMatch && isSumInRange;
        });
    };

    const filteredItems = filterItems(); 

  return (
    <div className={classes.filter}>
      <h2 className={classes.header}>Фільтрування за:</h2>

      <div className={classes["select-block"]}>
          <select className={classes["select-list"]} onChange={handleOrganizationFilterChange}>
            <option value="all">Організація (всі)</option>
            <option value="Організація 1">Організація 1</option>
            <option value="Організація 2">Організація 2</option>
          </select>

          <select className={classes["select-list"]} onChange={handleDonationFilterChange}>
            <option value="all">Кількість донатів (всі)</option>
            <option value="1000">до 1000</option>
            <option value="2000">до 2000</option>
          </select>

          <select className={classes["select-list"]} onChange={handleSumRangeChange}>
            <option value="all">Сума збору (всі)</option>
            <option value="10000">до 10000</option>
            <option value="20000">до 20000</option>
          </select>
      </div>
      
    <div className={classes.content}>

      {filteredItems.map((item, index) => (
                  <div key={index} className={classes.item}>
                    <img className={classes.image}/>

                    <div className={classes["item-info"]}>
                      <div className={classes["item-block"]}>
                        <h3 className={classes.title}>{item.name}</h3>
                        <button className={classes["more-info"]}>
                            <img src={moreIcon} alt="Icon" />
                            Дізнатись більше
                        </button>
                      </div>

                      <p>Уже зібрано: {item.current_donations} із {item.max_donations} гривень</p>

                        <div className={classes["item-block"]}>
                              <h3 className={classes.title}>
                              <img src={statisticIcon} alt="Icon" />
                                {item.donaters} учасників</h3>

                              <button className={classes["result-complete"]}>
                              <img src={resultCompleteIcon} alt="Icon" />
                                Задонатив</button>
                        </div>      
                    </div>
                  </div>
      ))}

    </div>

    </div>
  )
}
export default Home
