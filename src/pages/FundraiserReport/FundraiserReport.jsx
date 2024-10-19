import classes from "./FundraiserReport.module.scss"
import userAvatar from "../../assets/profile.svg";
import stats from "../../assets/images/stats.png";
import {items} from "./data.js"

const FundraiserReportPage = () => {
  return (  
  <div className={classes.container}>
    <h2 className={classes.title}>Звітність про {items[0].name}</h2>

    <div className={classes.infoContainer}>
    <div className={classes.infoBlock}>
        <p className={classes.infoTitle}>Грошей зібрано:</p>
        <p className={classes.infoTitleResult}>{items[0].colect} грн</p>
    </div>

    <div className={classes.infoBlock}>
        <p className={classes.infoTitle}> Організатор збору:</p>
        <div className={classes.organizerBlock}>
            <img
              src={userAvatar}
              className={classes.userAvatar}
              alt="Avatar"
            />
            <p className={classes.userName}>{items[0].volonter} </p> 
          </div>
    </div>
    
     <div className={classes.infoBlock}>
        <p className={classes.infoTitle}>До збору доєдналось:</p>
        <p className={classes.infoTitleResult}>{items[0].people} </p>
    </div>
    </div>

    <div className={classes.dateBlock}>
        <p>Дата створення збору: {items[0].start}</p>
        <p>Дата завершення збору: {items[0].end}</p>
    </div>

    <div className={classes.aboutBlock}>
        <h3 className={classes.aboutTitle}>Опис звіту:</h3>
        <p className={classes.aboutText}>
        {items[0].about}
        </p>
    </div>

    <div className={classes.infoContainer}>
        <div className={classes.fristBlock}>
            <div className={classes.imageBlock}>
                <img className={classes.image} alt="photo"></img>
                <img className={classes.image} alt="photo"></img>
                <img className={classes.image} alt="photo"></img>
                <img className={classes.image} alt="photo"></img>
            </div>
            <div className={classes.staticBlock}>
                <h3 className={classes.staticTitle}>Статистика донатів по датам (за день)</h3>
                <img className={classes.staticImage} src={stats}></img>
            </div>
            <div className={classes.motivationBlock}>
                Гордіться собою! Ви задонатили {items[0].my_donations} для цього збору
            </div>
        </div>

        <div className={classes.secondBlock}>
            <h3 className={classes.aboutTitle}>
            Користувачі, які задонатили:
            </h3>
            <select className={classes.selectAnonim}>
                <option>Анонімність користувачів</option>
            </select>
            <div className={classes.usersBlock}>

                <div className={classes.user}>
                    <img
                    src={userAvatar}
                    className={classes.userAvatar}
                    alt="Avatar"
                    />

                    <p className={classes.userName}> ВолонтерN</p>
                    <p className={classes.userSum}>100 грн</p>
                </div>

                <div className={classes.user}>
                    <img
                    src={userAvatar}
                    className={classes.userAvatar}
                    alt="Avatar"
                    />

                    <p className={classes.userName}> ВолонтерN</p>
                    <p className={classes.userSum}>100 грн</p>
                </div>
                <div className={classes.user}>
                    <img
                    src={userAvatar}
                    className={classes.userAvatar}
                    alt="Avatar"
                    />

                    <p className={classes.userName}> ВолонтерN</p>
                    <p className={classes.userSum}>100 грн</p>
                </div>

                <div className={classes.user}>
                    <img
                    src={userAvatar}
                    className={classes.userAvatar}
                    alt="Avatar"
                    />

                    <p className={classes.userName}> ВолонтерN</p>
                    <p className={classes.userSum}>100 грн</p>
                </div>
                <div className={classes.user}>
                    <img
                    src={userAvatar}
                    className={classes.userAvatar}
                    alt="Avatar"
                    />

                    <p className={classes.userName}> ВолонтерN</p>
                    <p className={classes.userSum}>100 грн</p>
                </div>
                <div className={classes.user}>
                    <img
                    src={userAvatar}
                    className={classes.userAvatar}
                    alt="Avatar"
                    />

                    <p className={classes.userName}> ВолонтерN</p>
                    <p className={classes.userSum}>100 грн</p>
                </div>
                <div className={classes.user}>
                    <img
                    src={userAvatar}
                    className={classes.userAvatar}
                    alt="Avatar"
                    />

                    <p className={classes.userName}> ВолонтерN</p>
                    <p className={classes.userSum}>100 грн</p>
                </div>
                <div className={classes.user}>
                    <img
                    src={userAvatar}
                    className={classes.userAvatar}
                    alt="Avatar"
                    />

                    <p className={classes.userName}> ВолонтерN</p>
                    <p className={classes.userSum}>100 грн</p>
                </div>
                <div className={classes.user}>
                    <img
                    src={userAvatar}
                    className={classes.userAvatar}
                    alt="Avatar"
                    />

                    <p className={classes.userName}> ВолонтерN</p>
                    <p className={classes.userSum}>100 грн</p>
                </div>
                <div className={classes.user}>
                    <img
                    src={userAvatar}
                    className={classes.userAvatar}
                    alt="Avatar"
                    />

                    <p className={classes.userName}> ВолонтерN</p>
                    <p className={classes.userSum}>100 грн</p>
                </div>
                <div className={classes.user}>
                    <img
                    src={userAvatar}
                    className={classes.userAvatar}
                    alt="Avatar"
                    />

                    <p className={classes.userName}> ВолонтерN</p>
                    <p className={classes.userSum}>100 грн</p>
                </div>
                <div className={classes.user}>
                    <img
                    src={userAvatar}
                    className={classes.userAvatar}
                    alt="Avatar"
                    />

                    <p className={classes.userName}> ВолонтерN</p>
                    <p className={classes.userSum}>100 грн</p>
                </div>

            </div>
            
        </div>

    </div>

  </div>
  )
}
export default FundraiserReportPage
