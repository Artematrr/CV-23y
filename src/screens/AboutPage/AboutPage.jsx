import styles from './AboutPage.module.scss'

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>About</h1>
        <p>
          This is a simple app to help you keep track of your expenses. It is a
          work in progress.
        </p>
      </div>
    </div>
  )
}

export default AboutPage
