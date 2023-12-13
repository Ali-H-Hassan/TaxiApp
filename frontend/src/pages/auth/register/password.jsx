import '../index.css'
import Input from '../../../components/input'
import { Link } from 'react-router-dom'
import { SpecialChar, EightPlus, CapitalChar, SmallChar } from '../../../components/icons'

export default function password({ updateFields = () => {}, value }) {
  return (
    <div className="pwd-card">
      <div className="icons-holder">
        <div className="default-icon">
          <SpecialChar />
        </div>

        <div className="default-icon">
          <EightPlus />
        </div>

        <div className="default-icon">
          <CapitalChar />
        </div>

        <div className="default-icon">
          <SmallChar />
        </div>
      </div>

      <div>
        <Input
          label={'Password:'}
          placeHolder={'************'}
          value={value}
          onChange={(e) => {
            updateFields((prev) => {
              return { ...prev, password: e.target.value }
            })
          }}
          type="password"
          required={true}
        />

        <p className="auth-card-content-p" style={{ marginTop: '10px' }}>
          Don’t have an account?{' '}
          <Link to={'/auth/register'} className="underlined">
            Register here.
          </Link>
        </p>
      </div>
    </div>
  )
}
