import './index.css'
import Label from '../../../components/input'
import Button from '../../../components/buttons'

const EditProfile = () => {
  const handleCancel = () => {
    console.log('Cancelled')
  }

  const handleSave = () => {
    console.log('Saved')
  }

  return (
    <div className="edit-profile-container">
      <div className="edit-profile-content">
        <div className="title">Edit Profile</div>
        <div className="form-section">
          <Label label="First Name" value="Patrick" />
          <Label label="Last Name" value="Star" />
          <Label label="Email" value="Example@mail.com" />
          <Label label="Contact Number" value="+961 12 345 678" />
          <Label label="Password" value="****************" type="password" />
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
