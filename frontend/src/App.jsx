import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import store from './provider/store'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import UserPage from './pages/p/user'
import DriverPage from './pages/p/driver'
// import Row from './components/tablerow'
import User from './pages/userProfile'
function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userStore = store.getState()

    setUser(userStore?.user?.user)
  }, [user])

  return (
    <>
      <BrowserRouter>
        <Header />
        <User />
        {/* <Row
          locationX="Sample Location X"
          locationY="Sample Location Y"
          name="Sample Name"
          date="06-28-2004 12:00 am"
          status="verified"
          amount="$23.30"
        /> */}
        {!user ? (
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="*" element={<>404 page not found</>} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/p/user" element={<UserPage />} />
            <Route path="/p/driver" element={<DriverPage />} />
            <Route path="*" element={<>404 page not found</>} />
          </Routes>
        )}

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
