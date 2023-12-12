import './index.css'

export default function Index() {
  const address = 'Lebanon, Beirut'
  const contactInfo = {
    phoneNumber: '961 ** *** ***',
    email: 'info@****.***'
  }

  return (
    <div className="footer-container">
      <div className="footer-section">
        <div className="footer-heading">Address:</div>
        <div className="footer-content">{address}</div>
        <div className="footer-heading">Contact:</div>
        <div className="footer-content">
          {contactInfo.phoneNumber}
          <br />
          {contactInfo.email}
        </div>
      </div>
      <div className="footer-section">
        <a href="/about-us" className="footer-link">
          About Us
        </a>
        <a href="/privacy-policy" className="footer-link">
          Privacy Policy
        </a>
        <a href="/careers" className="footer-link">
          Careers
        </a>
        <a href="/terms-and-conditions" className="footer-link">
          Terms and conditions
        </a>
      </div>
      <div className="footer-section">
        <div className="footer-copyright">
          Copyright © 2024 GOMILES. All right reserved.
        </div>
        <div className="footer-links">
          <a href="/privacy-policy" className="footer-link">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="footer-link">
            Terms of Service
          </a>
          <a href="/cookies-settings" className="footer-link">
            Cookies Settings
          </a>
        </div>
      </div>
    </div>
  )
}
