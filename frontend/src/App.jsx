import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import RequestPage from './pages/request'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import UserPage from './pages/p/user'
import DriverPage from './pages/p/driver'
import EditProfileSection from './pages/p/edit-profile'
import { getlocal } from './util'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from './provider/userSlice'

function App() {
  const user = useSelector((state) => state.user.user)
  const dispatch = useDispatch()

  useEffect(() => {
    const token = getlocal('token')

    if (user === null && token) {
      const runSetUser = async () => {
        const res = await axios.post(
          'http://127.0.0.1:8000/api/user-data-by-token',
          {},
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            }
          }
        )

        const userData = res?.data

        if (userData) {
          dispatch(setUser(userData))
        }
      }

      runSetUser()
    }
  }, [user])

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" index element={<Home />} />

          {!user ? (
            <>
              <Route path="/auth/register" element={<Register />} />
              <Route path="*" element={<Login />} />
            </>
          ) : (
            <>
              <Route path="/request" element={<RequestPage />} />
              <Route path="/p/driver" element={<DriverPage />} />
              <Route path="/p/user" element={<UserPage />} />
              <Route path="/p/:user_role/edit" element={<EditProfileSection />} />
              <Route path="*" element={<>404 page not found</>} />
            </>
          )}
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
