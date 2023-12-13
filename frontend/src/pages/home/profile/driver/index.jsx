import React, { useState } from 'react'
import Button from '../../../../components/buttons'
import { Verified, Pending, Canceled } from '../../../../components/status'
import './index.css'
import StarRating from './StarRating'

const DriverProfile = ({ profileImageUrl }) => {
  const [rating, setRating] = useState(0)

  const handleRatingChange = (newRating) => {
    setRating(newRating)
  }

  return (
    <div className="driver-profile">
      <div className="profile-info">
        <img className="profile-image" src={profileImageUrl} alt="Profile" />
        <div className="text-info">
          <div className="driver-name">Mohammad Ramadan</div>
          <div className="ratings-and-status">
            <div className="ratings">
              <StarRating rating={2} />
            </div>
            <div className="status">
              <Verified />
              <Pending />
            </div>
          </div>
        </div>
      </div>

      <div className="action-buttons">
        <Button label="" variant="primary">
          Check reviews
        </Button>
        <span style={{ marginLeft: '8px' }}>
          <Button variant="secondary">Edit profile</Button>
        </span>
        <span style={{ marginLeft: '8px' }}>
          <Button variant="danger" style={{ marginLeft: '8px' }}>
            Logout
          </Button>
        </span>
      </div>
    </div>
  )
}

export default DriverProfile
