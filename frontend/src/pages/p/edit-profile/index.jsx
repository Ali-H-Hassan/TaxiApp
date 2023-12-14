import './index.css'
import Label from '../../../components/input'
import Button from '../../../components/buttons'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getlocal } from '../../../util'

const EditProfile = () => {
  const user = useSelector((state) => state.user.user)
  const navigate = useNavigate()

  const [userInfo, setUserInfo] = useState({
    email: user?.email,
    first_name: user?.first_name,
    last_name: user?.last_name,
    phone_number: user?.phone_number,
    img_url: user?.img_url
  })

  const handleCancel = () => {
    navigate(`/p/${user?.role_id === 1 ? 'user' : 'driver'}`)
  }

  const handleSave = async () => {
    const token = getlocal('token')

    console.table(userInfo)

    await axios.post(
      'http://127.0.0.1:8000/api/update_info',
      { ...userInfo },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    )

    navigate(`/p/${user?.role_id === 1 ? 'user' : 'driver'}`)
  }

  return (
    <div className="edit-profile-container">
      <div className="edit-profile-content">
        <div className="title">Edit Profile</div>
        <div className="form-section">
          <Label
            label="Contact Number"
            value={userInfo.email}
            onChange={(e) => {
              setUserInfo((prev) => {
                return { ...prev, email: e.target.value }
              })
            }}
          />
          <Label
            label="First Name"
            value={userInfo.first_name}
            onChange={(e) => {
              setUserInfo((prev) => {
                return { ...prev, first_name: e.target.value }
              })
            }}
          />
          <Label
            label="Last Name"
            value={userInfo.last_name}
            onChange={(e) => {
              setUserInfo((prev) => {
                return { ...prev, last_name: e.target.value }
              })
            }}
          />
          <Label
            label="Contact Number"
            value={userInfo.phone_number}
            onChange={(e) => {
              setUserInfo((prev) => {
                return { ...prev, phone_number: e.target.value }
              })
            }}
          />
        </div>

        <div className="action-buttons">
          <Button className="cancel-button" onClick={handleCancel}>
            Cancel
          </Button>

          <Button className="save-button" variant="primary" onClick={handleSave}>
            Save
          </Button>
        </div>
      </div>

      <img
        className="profile-image"
        src={user?.img_url === '' ? 'https://via.placeholder.com/240x240' : user?.img_url}
        alt="Profile"
      />
    </div>
  )
}

export default EditProfile
