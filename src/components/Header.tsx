import styles from './Header.module.css'
import '../global.css'
import rocketLogo from '../assets/rocket.svg'

export const Header = () => {
 
  return(
      <header className={styles.header}>
        <img src={rocketLogo} alt="Logo de um foguete" />
        <p><span className={styles.to}>to</span><span className={styles.do}>do</span></p>
      </header>
  )
}