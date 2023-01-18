import React from 'react'
import Filter from '../Filter/Filter'
import SearchInput from '../SearchInput/SearchInput'
import styles from './SearchAndFilter.module.scss'
type Props = {}

const SearchAndFilter = (props: Props) => {
  return (
    <div className={styles.wrapper}>
        <SearchInput/>
        <Filter/>
    </div>
  )
}

export default SearchAndFilter