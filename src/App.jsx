import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import './index.scss'
import HomePage from './screens/HomePage/HomePage'
import AboutPage from './screens/AboutPage/AboutPage'
import ErrorPage from './screens/ErrorPage/ErrorPage'
import PostPage from './screens/PostPage/PostPage'
import SinglePostPage from './screens/SinglePostPage/SinglePostPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='info' element={<Navigate to='/about' replace />} />
          {/* Сверху обработка дублирования при изменении адреса */}
          <Route path='post' element={<PostPage />} />
          <Route path='post/:id' element={<SinglePostPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
