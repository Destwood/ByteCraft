import classes from "./Home.module.scss"
import moreIcon from './more-info-icon.svg'
import statisticIcon from './statistic-icon.svg'
import resultCompleteIcon from './result-complete-icon.svg'

const Home = () => {
  return (
    <div className={classes.filter}>
      <h2 className={classes.header}>Фільтрування за:</h2>

      <div className={classes["select-block"]}>
          <select className={classes["select-list"]}>
            <option>Організація</option>
            <option>Організація 1 </option>
            <option>Організація 2 </option>
          </select>

          <select className={classes["select-list"]}>
            <option>Кількість донатів</option>
            <option>1</option>
            <option>22 </option>
          </select>

          <select className={classes["select-list"]}>
            <option>Сума збору</option>
            <option>1 </option>
            <option>2</option>
          </select>
      </div>
      
    <div className={classes.content}>

      <div className={classes.item}>
        <img className={classes.image}/>

        <div className={classes["item-info"]}>
        <div className={classes["item-block"]}>
              <h3 className={classes.title}>Збір N</h3>
              <button className={classes["more-info"]}>
                  <img src={moreIcon} alt="Icon" />
                  Дізнатись більше
              </button>
        </div>

        <p>Уже зібрано: 1000 із 10000 гривень</p>

        <div className={classes["item-block"]}>
              <h3 className={classes.title}>
              <img src={statisticIcon} alt="Icon" />
                1024 учасників</h3>

              <button className={classes["result-complete"]}>
              <img src={resultCompleteIcon} alt="Icon" />
                Задонатив</button>
        </div>
        
      </div>
      </div>

      <div className={classes.item}>
        <img className={classes.image}/>

        <div className={classes["item-info"]}>
        <div className={classes["item-block"]}>
              <h3 className={classes.title}>Збір N</h3>
              <button className={classes["more-info"]}>
                  <img src={moreIcon} alt="Icon" />
                  Дізнатись більше
              </button>
        </div>

        <p>Уже зібрано: 1000 із 10000 гривень</p>

        <div className={classes["item-block"]}>
              <h3 className={classes.title}>
              <img src={statisticIcon} alt="Icon" />
                1024 учасників</h3>

              <button className={classes["result"]}>import Home from "../components/screens/home/Home"
                Задонатити</button>
        </div>
        
      </div>
      </div>
      <div className={classes.item}>
        <img className={classes.image}/>

        <div className={classes["item-info"]}>
        <div className={classes["item-block"]}>
              <h3 className={classes.title}>Збір N</h3>
              <button className={classes["more-info"]}>
                  <img src={moreIcon} alt="Icon" />
                  Дізнатись більше
              </button>
        </div>

        <p>Уже зібрано: 1000 із 10000 гривень</p>

        <div className={classes["item-block"]}>
              <h3 className={classes.title}>
              <img src={statisticIcon} alt="Icon" />
                1024 учасників</h3>

              <button className={classes["result-complete"]}>
              <img src={resultCompleteIcon} alt="Icon" />
                Задонатив</button>
        </div>
        
      </div>
      </div>  

    </div>

    </div>
  )
}
export default Home
