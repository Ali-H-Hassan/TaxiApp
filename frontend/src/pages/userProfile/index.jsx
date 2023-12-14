import React from 'react'
import './index.css'
import Button from '../../components/buttons'

const UserProfile = () => {
  return (
    <div className="user-profile-container">
      <div className="profile-info">
        <img
          className="profile-image"
          src="https://via.placeholder.com/135x132"
          alt="Profile"
        />
        <div className="profile-details">
          <div className="user-name">Aboudi</div>
          <div className="action-buttons">
            <Button
              className="request-ride"
              onClick={() => console.log('Request ride clicked')}
            >
              Request ride
            </Button>
            <Button
              className="edit-profile"
              variant="secondary"
              onClick={() => console.log('Edit profile clicked')}
            >
              Edit profile
            </Button>
            <Button
              className="logout"
              variant="danger"
              onClick={() => console.log('Logout clicked')}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
