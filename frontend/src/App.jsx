import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Feedback from './pages/home/FeedbackForm'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Feedback />

        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="*" element={<>404 page not found</>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
