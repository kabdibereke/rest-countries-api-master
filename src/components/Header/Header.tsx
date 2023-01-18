import React from 'react'

import styles from './Header.module.scss'
type Props = {}

const Header = (props: Props) => {
  return (
   <header className={styles.header_block}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Where in the world?</h1>
      </div>
   </header>
  )
}

export default Header