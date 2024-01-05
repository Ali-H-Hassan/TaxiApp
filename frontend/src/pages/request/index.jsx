import './index.css'
import React, { useState } from 'react'
import { Map, Marker } from 'pigeon-maps'
import Input from '../../components/input'
import Button from '../../components/buttons'
import { Link } from 'react-router-dom'
// import axios from 'axios'

export default function RequestRide() {
  const [isStart, setIsStart] = useState(true)
  const [locations, setLocations] = useState({
    start: [],
    end: []
  })

  function handleMarkOnMap({ event, latLng }) {
    setLocations((prev) => {
      if (isStart) {
        return { ...prev, start: latLng }
      } else {
        return { ...prev, end: latLng }
      }
    })
  }

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
    <div className="request-ride-page">
      <h1>Pick your ride</h1>

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
            <div className={isStart && 'active-label'}>
              <Input
                label={'Start'}
                placeHolder={'Pick up location'}
                onClick={() => setIsStart(!isStart)}
                value={locations?.start}
              />
            </div>

            <div className={!isStart && 'active-label'}>
              <Input
                label={'End'}
                placeHolder={'Destination'}
                onClick={() => setIsStart(!isStart)}
                value={locations?.end}
              />
            </div>
          </div>

          <div className="login-button">
            <Button variant={'primary'} type="button">
              Request
            </Button>
          </div>
        </Link>
        <div className="map-container">
          <Map
            height={300}
            defaultCenter={[50.879, 4.6997]}
            defaultZoom={11}
            onClick={handleMarkOnMap}
          >
            {locations?.start.length !== 0 && (
              <Marker width={50} anchor={locations?.start} />
            )}
            {locations?.end.length !== 0 && (
              <Marker width={50} anchor={locations?.end} color={`hsl(0deg 39% 70%)`} />
            )}
          </Map>
        </div>
      </div>
    </div>
  )
}
