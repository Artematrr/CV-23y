import { useEffect, useState } from 'react'
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
        type='checkbox'
        onChange={toggleTheme}
        className={styles.toggleThemeButton}
        defaultChecked={theme === 'dark'}
        checked={theme === 'dark'}
      />
      DarkMode
    </span>
  )
}

export default ThemeSwitcher
