import styles from './BorderCountries.module.scss'
import { IBorderCountriesProps } from './BorderCountries.props'

const BorderCountries = ({name}:IBorderCountriesProps) => {
  return (
    <div className={styles.wrapper}>
      {name}
    </div>
  )
}

export default BorderCountries