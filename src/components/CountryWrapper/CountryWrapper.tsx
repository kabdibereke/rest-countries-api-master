import React, { useEffect, useState } from 'react'
import styles from './CountryWrapper.module.scss'
import Country from '../Country/Country'
import { ICountries, ICountriesArray } from '../../interfaces/intrefaces'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

const CountryWrapper = ({countries}:ICountriesArray) => {


  const countryName = useSelector((state: RootState) => state.name.name)
  const regionName = useSelector((state: RootState) => state.region.region)
    console.log(regionName)
  return (
    <div className={styles.wrapper}>
    {regionName=='All' ? countries.filter((item)=> ( item.name.common).toLowerCase().includes(countryName)).map((item,index)=> {
       return  <Country key={index} {...item}/>
    }): countries.filter((item)=> ( item.name.common).toLowerCase().includes(countryName)).filter((item=>(item.region).includes(regionName))).map((item,index)=> {
        return  <Country key={index} {...item}/>
     })}

    </div>
  )
}

export default CountryWrapper