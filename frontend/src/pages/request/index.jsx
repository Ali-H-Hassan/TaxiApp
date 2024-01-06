import './index.css'
import React, { useState, useEffect } from 'react'
import { Map, Marker } from 'pigeon-maps'
import Input from '../../components/input'
import Button from '../../components/buttons'
import axios from 'axios'
import { getlocal } from '../../util'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function RequestRide() {
  const user = useSelector((state) => state.user.user)
  const navigate = useNavigate()

  const [error, setError] = useState('')
  const [isStart, setIsStart] = useState(true)
  const [price, setPrice] = useState(0)
  const [locations, setLocations] = useState({
    start: [],
    end: []
  })
  const [date, setDate] = useState('')

  function handleMarkOnMap({ event, latLng }) {
    setLocations((prev) => {
      if (isStart) {
        return { ...prev, start: latLng }
      } else {
        return { ...prev, end: latLng }
      }
    })
  }

  async function handleSubmitRequest() {
    const token = getlocal('token')

    if (
      (date.length === 0) |
      (locations?.end.length === 0) |
      (locations?.start.length === 0)
    ) {
      setError('Error: incomplete form')
      return
    }

    setError('')

    const res = await axios.post(
      'http://127.0.0.1:8000/api/create_ride',
      {
        start_location: locations?.start.toString(),
        end_location: locations?.end.toString(),
        start_time: date,
        price: price
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    )

    setError('')
    setPrice(0)
    setLocations({
      start: [],
      end: []
    })
    setDate('')

    if (res?.data?.status === 'success') {
      navigate(`/p/${user?.role_id === 1 ? 'user' : 'driver'}`)
    } else {
      setError('An error has occurred.')
    }
  }

  useEffect(() => {
    function calculateDistance(lat1, lon1, lat2, lon2) {
      function deg2rad(deg) {
        return deg * (Math.PI / 180)
      }

      const R = 6371 // Earth radius in kilometers

      const dLat = deg2rad(lat2 - lat1)
      const dLon = deg2rad(lon2 - lon1)

      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) *
          Math.cos(deg2rad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2)

      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
      const distance = R * c // Distance in kilometers

      return distance
    }

    if (locations.start.length === 2 && locations.end.length === 2) {
      const distance = calculateDistance(
        locations.start[0],
        locations.start[1],
        locations.end[0],
        locations.end[1]
      )

      setPrice(Math.floor(distance * import.meta.env.VITE_PRICE_OF_RIDE_MULIPLIER))
    }
  }, [locations.start, locations.end])

  return (
    <div className="request-ride-page">
      <h1>Pick your ride</h1>

      <div className="request-ride-container">
        <div className="ride-form">
          <div className="title">
            <span style={{ color: '#2ecc71' }}>Details</span>
          </div>

          <div>
            <span style={{ color: 'red' }}>{error}</span>
          </div>

          <div className="form-section">
            <div>Price: ${price}</div>

            <div className={isStart && 'active-label'}>
              <Input
                label={'Start'}
                placeHolder={'Pick up location'}
                onClick={() => setIsStart(true)}
                value={locations?.start}
              />
            </div>

            <div className={!isStart && 'active-label'}>
              <Input
                label={'End'}
                placeHolder={'Destination'}
                onClick={() => setIsStart(false)}
                value={locations?.end}
              />
            </div>

            <Input
              label={'Time'}
              placeHolder={'Ride pick up'}
              onChange={(e) => {
                setDate(e.target.value)
              }}
              value={date}
              type="datetime-local"
            />
          </div>

          <div className="login-button">
            <Button variant={'primary'} type="button" onClick={handleSubmitRequest}>
              Request
            </Button>
          </div>
        </div>
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
