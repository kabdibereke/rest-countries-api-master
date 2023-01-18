import React, { useState } from 'react'
import SearchIcon from '../../assets/search.svg'
import styles from './SearchInput.module.scss'
import {  useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { incrementByAmount } from '../../store/searchSlice'

const SearchInput = () => {
  const [text, setText] =useState('')
  const dispatch = useDispatch<AppDispatch>()

  const inputChange=(e:React.ChangeEvent<HTMLInputElement>)=> {
    setText(e.target.value)
    dispatch(incrementByAmount(e.target.value.toLowerCase()))
  }
  return (
    <div className={styles.wrapper}>
        <SearchIcon/>
        <input className={styles.input} type="text" value={text} placeholder='Search for a country…' onChange={inputChange} />
    </div>
  )
}

export default SearchInput