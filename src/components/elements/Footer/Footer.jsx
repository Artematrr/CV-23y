import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div>
      <footer className={styles.container}>
        <p>
          &copy; {new Date().getFullYear()} Сплав Юнивёрс. Все права защищены
        </p>
      </footer>
    </div>
  )
}

export default Footer
