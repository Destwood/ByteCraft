import classes from "./Catalog.module.scss"

const Catalog = () => {
      return (
        <div className={classes.filter}>
          <h2 className={classes.header}>Фільтрування за:</h2>

          <div className={classes["select-block"]}>
              <select className={classes["select-list"]}>
                <option>Категорія</option>
                <option>Організація 1 </option>
                <option>Організація 2 </option>
              </select>

              <select className={classes["select-list"]}>
                <option>Ціна</option>
                <option>1</option>
                <option>22 </option>
              </select>
          </div>

           <div className={classes.content}>

          <div className={classes.item}>
            <img className={classes.image}/>

            <div className={classes["item-info"]}>
              <h3 className={classes.title}>Товар 1</h3>
              <p className={classes.descrption}>Діапазон цін товару</p>           
            </div>
            </div>

            <div className={classes.item}>
            <img className={classes.image}/>

            <div className={classes["item-info"]}>
              <h3 className={classes.title}>Товар 1</h3>
              <p className={classes.descrption}>Діапазон цін товару</p>           
            </div>
            </div>
            <div className={classes.item}>
            <img className={classes.image}/>

            <div className={classes["item-info"]}>
              <h3 className={classes.title}>Товар 1</h3>
              <p className={classes.descrption}>Діапазон цін товару</p>           
            </div>
            </div>

            <div className={classes.item}>
            <img className={classes.image}/>

            <div className={classes["item-info"]}>
              <h3 className={classes.title}>Товар 1</h3>
              <p className={classes.descrption}>Діапазон цін товару</p>           
            </div>
            </div>

            <div className={classes.item}>
            <img className={classes.image}/>

            <div className={classes["item-info"]}>
              <h3 className={classes.title}>Товар 1</h3>
              <p className={classes.descrption}>Діапазон цін товару</p>           
            </div>
            </div>

            <div className={classes.item}>
            <img className={classes.image}/>

            <div className={classes["item-info"]}>
              <h3 className={classes.title}>Товар 1</h3>
              <p className={classes.descrption}>Діапазон цін товару</p>           
            </div>
            </div>
            <div className={classes.item}>
            <img className={classes.image}/>

            <div className={classes["item-info"]}>
              <h3 className={classes.title}>Товар 1</h3>
              <p className={classes.descrption}>Діапазон цін товару</p>           
            </div>
            </div>
            
          </div>

        </div>
      )
}
export default Catalog