import classes from './Product.module.scss'
import organizator from './organizator-photo.svg'
import copyIcon from './copyIcon.svg'
import locationMark from './locationMark.svg'
import mastercard from './mastercard.svg'
import visa from './visa.svg'
import React, { useState, useEffect } from 'react'
import Modal from '../../ui/modal/Modal'
import { Link, useParams } from 'react-router-dom'
import CatalogService from '../../../services/catalog/catalog.service'
import { toast } from 'react-toastify'

const Product = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState(null) // null, 'first', or 'second'
  const [selectedCard, setSelectedCard] = useState('')
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const { id } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await CatalogService.getProductById(id)
        console.log(data)
        setProduct(data)
      } catch (error) {
        console.error('Error getting product:', error)
      }
    }

    getProduct()
  }, [])

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

  useEffect(() => {
    setIsButtonDisabled(cardNumber.length !== 19)
  }, [cardNumber])

  const handleCopy = () => {
    const currentUrl = window.location.href

    navigator.clipboard
      .writeText(currentUrl)
      .then(() => toast.success('Посилання скопійоване'))
  }

  return (
    <>
      {/* Modal: */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalType === 'first' ? (
          <div className={classes.modalContent}>
            <h3 className={classes.title}>Завершити операцію</h3>
            <div className={classes.userInfo}>
              <img src={organizator} alt="User" className={classes.avatar} />
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
        {/* Main */}
        <div className={classes.imageBlock}>
          <img alt="photo" src={product.img} className={classes.imageMain} />
        </div>

        <div className={classes.mainInfo}>
          <h3 className={classes.name}>{product.name}</h3>

          <div className={classes.mainInfoBlock}>
            <p>Ціна:</p> <p>{product.price} грн</p>
          </div>

          <div className={classes.productCode}>Код товару: 111111</div>

          <p> Поставщик:</p>

          <div className={classes.organizator}>
            <img
              src={organizator}
              className={classes.organizator}
              alt="Avatar"
            />
            <Link
              to={`/user/${product.distributor?.userId}`}
              className={classes.organizatorName}
            >
              {product.distributor?.name}
            </Link>
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

          <p>Поділитись: </p>
          <button onClick={handleCopy} className={classes.copy}>
            <img src={copyIcon} alt="Icon" />
            Скопіювати ссилку
          </button>
        </div>

        <div className={classes.info}>
          <h3 className={classes.subTitle}>Опис товару</h3>
          <p className={classes.aboutText}>{product.opus}</p>
        </div>

        <div className={classes.info}>
          <h3 className={classes.subTitle}>
            Локації, де можна придбати товар:
          </h3>

          <div className={classes.location}>
            <img
              src={locationMark}
              className={classes.locationMark}
              alt="Avatar"
            />
            <div className={classes.locationBlock}>
              <p className={classes.locationName}>Житомир</p>
              Вул. N, будинок M
            </div>
            <p className={classes.locationSum}>200 грн</p>
          </div>

          <div className={classes.location}>
            <img
              src={locationMark}
              className={classes.locationMark}
              alt="Avatar"
            />
            <div className={classes.locationBlock}>
              <p className={classes.locationName}>Житомир</p>
              Вул. N, будинок M
            </div>
            <p className={classes.locationSum}>300 грн</p>
          </div>

          <div className={classes.location}>
            <img
              src={locationMark}
              className={classes.locationMark}
              alt="Avatar"
            />
            <div className={classes.locationBlock}>
              <p className={classes.locationName}>Житомир</p>
              Вул. N, будинок M
            </div>
            <p className={classes.locationSum}>150 грн</p>
          </div>

          <div className={classes.location}>
            <img
              src={locationMark}
              className={classes.locationMark}
              alt="Avatar"
            />
            <div className={classes.locationBlock}>
              <p className={classes.locationName}>Житомир</p>
              Вул. N, будинок M
            </div>
            <p className={classes.locationSum}>100 грн</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Product
