import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ICountries } from '../../interfaces/intrefaces'
import styles from './Country.module.scss'

const Country = (item: ICountries) => {
  return (
    <Link href={`/${item.name.common.toLowerCase()}`} className={styles.link}>
    <div className={styles.wrapper}>
        <Image height={160} width={264} src={item.flags.png} alt="flag"/>
        <div className={styles.info}>
            <h2 className={styles.countryName}>{item.name.common}</h2>
            <p className={styles.title}>Population: <span className={styles.subtitle}>{new Intl.NumberFormat().format(item.population)}</span> </p>
            <p className={styles.title}>Region: <span className={styles.subtitle}>{item.region}</span> </p>
            <p className={styles.title}>Capital: <span className={styles.subtitle}>{item.capital}</span> </p>
        </div>
    </div>
    </Link>
  )
}

export default Country

