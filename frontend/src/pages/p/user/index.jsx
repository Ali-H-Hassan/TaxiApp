import React from 'react'
import './index.css'
import Button from '../../../components/buttons'
import DataItem from '../../../components/tablerow'
import { logoutUserFromWindow } from '../../../util'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../../provider/userSlice'

const UserProfile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function handleLogout() {
    await logoutUserFromWindow()

    await dispatch(logoutUser)

    navigate('/auth/login')
  }

  return (
    <div className="dashboard">
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
              <Button className="logout" variant="danger" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="history-section-container">
        <div className="history-section-title">
          <div className="title-text">History</div>
        </div>
        <div className="container">
          <div className="item">
            <div className="text">pickup</div>
          </div>
          <div className="item">
            <div className="text">destination</div>
          </div>
          <div className="item">
            <div className="text">driver name</div>
          </div>
          <div className="item">
            <div className="text">date</div>
          </div>
          <div className="item">
            <div className="text">status</div>
          </div>
          <div className="item">
            <div className="text">price</div>
          </div>
        </div>
        <DataItem
          locationX="location x"
          locationY="location y"
          name="Ali"
          date="06-28-2004 12:am"
          status="verified"
          amount="$23.30"
        />
        <DataItem
          locationX="location x"
          locationY="location y"
          name="Ali"
          date="06-28-2004 12:am"
          status="verified"
          amount="$23.30"
        />
        <DataItem
          locationX="location x"
          locationY="location y"
          name="Ali"
          date="06-28-2004 12:am"
          status="canceled"
          amount="$23.30"
        />
        <DataItem
          locationX="location x"
          locationY="location y"
          name="Ali"
          date="06-28-2004 12:am"
          status="canceled"
          amount="$23.30"
        />
      </div>
    </div>
  )
}

export default UserProfile
