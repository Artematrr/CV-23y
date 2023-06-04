import { Outlet } from 'react-router-dom'
import Footer from './elements/Footer/Footer'
import Header from './elements/Header/Header'
import Breadcrumbs from './elements/Breadcrumbs/Breadcrumbs'

function Layout() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <Outlet />
      <Footer />
    </>
  )
}

export { Layout }
