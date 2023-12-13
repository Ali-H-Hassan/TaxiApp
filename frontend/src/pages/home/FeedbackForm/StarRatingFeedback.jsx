import React, { useState } from 'react'
import './index.css'

const StarRating = ({ rating, onRatingChange }) => {
  const [hoverRating, setHoverRating] = useState(0)

  const handleStarClick = (selectedRating) => {
    onRatingChange(selectedRating)
  }

  const handleStarHover = (hoveredRating) => {
    setHoverRating(hoveredRating)
  }

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          role="button"
          onClick={() => handleStarClick(star)}
          onMouseEnter={() => handleStarHover(star)}
          onMouseLeave={() => handleStarHover(0)}
          style={{
            cursor: 'pointer',
            color: star <= (hoverRating || rating) ? '#FFD700' : '#D3D3D3'
          }}
        >
          {star <= (hoverRating || rating) ? '★' : '☆'}
        </span>
      ))}
    </div>
  )
}

export default StarRating
