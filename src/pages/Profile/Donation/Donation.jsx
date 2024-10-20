
import { item } from './data';
import classes from "./Donation.module.scss";
import FundCart from "../../../components/ui/pages/fundCart.jsx";


const DonationPage = () => {
  const { count } = item; 

  //  const filterItems = (items) => {};

    return (
        <div>
            {count === 0 ? (
                <div className={classes.motivationBlock}>Ваш донат — це крок до перемоги. Підтримайте Україну сьогодні, щоб завтра було світлішим!</div>
            ) : (
              <>
                <div className={classes.motivationBlock}>Разом ми сильні, дякуємо за ваш вклад у нашу перемогу!</div>
                <p>{count}</p>
                <div className={classes.donationContainer}>

                  {/* {filteredItems.map((item, index) => (
                    <FundCart key={index} item={item} />
                  ))} */}

                </div>
              </>
            )}
        </div>
    );
}
export default DonationPage
