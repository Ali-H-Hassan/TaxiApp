import React, { useState } from 'react'
import Button from '../../../components/buttons'
import { Verified, Pending, Canceled } from '../../../components/status'
import './index.css'
import StarRating from './StarRating'
import { logoutUserFromWindow } from '../../../util'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../../provider/userSlice'

const DriverProfile = () => {
  const user = useSelector((state) => state.user.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [rating, setRating] = useState(0)

  const handleRatingChange = (newRating) => {
    setRating(newRating)
  }

  async function handleLogout() {
    await logoutUserFromWindow()

    dispatch(logoutUser)

    navigate(0)
  }

  return (
    <div className="driver-profile">
      <div className="driver-profile-info">
        {user?.img_url !== '' ? (
          <img
            src={user?.img_url}
            alt={`${user?.first_name} ${user?.last_name}`}
            className="driver-profile-image"
          />
        ) : (
          <p className="profile-image-p">{user?.email[0]}</p>
        )}

        <div className="driver-text-info">
          <div className="driver-name">
            {user?.first_name} {user?.last_name}
          </div>
          <div className="ratings-and-status">
            <div className="ratings">
              <StarRating rating={2} />
            </div>
            <div className="status">
              <Verified />
            </div>
          </div>
        </div>
      </div>

      <div className="action-buttons">
        <Button label="" variant="primary">
          Check reviews
        </Button>

        <span style={{ marginLeft: '8px' }}>
          <Link to={'/p/user/edit'}>
            <Button className="edit-profile" variant="secondary">
              Edit profile
            </Button>
          </Link>
        </span>

        <span style={{ marginLeft: '8px' }}>
          <Button className="logout" variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </span>
      </div>
    </div>
  )
}

export default DriverProfile
