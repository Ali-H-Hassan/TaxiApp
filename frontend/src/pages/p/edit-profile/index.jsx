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

  const handleFileUpload = (e) => {
    if (!e.target.files[0]) return
    console.log(URL.createObjectURL(e.target.files[0]))

    setUserInfo((prev) => {
      return { ...prev, img_url: URL.createObjectURL(e.target.files[0]) }
    })
  }

  const handleSave = async () => {
    const token = getlocal('token')

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

      <div className="profile-image-div">
        <img
          className="profile-image"
          src={
            userInfo?.img_url || user?.img_url
              ? userInfo?.img_url || user?.img_url
              : 'https://via.placeholder.com/240x240'
          }
          alt="Profile"
        />

        <input
          type="file"
          className="profile-image-input"
          accept="image/png, image/jpeg, image/webp, image/jpg"
          onChange={handleFileUpload}
        />
      </div>
    </div>
  )
}

export default EditProfile
