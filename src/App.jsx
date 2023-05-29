import './index.scss'

import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'

import HomePage from './screens/HomePage/HomePage'
import AboutPage from './screens/AboutPage/AboutPage'
import ErrorPage from './screens/ErrorPage/ErrorPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
