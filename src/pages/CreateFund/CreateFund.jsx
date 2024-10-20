import React, { useState } from 'react'
import classes from './CreateFund.module.scss'
import imagePictogram from '../../assets/imagePictogram.svg'
import FundService from '../../services/fund/fund.service'
import { toast } from 'react-toastify'

const CreateFundPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    endDate: '',
    targetAmount: '',
    paymentDetails: '',
    description: '',
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Submitted Data:', formData)
  }

  const handleCreate = async () => {
    await FundService.createFund({
      name: formData.title,
      g_date_start: Date.now(),
      g_date_finish: new Date(formData.endDate),
      totalSum: formData.targetAmount,
      text: formData.description,
      card_account: formData.paymentDetails,
      currentSum: 0,
      donaters: 0,
      complete: false,
      img: 'picture',
    }).then(() => toast('Збір створено успішно!'))
  }

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Створення збору</h2>
      <form onSubmit={handleSubmit}>
        <p className={classes.subTitle}>
          Назва збору (Приклад: Дрони для Сил Оборони України)*
        </p>
        <input
          className={classes.enterText}
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <div>
          <div className={classes.info}>
            <div className={classes.enterBlock}>
              <p>Дата завершення збору</p>
              <p>(Вкажіть дату у цифровому форматі)*</p>
              <input
                className={classes.enterText}
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
              />
            </div>

            <div className={classes.enterBlock}>
              <p className={classes.endSum}>Кінечна грошова ціль, грн*</p>
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
              <p>Реквізити для збору (Номер карти, IBAN)*</p>
              <input
                className={classes.enterText}
                name="paymentDetails"
                value={formData.paymentDetails}
                onChange={handleChange}
              />
            </div>
          </div>

          <button className={classes.add} type="button">
            Додати ціль
          </button>

          <p>Опис збору*</p>
          <input
            className={classes.enterText}
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <div>
            <div className={classes.photoBlock}>
              <p>Фото-прев’ю*</p>
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
            <button
              onClick={handleCreate}
              className={classes.submit}
              type="submit"
            >
              Створити
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default CreateFundPage
