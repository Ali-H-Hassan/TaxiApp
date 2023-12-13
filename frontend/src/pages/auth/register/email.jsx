import '../index.css'
import Input from '../../../components/input'
import { Link } from 'react-router-dom'

export default function Email({ updateFields = () => {}, value }) {
  return (
    <div style={{ width: '100%' }}>
      <Input
        label={'Email:'}
        placeHolder={'mohamad@gmail.com'}
        value={value}
        onChange={(e) => {
          updateFields((prev) => {
            return { ...prev, email: e.target.value }
          })
        }}
        type="email"
        required={true}
      />

      <p className="auth-card-content-p" style={{ marginTop: '15px' }}>
        Don’t have an account?{' '}
        <Link to={'/auth/register'} className="underlined">
          Register here.
        </Link>
      </p>
    </div>
  )
}
