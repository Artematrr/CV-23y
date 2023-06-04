import styles from './SinglePostPage.module.scss'
import { useParams } from 'react-router-dom'

const SinglePostPage = () => {
  const { id } = useParams()
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>SinglePostPage</h1>
        <p>PostId: {id}</p>
      </div>
    </div>
  )
}

export default SinglePostPage
