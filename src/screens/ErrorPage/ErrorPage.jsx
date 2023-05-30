import styles from './ErrorPage.module.scss'

const ErrorPage = () => {
  const message = 'Page not found'
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1> Error: {message}. This page is unavailable.</h1>
        <h2>
          The link you followed may be broken, or the page may have been removed
          or renamed.
        </h2>
      </div>
    </div>
  )
}

export default ErrorPage
