import classes from "./Catalog.module.scss"
import React, { useState } from "react";
import { items } from "./data.js";

const Catalog = () => {
    const [priceRange, setPriceRange] = useState("all"); // Стан для вибраного діапазону цін
    const [organizationFilter, setOrganizationFilter] = useState("all"); // Стан для вибраної організації

    // Функція для зміни стану при виборі іншої опції для фільтрації по ціні
    const handlePriceFilterChange = (event) => {
        setPriceRange(event.target.value);
    };

    // Функція для зміни стану при виборі іншої опції для фільтрації по організації
    const handleOrganizationFilterChange = (event) => {
        setOrganizationFilter(event.target.value);
    };

    // Функція для фільтрації елементів за діапазоном цін і організацією
    const filterItems = () => {
        return items.filter(item => {
            // Перевірка фільтра за діапазоном цін
            const [minSelectedPrice, maxSelectedPrice] = priceRange !== "all" 
                ? priceRange.split("-").map(Number) 
                : [null, null];
            
            const isPriceInRange = priceRange === "all" ||
                (item.min_price >= minSelectedPrice && item.max_price <= maxSelectedPrice);
            
            // Перевірка фільтра за організацією
            const isOrganizationMatch = organizationFilter === "all" ||
                item.organization === organizationFilter;
            
            // Повернути true, якщо обидва фільтри відповідають
            return isPriceInRange && isOrganizationMatch;
        });
    };

    const filteredItems = filterItems();

      return (
        <div className={classes.filter}>
          <h2 className={classes.header}>Фільтрування за:</h2>

          <div className={classes["select-block"]} >
              <select onChange={handleOrganizationFilterChange} className={classes["select-list"]}>
                <option value="all">Організація поки</option>
                <option value="Організація A">Організація A</option>
                <option value="Організація B">Організація B</option>
                <option value="Організація C">Організація C</option>
              </select>

              <select className={classes["select-list"]} onChange={handlePriceFilterChange}>
                <option value="all">Ціна</option>
                <option value="100-200">100-200</option>
                <option value="200-300">200-300 </option>
              </select>
          </div>
          
           <div className={classes.content}>

              {filteredItems.map((item, index) => (
                  <div key={index} className={classes.item}>
                    <img className={classes.image}/>

                    <div className={classes["item-info"]}>
                      <h3 className={classes.title}>{item.name}</h3>
                      <p className={classes.descrption}>Ціна - {item.min_price} - {item.max_price} грн</p>           
                    </div>
                  </div>
              ))}
          

          </div>

        </div>
      )
}
export default Catalog