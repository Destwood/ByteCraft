import React, { useState } from 'react';
import classes from "./CreateFundraiserReport.module.scss"
import imagePictogram from "../../../assets/imagePictogram.svg"

const CreateFundraiserReportPage = () => {
    const [formData, setFormData] = useState({
        title: '',
    });

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
            <h2 className={classes.title}>Створення звіту збору</h2>
            <form onSubmit={handleSubmit}>
                <p className={classes.subTitle}>Текст звіту*</p>
                <input
                    className={classes.enterText}
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />

                <div>
                    <div className={classes.photoBlock}>
                        <p>Фото звітності*</p>
                        <button className={classes.photoAdd} type="button">
                            Додати фото
                        </button>
                    </div>

                    <div className={classes.photoContainer}>
                        <div className={classes.photoItem}>
                            <img src={imagePictogram} alt="Фото 1" />
                            Фото_1.png
                        </div>
                        <div className={classes.photoItem}>
                            <img src={imagePictogram} alt="Фото 2" />
                            Фото_2.png
                        </div>
                        <div className={classes.photoItem}>
                            <img src={imagePictogram} alt="Фото 3" />
                            Фото_3.png
                        </div>
                        <div className={classes.photoItem}>
                            <img src={imagePictogram} alt="Фото 3" />
                            Фото_4.png
                        </div>
                    </div>

                    <div className={classes.submitBlock}>
                        <button className={classes.submit} type="submit">
                            Створити
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default CreateFundraiserReportPage
