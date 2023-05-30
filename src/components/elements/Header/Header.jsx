import { NavLink } from 'react-router-dom'
import ThemeSwitcher from '../../UI/ThemeSwitcher/ThemeSwitcher'
import styles from './Header.module.scss'
import { MdPolymer } from 'react-icons/md'

const Header = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.navContainer}>
        <NavLink to='/' className={styles.logo}>
          <MdPolymer size={30} style={{ marginRight: '5px' }} />
          {/* <img src='/src/assets/brand/Logo.png' alt='logo' /> */}
          <span>Сплав Ю</span>
        </NavLink>
        <NavLink to='/*'>Error</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
        <input className={styles.search} type='text' placeholder='Search' />
        <ThemeSwitcher />
      </nav>
    </header>
  )
}

export default Header
