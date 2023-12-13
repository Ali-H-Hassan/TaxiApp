import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Ride from './pages/ride/ride'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/ride" index element={<Ride />} />
          <Route path="*" element={<>404 page not found</>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
