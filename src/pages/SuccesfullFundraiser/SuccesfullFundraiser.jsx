import classes from './SuccesfullFundraiser.module.scss'
import FundCart from "../../components/ui/pages/fundCart.jsx";

const SuccesfullFundraiserPage = () => {
  return (
    <>
      <div className={classes.motivationBlock}>Разом ми досягаємо неймовірного! Ось кілька останніх успішних зборів, які вже допомагають Україні.</div>
      <div className={classes.container}>

        {/* {filteredItems.map((item, index) => (
          <FundCart key={index} item={item} />
        ))} */}

      </div>
    </>
  )
}
export default SuccesfullFundraiserPage
