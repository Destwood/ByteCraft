import classes from './Search.module.scss'
import searchIcon from './search-icon.svg'

const Search = () => {
  return (
    <div className={classes.search}>
      <div className={classes['search-icon']}>
        <img src={searchIcon} alt="Icon" />
      </div>
      <input placeholder="Пошук..." type="text" />
    </div>
  )
}
export default Search
