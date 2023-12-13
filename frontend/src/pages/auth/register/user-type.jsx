import '../index.css'
import Button from '../../../components/buttons'

export default function UserType({ updateFields = () => {} }) {
  return (
    <div className="user-type">
      <Button
        type="submit"
        variant={'secondary'}
        onClick={(e) => {
          updateFields((prev) => {
            return { ...prev, type: 'user' }
          })
        }}
      >
        User
      </Button>

      <Button
        type="submit"
        variant={'secondary'}
        onClick={(e) => {
          updateFields((prev) => {
            return { ...prev, type: 'driver' }
          })
        }}
      >
        Driver
      </Button>
    </div>
  )
}
