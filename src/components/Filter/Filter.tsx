import React, { useEffect, useState } from 'react'
import styles from './Filter.module.scss'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { filterAction } from '../../store/filterSlice'

const Filter = () => {
  const [regionValue, setRegionValue] =useState('All')
  const dispatch = useDispatch<AppDispatch>()
  const selectChange = (e:React.ChangeEvent<HTMLSelectElement>)=> {
    setRegionValue(e.target.value)
    dispatch(filterAction(e.target.value))
  }

  return (
    <div className={styles.wrapper}>
        <select name='Filter by Region' value={regionValue} className={styles.select} onChange={selectChange}>
            <option value="" disabled selected>Filter by Region</option>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>
  )
}

export default Filter