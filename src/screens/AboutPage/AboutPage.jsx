import styles from './AboutPage.module.scss'

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Обо мне</h1>
        <p>Бобыльчук</p>
        <p>React Developer</p>
        <p>
          <a href='https://vk.com/artematrr'>VK</a> <span> | </span>
          <a href='https://github.com/artematrr'>GH</a> <span> | </span>
          <a href=' https://t.me/artematrr'>TG</a>
        </p>
      </div>
    </div>
  )
}

export default AboutPage
