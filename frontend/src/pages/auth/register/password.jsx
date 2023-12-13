import '../index.css'
import Input from '../../../components/input'
import { Link } from 'react-router-dom'
import { SpecialChar, EightPlus, CapitalChar, SmallChar } from '../../../components/icons'
import { useEffect, useState } from 'react'

export default function password({ updateFields = () => {}, value }) {
  const [checked, setChecked] = useState({
    special: false,
    capital: false,
    lower: false,
    more: false
  })

  useEffect(() => {
    setChecked({
      special: /[!@#$%&]/g.test(value),
      lower: /[a-z]/.test(value),
      capital: /[A-Z]/.test(value),
      more: value.length >= 8
    })

    if (checked.capital && checked.lower && checked.more && checked.special) {
      updateFields((prev) => {
        return { ...prev, canSubmit: true }
      })
    } else {
      updateFields((prev) => {
        return { ...prev, canSubmit: false }
      })
    }
  }, [value])

  return (
    <div className="pwd-card">
      <div className="icons-holder">
        <div className={`default-icon ${checked.special && 'active-logo'}`}>
          <SpecialChar />
        </div>

        <div className={`default-icon ${checked.more && 'active-logo'}`}>
          <EightPlus />
        </div>

        <div className={`default-icon ${checked.capital && 'active-logo'}`}>
          <CapitalChar />
        </div>

        <div className={`default-icon ${checked.lower && 'active-logo'}`}>
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
          You have an account?{' '}
          <Link to={'/auth/login'} className="underlined">
            Login here.
          </Link>
        </p>
      </div>
    </div>
  )
}
