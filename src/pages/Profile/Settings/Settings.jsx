import React, { useState, useEffect } from 'react'
import classes from "./Settings.module.scss"
import imagePictogram from "../../../assets/imagePictogram.svg"
import { userData } from './data'

const ProfileSettingsPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
    });

    useEffect(() => {
        setFormData(userData);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log('Submitted Data:', formData); 
    };

  return (
    <div className={classes.container}>
        <form onSubmit={handleSubmit}>

        <h2 className={classes.title}>Налаштування профілю</h2>
         <div className={classes.info}>
        <div className={classes.enterBlock}>
            <p>Ім’я та фамілія користувача</p>
            <input
                className={classes.enterText}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ім’я та фамілія користувача"
            />
        </div>

        <div className={classes.enterBlock}>
            <p>E-mail</p>
            <input
                className={classes.enterText}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
            />
        </div>    
    </div>
    <div>
            <div className={classes.photoBlock}>
                <p>Фото звітності*</p>
                <button className={classes.photoAdd} type="button">
                    Змінити фото
                </button>
            </div>

            <div className={classes.photoContainer}>
                <div className={classes.photoItem}>
                    <img src={imagePictogram} alt="Фото 1" />
                    Фото_main.png
                </div>
            </div>

            <div className={classes.submitBlock}>
                <button className={classes.submit} type="submit">
                    Зберегти зміни
                </button>
            </div>
        </div>
        </form>
    </div>
  )
}
export default ProfileSettingsPage
