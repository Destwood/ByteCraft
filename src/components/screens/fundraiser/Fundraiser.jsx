import classes from "./Fundraiser.module.scss";
import userAvatar from "./user-avatar.svg";
import ProgressBar from "./ProgressBar";
import statisticIcon from "../../../assets/statistic-icon.svg";
import copyIcon from "./copy-icon.svg";
import mastercard from "./mastercard.svg";
import visa from "./visa.svg";
import React, { useState, useEffect } from "react";
import Modal from "../../ui/modal/Modal";

const Fundraiser = () => {
  const [progress, setProgress] = useState(50);

  const increaseProgress = () => {
    setProgress((prev) => Math.min(prev + 10, 100));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null); // null, 'first', or 'second'
  const [selectedCard, setSelectedCard] = useState("");
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
      setModalType("succsess");
    }
  };

  const [cardNumber, setCardNumber] = useState("");

  const handleCardNumberChange = (e) => {
    const value = e.target.value
      .replace(/\D/g, "")
      .replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(value.trim());
  };

  useEffect(() => {
    setIsButtonDisabled(cardNumber.length !== 19);
  }, [cardNumber]);

  return (
    <>
      {/* Modal: */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalType === "first" ? (
          <div className={classes.modalContent}>
            <h3 className={classes.title}>Завершити операцію</h3>
            <div className={classes.userInfo}>
              <img src={userAvatar} alt="User" className={classes.avatar} />
              <span className={classes.email}>user@gmail.com</span>
            </div>
            <div className={classes.paymentMethod}>
              <p className={classes.paymentLabel}>СПОСІБ ОПЛАТИ</p>
              <div className={classes.card}>
                <img
                  src={
                    selectedCard === "Card 1 - **** 1234" ? visa : mastercard
                  }
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
        ) : modalType === "second" ? (
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
        ) : (
          <div className={classes.modalContent}>
            <h3 className={classes.title}>Вітаємо!</h3>
            <p className={classes.completePayment}>Успішна оплата!</p>

            <button onClick={closeModal} className={classes.continueButton}>
              Закрити
            </button>
          </div>
        )}
      </Modal>
      <div className={classes.container}>
        <h2 className={classes.header}>Збір N</h2>

        <div className={classes["image-block"]}>
          <img alt="photo" className={classes["image-main"]} />
          <img alt="photo" className={classes.image} />
          <img alt="photo" className={classes.image} />
          <img alt="photo" className={classes.image} />
        </div>

        <div className={classes["main-info"]}>
          <h3 className={classes.title}>Деталі збору</h3>

          <div className={classes["main-info-block"]}>
            <p>Зібрано, грн</p> <p>1000 / 10000</p>
          </div>

          <ProgressBar progress={progress} />

          <div className={classes["main-info-block"]}>
            <p>Дата завершення збору</p>{" "}
            <p className={classes.date}>10.10.2024</p>
          </div>
          <p className={classes.text}>
            <img src={statisticIcon} alt="Icon" />
            1024 учасників
          </p>
          <p> Організатор збору:</p>

          <div className={classes["organizer-block"]}>
            <img
              src={userAvatar}
              className={classes["user-avatar"]}
              alt="Avatar"
            />
            <p className={classes["user-name"]}>Волонтер1</p>
          </div>

          <div className={classes.mainInfoBlock}>
            <button
              className={classes.send}
              onClick={() => openModal("second")}
            >
              Замовити
            </button>
            <button
              className={classes.gpay}
              onClick={() => openModal("first")}
            />
          </div>

          <p>Для поширення інформації про збір: </p>
          <button className={classes.copy}>
            <img src={copyIcon} alt="Icon" />
            Скопіювати ссилку
          </button>
        </div>

        <div className={classes.info}>
          <h3 className={classes["sub-title"]}>Деталі про збір</h3>
          <p className={classes["about-text"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at ex
            vitae risus sodales bibendum sed eget ipsum. Vestibulum dictum ante
            quis bibendum laoreet. Pellentesque vel dapibus massa, ac congue
            dolor. Donec mollis mauris eu sem laoreet, ac cursus dui egestas.
            Donec sit amet aliquam justo, sed luctus nisi. Vestibulum
            ullamcorper tellus tempus mattis bibendum.
          </p>
        </div>

        <div className={classes.info}>
          <h3 className={classes["sub-title"]}>
            Останні користувачі, які задонатили:
          </h3>

          <div className={classes.user}>
            <img
              src={userAvatar}
              className={classes["user-avatar"]}
              alt="Avatar"
            />

            <p className={classes["user-name"]}> ВолонтерN</p>
            <p className={classes["user-sum"]}>100 грн</p>
          </div>

          <div className={classes.user}>
            <img
              src={userAvatar}
              className={classes["user-avatar"]}
              alt="Avatar"
            />

            <p className={classes["user-name"]}> ВолонтерN</p>
            <p className={classes["user-sum"]}>100 грн</p>
          </div>

          <div className={classes.user}>
            <img
              src={userAvatar}
              className={classes["user-avatar"]}
              alt="Avatar"
            />

            <p className={classes["user-name"]}> ВолонтерN</p>
            <p className={classes["user-sum"]}>100 грн</p>
          </div>

          <div className={classes.user}>
            <img
              src={userAvatar}
              className={classes["user-avatar"]}
              alt="Avatar"
            />

            <p className={classes["user-name"]}> ВолонтерN</p>
            <p className={classes["user-sum"]}>100 грн</p>
          </div>
          <div className={classes.user}>
            <img
              src={userAvatar}
              className={classes["user-avatar"]}
              alt="Avatar"
            />

            <p className={classes["user-name"]}> ВолонтерN</p>
            <p className={classes["user-sum"]}>100 грн</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Fundraiser;
