import classes from "./Product.module.scss"
import organizator from './organizator-photo.svg'
import copyIcon from './copyIcon.svg'
import locationMark from './locationMark.svg'

const Product=()=> {
    return(
        <div className={classes.container}>
            <div className={classes.imageBlock}>
                <img alt="photo" className={classes.imageMain}/>
                <img alt="photo" className={classes.image}/>
                <img alt="photo" className={classes.image}/>
                <img alt="photo" className={classes.image}/>
            </div>

            <div className={classes.mainInfo}>
                <h3 className={classes.name}>Товар 1</h3>

                <div className={classes.mainInfoBlock}>
                    <p>Ціна:</p> <p>150 грн</p>
                </div>
                
                <div className={classes.productCode}>Код товару: 111111</div>

                <p> Поставщик:</p>

                <div className={classes.organizator}>
                    <img src={organizator} className={classes.organizator} alt="Avatar" />
                    <p className={classes.organizatorName}>Поставщик1</p>
                </div>

                <button className={classes.send}>Замовити</button>

                <p>Поділитись: </p>
                <button className={classes.copy}><img src={copyIcon} alt="Icon" />Скопіювати ссилку</button>
            </div>

             <div className={classes.info}>
                <h3 className={classes.subTitle}>Опис товару</h3>
                <p className={classes.aboutText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at ex vitae risus sodales bibendum sed eget ipsum. Vestibulum dictum ante quis bibendum laoreet. Pellentesque vel dapibus massa, ac congue dolor. Donec mollis mauris eu sem laoreet, ac cursus dui egestas. Donec sit amet aliquam justo, sed luctus nisi. Vestibulum ullamcorper tellus tempus mattis bibendum.</p>
            </div>

            <div className={classes.info}>
                <h3 className={classes.subTitle}>Локації, де можна придбати товар:</h3>

                <div className={classes.location}>
                    <img src={locationMark} className={classes.locationMark} alt="Avatar" />
                    <div className={classes.locationBlock}>
                        <p className={classes.locationName}>Житомир</p>
                        Вул. N, будинок M
                    </div>
                    <p  className={classes.locationSum}>200 грн</p>
                </div>

                <div className={classes.location}>
                    <img src={locationMark} className={classes.locationMark} alt="Avatar" />
                    <div className={classes.locationBlock}>
                        <p className={classes.locationName}>Житомир</p>
                        Вул. N, будинок M
                    </div>
                    <p  className={classes.locationSum}>300 грн</p>
                </div>

                <div className={classes.location}>
                    <img src={locationMark} className={classes.locationMark} alt="Avatar" />
                    <div className={classes.locationBlock}>
                        <p className={classes.locationName}>Житомир</p>
                        Вул. N, будинок M
                    </div>
                    <p  className={classes.locationSum}>150 грн</p>
                </div>

                <div className={classes.location}>
                    <img src={locationMark} className={classes.locationMark} alt="Avatar" />
                    <div className={classes.locationBlock}>
                        <p className={classes.locationName}>Житомир</p>
                        Вул. N, будинок M
                    </div>
                    <p  className={classes.locationSum}>100 грн</p>
                </div>
                            
            </div>

        </div>
)}
export default Product