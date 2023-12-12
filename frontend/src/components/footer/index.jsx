import './index.css'

function Footer() {
  const content = [
    { title: 'Address', info: ['Lebanon, Beirut'] },
    { title: 'Contact', info: ['961 ** *** ***', 'info@****.***'] }
  ]
  const pages = ['Home', 'Profile', 'Request Drive', 'Careers']
  const links = ['Privacy Policy', 'Terms of Service', 'Cookies Settings']

  return (
    <div className="footer-container">
      <div className="footer-section topSection">
        {content.map((items, index) => {
          return (
            <div className="footer-column " key={index}>
              <div className="footer-heading">{items.title}</div>
              {items.info.map((text) => {
                return (
                  <div className="footer-content" key={`${index}-${text}`}>
                    {text}
                  </div>
                )
              })}
            </div>
          )
        })}

        <div className="footer-column">
          {pages.map((items, index) => {
            return (
              <a href="/about-us" className="footer-link" key={index}>
                {items}
              </a>
            )
          })}
        </div>
      </div>

      <div className="footer-section divider">
        <div className="footer-column">
          <div className="footer-group">
            <div className="footer-copyright">
              Copyright © 2024 GOMILES. All right reserved.
            </div>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-column">
          <div className="footer-group">
            <div className="footer-links">
              {links.map((items, index) => {
                return (
                  <a href="/about-us" className="footer-link" key={index}>
                    {items}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
