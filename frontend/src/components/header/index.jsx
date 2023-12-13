import { Link } from 'react-router-dom'
import './index.css'
import store from '../../provider/store'
import { useEffect, useState } from 'react'
import Button from '../buttons'

export default function index() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userStore = store.getState()

    setUser(userStore?.user?.user)
  }, [user])

  return (
    <header className="header">
      <Link to={'/'} className="header-logo">
        <img src="/logo.svg" alt="gomiles logo" className="header-logo-img" />

        <span className="header-logo-title hide">Gomiles</span>
      </Link>

      <nav className="header-nav">
        <Link to={'/'} className="header-nav-link hide">
          Home
        </Link>

        {user ? (
          <Link to={'/'} className="header-nav-link header-nav-link-profile"></Link>
        ) : (
          <>
            <Link to={'/auth/login'}>
              <Button>Login</Button>
            </Link>

            <Link to={'/auth/register'}>
              <Button variant={'secondary'}>Register</Button>
            </Link>
          </>
        )}
      </nav>
    </header>
  )
}
