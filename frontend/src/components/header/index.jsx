import { Link } from 'react-router-dom'
import './index.css'

export default function index() {
  return (
    <header className="header">
      <Link to={'/'} className="header-logo">
        <img src="./public/logo.svg" alt="gomiles logo" className="header-logo-img" />

        <span className="header-logo-title hide">Gomiles</span>
      </Link>

      <nav className="header-nav">
        <Link to={'/'} className="header-nav-link hide">
          Home
        </Link>
        <Link to={'/'} className="header-nav-link header-nav-link-profile"></Link>
      </nav>
    </header>
  )
}
