import { Outlet } from 'react-router-dom'
import { ScrollToTop } from './components/common/ScrollToTop'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
