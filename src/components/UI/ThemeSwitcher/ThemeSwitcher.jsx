import { useEffect, useState } from 'react'
import { MdModeNight, MdSunny } from 'react-icons/md'
import styles from './ThemeSwitcher.module.scss'

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('data-theme')
    return storedTheme || 'light'
  })

  useEffect(() => {
    document.querySelector('body').setAttribute('data-theme', theme)
    localStorage.setItem('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <span className={styles.toggleThemeContainer} onClick={toggleTheme}>
      <input
        hidden
        type='checkbox'
        onChange={toggleTheme}
        className={styles.toggleThemeButton}
        // defaultChecked={theme === 'dark'}
        checked={theme === 'dark'}
      />
      {theme === 'light' ? (
        <MdSunny size={24} color='#ffde5c' />
      ) : (
        <MdModeNight size={24} color='#fcfdfe' />
      )}
    </span>
  )
}

export default ThemeSwitcher
