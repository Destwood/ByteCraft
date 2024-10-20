import React, { useEffect, useState } from 'react'
import classes from './CreateProduct.module.scss'
import imagePictogram from '../../assets/imagePictogram.svg'
import CategoryService from '../../services/category/category.service'
import CatalogService from '../../services/catalog/catalog.service'
import { toast } from 'react-toastify'
import { useAuth } from '../../hooks/useAuth'

const CreateProductPage = () => {
  const user = useAuth()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: 0,
  })
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await CategoryService.getAll()

        setCategories(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchCategories()
  }, [])

  console.log(categories)

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

  const handleCategoryChange = event => {
    setFormData({
      ...formData,
      category: event.target.value,
    })
  }

  const handleCreate = async () => {
    await CatalogService.createProduct({
      name: formData.title,
      opus: formData.description,
      img: 'picture',
      price: formData.price,
      categorytovar: formData.category,
      distributor: user._id,
    }).then(() => toast('Товар створено успішно!'))
  }

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
          <div className={classes.info} style={{ marginBottom: '20px' }}>
            <div className={classes.enterBlock}>
              <p>Ціна*</p>
              <input
                className={classes.enterText}
                name="price"
                value={formData.endDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className={classes.enterBlock}
            style={{ marginBottom: '20px', borderBottom: '1px solid #fff' }}
          >
            <p style={{ marginBottom: '10px' }}>Категорія*</p>
            <select
              style={{ width: 'max-content', marginBottom: '20px' }}
              id="category"
              //   value={formData.category}
              onChange={handleCategoryChange}
            >
              <option value="" disabled>
                Виберіть категорію
              </option>
              {categories.map(category => (
                <option value={category._id}>{category.name}</option>
              ))}
            </select>
          </div>

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
export default CreateProductPage
