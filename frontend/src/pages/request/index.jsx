import React from 'react'
import './index.css'
import { MyMap } from './MyMap'
import axios from 'axios'

const RequestRide = () => {
  // try {
  //     const res = await axios.post(
  //       'http://127.0.0.1:8000/api/create_ride',
  //       {
  //         passenger_id: credentials.id,
  //         start_location: credentials.start_location,
  //         end_location: credentials.end_location,
  //         start_time:credentials.start_time
  //       },
  //       {
  //         headers: {
  //           Accept: 'application/json',
  //           'Content-Type': 'application/json'
  //         }
  //       }
  //     )
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
                {/* Add your Input component here if needed */}
              </div>
            </div>
          </div>
          <div className="destination-input">
            <div className="input-container">
              <div className="input-box">
                <div className="input-label">Destination</div>
                {/* Add your Input component here if needed */}
              </div>
            </div>
          </div>
        </div>
        <div className="login-button">
          <div className="button-container">
            <div className="button-text">Login</div>
            {/* Add your Button component here if needed */}
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
