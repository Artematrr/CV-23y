import { useEffect, useState } from 'react'
import styles from './PostPage.module.scss'
import { Link } from 'react-router-dom'

const PostPage = () => {
  const [post, setPost] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPost(data))
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>My posts</h1>

        {post.map(item => (
          <Link key={item.id} to={`/post/${item.id}`}>
            {' '}
            <li>{item.title}</li>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PostPage
