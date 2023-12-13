import React from 'react'
import './effortlessConvenience.css'

const HomePageSection2 = ({ title, description, imageUrl, altText }) => {
  return (
    <div className="home-page-section-2">
      <div className="text-and-description">
        <h2 className="section-title">{title}</h2>
        <p className="section-description">{description}</p>
      </div>

      <div className="image-container">
        <img className="main-image" src={imageUrl} alt={altText} />
      </div>
    </div>
  )
}

export default HomePageSection2
