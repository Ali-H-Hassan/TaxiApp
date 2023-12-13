import './index.css'

export default function index() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="./public/logo.svg" alt="gomiles logo" className="header-logo-img" />

        <span className="header-logo-title">Gomiles</span>
      </div>

      <nav className="header-nav">
        <span className="header-nav-link">Home</span>
        <span className="header-nav-link header-nav-link-profile"></span>
      </nav>
    </header>
  )
}
