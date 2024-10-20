import React, { useState } from 'react';
import classes from "./CreateProduct.module.scss"
import imagePictogram from "../../assets/imagePictogram.svg"

const CreateProductPage = () => {
    const [formData, setFormData] = useState({
        title: '',
        endDate: '',
        targetAmount: '',
        paymentDetails: '',
        description: '',
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
            <h2 className={classes.title}>Створення об’яви про товар</h2>
            <form onSubmit={handleSubmit}>
                <p className={classes.subTitle}>Назва товару*</p>
                <input
                    className={classes.enterText}
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <div>
                    <div className={classes.info}>
                        <div className={classes.enterBlock}>
                            <p>Ціна*</p>
                            <input
                                className={classes.enterText}
                                name="endDate"
                                value={formData.endDate}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={classes.enterBlock}>
                            <p>Діапазон цін у різних містах*</p>
                            <input
                                className={classes.enterText}
                                name="targetAmount"
                                value={formData.targetAmount}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={classes.info}>
                        <div className={classes.enterPaymentBlock}>
                            <p>Локація 1, де можна придбати товар*</p>
                            <input
                                className={classes.enterText}
                                name="paymentDetails"
                                value={formData.paymentDetails}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <button className={classes.add} type="button">
                        Додати локацію
                    </button>

                    <p>Опис товару*</p>
                    <input
                        className={classes.enterText}
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />

                    <div>
                        <div className={classes.photoBlock}>
                            <p>Додаткові фото</p>
                            <button className={classes.photoAdd} type="button">
                                Додати фото
                            </button>
                        </div>

                        <div className={classes.photoContainer}>
                            <div className={classes.photoItem}>
                                <img src={imagePictogram} alt="Фото прев'ю" />
                                Фото_main.png
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={classes.photoBlock}>
                            <p>Додаткові фото:</p>
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
    )
}
export default CreateProductPage
