import { Outlet } from 'react-router-dom'
import Footer from './elements/Footer/Footer'
import Header from './elements/Header/Header'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export { Layout }
