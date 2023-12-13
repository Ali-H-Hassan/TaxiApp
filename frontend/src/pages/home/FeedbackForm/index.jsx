import React, { useState } from 'react'
import StarRating from './StarRatingFeedback' // Make sure the import is correct
import './index.css'
import Input from '../../../components/input'
import Button from '../../../components/buttons'

const FeedbackForm = () => {
  const [rating, setRating] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [comment, setComment] = useState('')

  const handleRatingChange = (newRating) => {
    setRating(newRating)
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category)
  }

  const handleCommentChange = (e) => {
    setComment(e.target.value)
  }

  const handleSubmit = () => {
    console.log('Rating:', rating)
    console.log('Selected Category:', selectedCategory)
    console.log('Comment:', comment)
  }

  return (
    <div className="feedback-form-container">
      <img
        className="profile-image"
        src="https://via.placeholder.com/135x132"
        alt="Profile"
      />
      <StarRating rating={rating} onRatingChange={handleRatingChange} />
      <div className="feedback-categories">
        {[
          'Cleanliness',
          'Navigation',
          'Price',
          'Driving',
          'Pickup',
          'Route',
          'Other'
        ].map((category) => (
          <div
            key={category}
            className={`category-box ${category === selectedCategory ? 'selected' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="comment-section">
        <Input
          placeHolder="Type your comment here..."
          label="Comment:"
          onChange={handleCommentChange}
        />
        <Button onClick={handleSubmit} variant="primary">
          Submit
        </Button>
      </div>
    </div>
  )
}

export default FeedbackForm
