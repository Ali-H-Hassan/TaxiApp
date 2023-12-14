import React from 'react'
import './index.css'
import { MyMap } from './MyMap'

const RequestRide = () => {
  return (
    <div className="request-ride-container">
      <div className="ride-form">
        <div className="title">
          <span className="title-text">Request a </span>
          <span className="green-text">ride</span>
          <span className="title-text"> now</span>
        </div>
        <div className="form-section">
          <div className="location-input">
            <div className="input-container">
              <div className="input-box">
                <div className="input-label">Pick up location</div>
              </div>
            </div>
          </div>
          <div className="destination-input">
            <div className="input-container">
              <div className="input-box">
                <div className="input-label">Destination</div>
              </div>
            </div>
          </div>
        </div>
        <div className="login-button">
          <div className="button-container">
            <div className="button-text">Login</div>
          </div>
        </div>
      </div>
      <div className="map-container">
        <MyMap />
      </div>
    </div>
  )
}

export default RequestRide
