import React from 'react'
import './index.css'
import MyMap from './MyMap.jsx'
import Input from '../../components/input'
import Button from '../../components/buttons'
import { Link } from 'react-router-dom'
// import axios from 'axios'

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
      <Link to={'/request'} className="ride-form">
        <div className="title">
          Request a
          <span style={{ color: '#2ecc71' }}>
            {'  '}ride{'  '}
          </span>
          now
        </div>

        <div className="form-section">
          <Input placeHolder={'Pick up location'} />
          <Input placeHolder={'Destination'} />
        </div>

        <div className="login-button">
          <Button variant={'primary'} type="button">
            Request
          </Button>
        </div>
      </Link>
      <div className="map-container">
        <MyMap />
      </div>
    </div>
  )
}

export default RequestRide
