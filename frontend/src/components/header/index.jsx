import { Link } from 'react-router-dom'
import './index.css'
import Button from '../buttons'
import { useSelector } from 'react-redux'

export default function index() {
  const user = useSelector((state) => state.user.user)

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
          <Link
            to={`/p/${user?.role_id === 1 ? 'user' : 'driver'}`}
            className="header-nav-link header-nav-link-profile"
          >
            <img
              src={user?.img_url}
              alt={`${user?.first_name} ${user?.last_name}`}
              className="header-nav-link-profile"
            />
          </Link>
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
