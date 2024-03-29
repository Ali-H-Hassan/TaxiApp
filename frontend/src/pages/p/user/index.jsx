import React from 'react'
import './index.css'
import Button from '../../../components/buttons'
import DataItem from '../../../components/tablerow'
import { logoutUserFromWindow } from '../../../util'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../../provider/userSlice'

const UserProfile = () => {
  const user = useSelector((state) => state.user.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function handleLogout() {
    await logoutUserFromWindow()

    dispatch(logoutUser)

    navigate(0)
  }

  return (
    <div className="dashboard">
      <div className="user-profile-container">
        <div className="profile-info">
          {user?.img_url !== '' ? (
            <div className="profile-image-wrapper">
              <img
                src={`${import.meta.env.VITE_IMAGE_BASE_PATH}/${user?.img_url}`}
                alt={`${user?.first_name} ${user?.last_name}`}
                className="profile-image-pfp"
              />
            </div>
          ) : (
            <p className="profile-image-p">{user?.email[0]}</p>
          )}

          <div className="profile-details">
            <div className="user-name">
              {user?.first_name} {user?.last_name}
            </div>
            <div className="action-buttons">
              <Link to={'/request'}>
                <Button className="request-ride">Request ride</Button>
              </Link>

              <Link to={'/p/user/edit'}>
                <Button className="edit-profile" variant="secondary">
                  Edit profile
                </Button>
              </Link>

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
