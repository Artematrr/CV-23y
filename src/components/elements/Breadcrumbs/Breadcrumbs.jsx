import { useNavigate } from 'react-router-dom'
import { MdTurnLeft } from 'react-icons/md'
import styles from './Breadcrumbs.module.scss'

const Breadcrumbs = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <button onClick={() => navigate(-1)}>
        <MdTurnLeft /> Back
      </button>
    </div>
  )
}

export default Breadcrumbs
