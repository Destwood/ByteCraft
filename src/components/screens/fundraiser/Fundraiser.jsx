import React, { useState } from 'react';
import classes from "./Fundraiser.module.scss"
import userAvatar from './user-avatar.svg'
import ProgressBar from './ProgressBar';
import statisticIcon from '../home/statistic-icon.svg'
import copyIcon from './copy-icon.svg'

const Fundraiser=()=> {
    const [progress, setProgress] = useState(50);

    const increaseProgress = () => {
        setProgress(prev => Math.min(prev + 10, 100));
    };

    return(
        <div className={classes.container}>
            <h2 className={classes.header}>Збір N</h2>

            <div className={classes["image-block"]}>
                <img alt="photo" className={classes["image-main"]}/>
                <img alt="photo" className={classes.image}/>
                <img alt="photo" className={classes.image}/>
                <img alt="photo" className={classes.image}/>
            </div>
            
            <div className={classes["main-info"]}>
                <h3 className={classes.title}>Деталі збору</h3>

                <div className={classes["main-info-block"]}>
                    <p>Зібрано, грн</p> <p>1000 / 10000</p>
                </div>

                <ProgressBar progress={progress} />

                <div className={classes["main-info-block"]}>
                    <p>Дата завершення збору</p> <p className={classes.date}>10.10.2024</p>
                </div>
                <p className={classes.text}><img src={statisticIcon} alt="Icon" />1024 учасників</p>
                <p> Організатор збору:</p>

                <div className={classes["organizer-block"]}>
                    <img src={userAvatar} className={classes["user-avatar"]} alt="Avatar" />
                    <p className={classes["user-name"]}>Волонтер1</p>
                </div>
                
                <input className={classes.sum} placeholder='Сума донату' type="number"></input>
                <button className={classes.send}>Залатити через гугл</button>

                <p>Для поширення інформації про збір: </p>
                <button className={classes.copy}><img src={copyIcon} alt="Icon" />Скопіювати ссилку</button>
            </div>

            <div className={classes.info}>
                <h3 className={classes["sub-title"]}>Деталі про збір</h3>
                <p className={classes["about-text"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at ex vitae risus sodales bibendum sed eget ipsum. Vestibulum dictum ante quis bibendum laoreet. Pellentesque vel dapibus massa, ac congue dolor. Donec mollis mauris eu sem laoreet, ac cursus dui egestas. Donec sit amet aliquam justo, sed luctus nisi. Vestibulum ullamcorper tellus tempus mattis bibendum.</p>
            </div>

            <div className={classes.info}>
                <h3 className={classes["sub-title"]}>Останні користувачі, які задонатили:</h3>

                <div className={classes.user}>
                    <img src={userAvatar} className={classes["user-avatar"]} alt="Avatar" />

                    <p className={classes["user-name"]}>  ВолонтерN</p>
                    <p className={classes["user-sum"]}>100 грн</p>
                </div>

                 <div className={classes.user}>
                    <img src={userAvatar} className={classes["user-avatar"]} alt="Avatar" />

                    <p className={classes["user-name"]}>  ВолонтерN</p>
                    <p className={classes["user-sum"]}>100 грн</p>
                </div>

                <div className={classes.user}>
                    <img src={userAvatar} className={classes["user-avatar"]} alt="Avatar" />

                    <p className={classes["user-name"]}>  ВолонтерN</p>
                    <p className={classes["user-sum"]}>100 грн</p>
                </div>

                <div className={classes.user}>
                    <img src={userAvatar} className={classes["user-avatar"]} alt="Avatar" />

                    <p className={classes["user-name"]}>  ВолонтерN</p>
                    <p className={classes["user-sum"]}>100 грн</p>
                </div>
                <div className={classes.user}>
                    <img src={userAvatar} className={classes["user-avatar"]} alt="Avatar" />

                    <p className={classes["user-name"]}>  ВолонтерN</p>
                    <p className={classes["user-sum"]}>100 грн</p>
                </div>
                
                
            </div>

        </div>
    )
}
export default Fundraiser