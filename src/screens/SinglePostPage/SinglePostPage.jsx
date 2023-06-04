import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './SinglePostPage.module.scss'

const SinglePostPage = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data))
  }, [id])

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {post && (
          <>
            <h1>
              {id}-й пост: {post.title}
            </h1>
            <p>{post.body}</p>
          </>
        )}
      </div>
    </div>
  )
}

export default SinglePostPage
