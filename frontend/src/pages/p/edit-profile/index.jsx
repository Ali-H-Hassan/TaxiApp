import './index.css'
import Label from '../../../components/input'
import Button from '../../../components/buttons'
import { useState } from 'react'

const EditProfile = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    first_name: '',
    last_name: '',
    phone_number: ''
  })

  const handleCancel = () => {
    console.log('Cancelled')
  }

  const handleSave = () => {
    console.table(userInfo)
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
        src="https://via.placeholder.com/240x240"
        alt="Profile"
      />
    </div>
  )
}

export default EditProfile
