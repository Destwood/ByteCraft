import classes from './Catalog.module.scss'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CatalogService from '../../../services/catalog/catalog.service'
import { CategoryService } from '../../../services/category/category.service'

const Catalog = () => {
  const [priceRange, setPriceRange] = useState('all') // Стан для вибраного діапазону цін
  const [organizationFilter, setOrganizationFilter] = useState('all') // Стан для вибраної організації
  const [products, setProducts] = useState([])
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
    const fetchProducts = async () => {
      try {
        const data = await CatalogService.getProducts()

        setProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    fetchCategories()
    fetchProducts()
  }, [])

  // Функція для зміни стану при виборі іншої опції для фільтрації по ціні
  const handlePriceFilterChange = event => {
    setPriceRange(event.target.value)
  }

  // Функція для зміни стану при виборі іншої опції для фільтрації по організації
  const handleOrganizationFilterChange = event => {
    setOrganizationFilter(event.target.value)
  }

  // Функція для фільтрації елементів за діапазоном цін і організацією
  const filterItems = () => {
    return products.filter(item => {
      console.log(priceRange)
      const isPriceInRange =
        priceRange === 'all' || (item.price > 0 && item.price < priceRange)
      console.log(item.price, isPriceInRange)
      // Перевірка фільтра за організацією
      const isOrganizationMatch =
        organizationFilter === 'all' ||
        item.categorytovar.name === organizationFilter

      // Повернути true, якщо обидва фільтри відповідають
      return isPriceInRange && isOrganizationMatch
    })
  }

  const filteredItems = filterItems()

  return (
    <div className={classes.filter}>
      <h2 className={classes.header}>Фільтрування за:</h2>

      <div className={classes['select-block']}>
        <select
          onChange={handleOrganizationFilterChange}
          className={classes['select-list']}
        >
          <option value="all">Категорії (всі)</option>
          {categories.map(category => (
            <option value={category.name}>{category.name}</option>
          ))}
        </select>

        <select
          className={classes['select-list']}
          onChange={handlePriceFilterChange}
        >
          <option value="all">Ціна (всі)</option>
          <option value="2000">до 2 000 грн</option>
          <option value="5000">до 5 000 грн</option>
          <option value="10000">до 10 000 грн</option>
        </select>
      </div>

      <div className={classes.content}>
        {filteredItems.map((item, index) => (
          <Link
            to={`/product/${item._id}`}
            key={index}
            className={classes.item}
          >
            <img src={item.img} className={classes.image} />

            <div className={classes['item-info']}>
              <h3 className={classes.title}>{item.name}</h3>
              <p className={classes.descrption}>Ціна - {item.price} грн</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Catalog
