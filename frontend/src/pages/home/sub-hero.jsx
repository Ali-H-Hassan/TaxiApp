import React from 'react'
import './sub-hero.css'
import Button from '../../components/buttons'
import { Link } from 'react-router-dom'

const HomePageSection5 = () => {
  return (
    <div className="home-page-section-5">
      <div className="text-container">
        <h2>Your journey begins with just a tap!</h2>
      </div>

      <Link to={'/auth/register'} className="cta-container">
        <Button variant="secondary">Sign up</Button>
      </Link>
    </div>
  )
}

export default HomePageSection5
