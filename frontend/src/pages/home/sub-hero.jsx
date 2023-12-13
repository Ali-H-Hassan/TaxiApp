import React from 'react'
import './sub-hero.css'
import Button from '../../components/buttons'

const HomePageSection5 = () => {
  return (
    <div className="home-page-section-5">
      <div className="text-container">
        <h2>Your journey begins with just a tap!</h2>
      </div>

      <div className="cta-container">
        <Button
          label="Sign up"
          variant="secondary"
          onClick={() => console.log('Sign up clicked')}
        />
      </div>
    </div>
  )
}

export default HomePageSection5
