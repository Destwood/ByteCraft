import classes from './Fundraiser.module.scss'
import userAvatar from './user-avatar.svg'
import ProgressBar from './ProgressBar'
import statisticIcon from '../../../assets/statistic-icon.svg'
import copyIcon from './copy-icon.svg'
import mastercard from './mastercard.svg'
import visa from './visa.svg'
import React, { useState, useEffect } from 'react'
import Modal from '../../ui/modal/Modal'
import { useParams } from 'react-router-dom'
import FundService from '../../../services/fund/fund.service'
import { toast } from 'react-toastify'

import exampleImg from "../../../assets/pickUpExample.jpg";

const Fundraiser = () => {
  const { id } = useParams()

  const [progress, setProgress] = useState(50)
  const [fund, setFund] = useState({})

  useEffect(() => {
    const getFund = async () => {
      try {
        const data = await FundService.getFundById(id)
        console.log(data)
        setFund(data)
      } catch (error) {
        console.error('Error getting fund:', error)
      }
    }

    getFund()
  }, [])

  const increaseProgress = () => {
    setProgress(prev => Math.min(prev + 10, 100))
  }

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState(null)
  const [selectedCard, setSelectedCard] = useState('')
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

  const openModal = type => {
    setModalType(type)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalType(null)
  }

  const handleCardSelection = () => {
    if (selectedCard) {
      setModalType('succsess')
    }
  }

  const [cardNumber, setCardNumber] = useState('')

  const handleCardNumberChange = e => {
    const value = e.target.value
      .replace(/\D/g, '')
      .replace(/(\d{4})(?=\d)/g, '$1 ')
    setCardNumber(value.trim())
  }

  const handleCopy = () => {
    const currentUrl = window.location.href

    navigator.clipboard
      .writeText(currentUrl)
      .then(() => toast.success('Посилання скопійоване'))
  }

  useEffect(() => {
    setIsButtonDisabled(cardNumber.length !== 19)
  }, [cardNumber])

  return (
    <>
      {/* Modal: */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalType === 'first' ? (
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
                    selectedCard === 'Card 1 - **** 1234' ? visa : mastercard
                  }
                  alt="Card"
                  className={classes.cardImage}
                />
                <select
                  value={selectedCard}
                  onChange={e => setSelectedCard(e.target.value)}
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

        <div className={classes['image-block']}>
          <img
            alt="photo"
            src={`http://26.122.74.29:4200/uploads/${fund.img}`}
            className={classes['image-main']}
          />
        </div>

        <div className={classes['main-info']}>
          <h3 className={classes.title}>Деталі збору</h3>

          <div className={classes['main-info-block']}>
            <p>Зібрано, грн</p>
            <p>
              ${fund?.currentSum} / ${fund?.totalSum}
            </p>
          </div>

          <ProgressBar max={fund?.totalSum} value={fund?.currentSum} />

          <div className={classes['main-info-block']}>
            <p>Дата завершення збору</p>
            <p className={classes.date}>
              {new Date(fund?.g_date_finish).toLocaleDateString('uk-UA')}
            </p>
          </div>
          <p className={classes.text}>
            <img src={statisticIcon} alt="Icon" />
            {fund?.donaters} учасників
          </p>
          <p> Організатор збору:</p>

          <div className={classes['organizer-block']}>
            <img
              src={userAvatar}
              className={classes['user-avatar']}
              alt="Avatar"
            />
            <p className={classes['user-name']}>{fund?.user?.userName}</p>
          </div>

          <div className={classes.mainInfoBlock}>
            <button
              className={classes.send}
              onClick={() => openModal('second')}
            >
              Замовити
            </button>
            <button
              className={classes.gpay}
              onClick={() => openModal('first')}
            />
          </div>

          <p>Для поширення інформації про збір: </p>
          <button onClick={handleCopy} className={classes.copy}>
            <img src={copyIcon} alt="Icon" />
            Скопіювати ссилку
          </button>
        </div>

        <div className={classes.info}>
          <h3 className={classes['sub-title']}>Деталі про збір</h3>
          <p className={classes['about-text']}>{fund.text}</p>
        </div>

        <div className={classes.info}>
          <h3 className={classes['sub-title']}>
            Останні користувачі, які задонатили:
          </h3>
          <div className={classes.userList}>
            <div className={classes.user}>
              <img
                src={userAvatar}
                className={classes["user-avatar"]}
                alt="Avatar"
              />

          <div className={classes.user}>
            <img
              src={userAvatar}
              className={classes['user-avatar']}
              alt="Avatar"
            />

            <p className={classes['user-name']}> ВолонтерN</p>
            <p className={classes['user-sum']}>100 грн</p>
          </div>

          <div className={classes.user}>
            <img
              src={userAvatar}
              className={classes['user-avatar']}
              alt="Avatar"
            />

            <p className={classes['user-name']}> ВолонтерN</p>
            <p className={classes['user-sum']}>100 грн</p>
          </div>

          <div className={classes.user}>
            <img
              src={userAvatar}
              className={classes['user-avatar']}
              alt="Avatar"
            />

            <p className={classes['user-name']}> ВолонтерN</p>
            <p className={classes['user-sum']}>100 грн</p>
          </div>

          <div className={classes.user}>
            <img
              src={userAvatar}
              className={classes['user-avatar']}
              alt="Avatar"
            />

            <p className={classes['user-name']}> ВолонтерN</p>
            <p className={classes['user-sum']}>100 грн</p>
          </div>
          <div className={classes.user}>
            <img
              src={userAvatar}
              className={classes['user-avatar']}
              alt="Avatar"
            />

            <p className={classes['user-name']}> ВолонтерN</p>
            <p className={classes['user-sum']}>100 грн</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Fundraiser
