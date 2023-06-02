import styles from './HomePage.module.scss'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Welcome to the Home Page!</h1>
        <p>
          This is a simple React app that demonstrates how to use React Router
          to create a simple navigation app.
        </p>
      </div>
    </div>
  )
}

export default HomePage
