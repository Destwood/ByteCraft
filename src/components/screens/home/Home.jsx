import classes from "./Home.module.scss";

import React, { useEffect, useState } from "react";
import FundCart from "../../ui/pages/fundCart.jsx";
import FundService from "../../../services/fund/fund.service.js";

const Home = () => {
  const [organizationFilter, setOrganizationFilter] = useState("all");
  const [donationFilter, setDonationFilter] = useState("all");
  const [sumRange, setSumRange] = useState("all");

  const [funds, setFunds] = useState([]);

  useEffect(() => {
    const fetchFunds = async () => {
      try {
        const data = await FundService.getFunds();
        setFunds(data);
      } catch (error) {
        console.error("Error fetching funds:", error);
      }
    };

    fetchFunds();
  }, []);
  const handleOrganizationFilterChange = (event) => {
    setOrganizationFilter(event.target.value);
  };

  const handleDonationFilterChange = (event) => {
    setDonationFilter(event.target.value);
  };

  const handleSumRangeChange = (event) => {
    setSumRange(event.target.value);
  };

  const filterItems = (items) => {
    return items.filter((item) => {
      const isOrganizationMatch =
        organizationFilter === "all" ||
        item.organization === organizationFilter;

      const isDonationMatch =
        donationFilter === "all" || item.donaters <= Number(donationFilter);

      const isSumInRange =
        sumRange === "all" || item.max_donations <= Number(sumRange);

      return isOrganizationMatch && isDonationMatch && isSumInRange;
    });
  };

  const filteredItems = filterItems(funds);

  return (
    <div className={classes.filter}>
      <h2 className={classes.title}>Фільтрування за:</h2>

      <div className={classes.selectBlock}>
        <select
          className={classes.selectList}
          onChange={handleOrganizationFilterChange}
        >
          <option value="all">Організація (всі)</option>
          <option value="Організація 1">Організація 1</option>
          <option value="Організація 2">Організація 2</option>
        </select>

        <select
          className={classes.selectList}
          onChange={handleDonationFilterChange}
        >
          <option value="all">Кількість донатів (всі)</option>
          <option value="1000">до 1000</option>
          <option value="2000">до 2000</option>
        </select>

        <select className={classes.selectList} onChange={handleSumRangeChange}>
          <option value="all">Сума збору (всі)</option>
          <option value="10000">до 10000</option>
          <option value="20000">до 20000</option>
        </select>
      </div>

      <div className={classes.content}>
        {filteredItems.map((item, index) => (
          <FundCart key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
