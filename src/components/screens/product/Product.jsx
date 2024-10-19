import classes from "./Product.module.scss"
import organizator from './organizator-photo.svg'
import copyIcon from './copyIcon.svg'
import locationMark from './locationMark.svg'
import mastercard from './mastercard.svg'
import visa from './visa.svg'
import React, { useState, useEffect } from 'react';
import Modal from '../../ui/modal/Modal'

const Product=()=> {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(null); // null, 'first', or 'second'
    const [selectedCard, setSelectedCard] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const openModal = (type) => {
        setModalType(type);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalType(null);
    };

    const handleCardSelection = () => {
        if (selectedCard) {
            setModalType('succsess');
        }
    };

    const [cardNumber, setCardNumber] = useState('');

    const handleCardNumberChange = (e) => {
        const value = e.target.value
            .replace(/\D/g, '') // Залишити тільки цифри
            .replace(/(\d{4})(?=\d)/g, '$1 '); // Додати пробіли після кожних 4 цифр
        setCardNumber(value.trim()); // Обрізаємо пробіли в кінці
    };

    useEffect(() => {
        // Активувати кнопку, якщо введено 19 символів (16 цифр + 3 пробіли)
        setIsButtonDisabled(cardNumber.length !== 19);
    }, [cardNumber]);

    return(
        <>
        {/* Modal: */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            {modalType === 'first' ? (
            <div className={classes.modalContent}>
                <h3 className={classes.title}>Завершити операцію</h3>
                <div className={classes.userInfo}>
                <img
                    src={organizator} 
                    alt="User"
                    className={classes.avatar}
                />
                <span className={classes.email}>user@gmail.com</span>
                </div>
                <div className={classes.paymentMethod}>
                <p className={classes.paymentLabel}>СПОСІБ ОПЛАТИ</p>
                <div className={classes.card}>
                    <img
                        src={selectedCard === "Card 1 - **** 1234" ? visa : mastercard}
                        alt="Card"
                        className={classes.cardImage}
                    />
                     <select
                        value={selectedCard}
                        onChange={(e) => setSelectedCard(e.target.value)}
                        className={classes.selectPayment}
                    >
                    <option value="" disabled>
                        Вибрати картку
                    </option>
                    <option value="Card 1 - **** 1234">Card 1 - **** 1234</option>
                    <option value="Card 2 - **** 5678">Card 2 - **** 5678</option>
                    </select>
                </div>
                </div>
                <button
                onClick={handleCardSelection}
                className={classes.continueButton}
                disabled={!selectedCard}
                >
                Продовжити
                </button>
            </div>
            ) : modalType === 'second' ? (
            <div className={classes.modalContent}>
                <h3 className={classes.title}>Завершити операцію</h3>
                <p className={classes.paymentLabel}>Введіть повний номер картки</p>

                <div className={classes.cardInputContainer}>
                <input
                    type="text"
                    placeholder="Введіть номер картки"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    maxLength={19} 
                    className={classes.paymentInput}
                />
                </div>

                <button
                onClick={handleCardSelection}
                className={classes.continueButton}
                disabled={isButtonDisabled}
                >
                Продовжити
                </button>
            </div>
            ) : <div className={classes.modalContent}>
                    <h3 className={classes.title}>Вітаємо!</h3>
                    <p className={classes.completePayment}>Успішна оплата!</p>

                    <button
                    onClick={closeModal}
                    className={classes.continueButton}
                    >
                    Закрити
                    </button>
                </div>
            }
        </Modal>
        <div className={classes.container}>  
        {/* Main */}
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

                <div className={classes.mainInfoBlock}>
                <button className={classes.send} onClick={() => openModal('second')}>Замовити</button>
                <button className={classes.gpay} onClick={() => openModal('first')}/>
                </div>

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
        </>
)}
export default Product