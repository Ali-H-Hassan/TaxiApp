import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Login from './pages/auth/login'
import Register from './pages/auth/register'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="*" element={<>404 page not found</>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
