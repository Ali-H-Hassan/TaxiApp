import '../index.css'
import { useState } from 'react'
import Button from '../../../components/buttons'
import useMultistepForm from './multi-form.jsx'
import UserType from './user-type.jsx'
import Email from './email.jsx'
import Password from './password.jsx'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { setlocal } from '../../../util'
import { useSelector } from 'react-redux'

export default function Index() {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.user)

  if (user?.email) {
    navigate('/')
  }

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    type: '',
    canSubmit: false
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserType updateFields={setCredentials} />,
      <Email updateFields={setCredentials} value={credentials.email} />,
      <Password updateFields={setCredentials} value={credentials.password} />
    ])

  async function handleRegister(e) {
    e.preventDefault()

    if (currentStepIndex === 1) {
      if (
        credentials.email.length === 0 ||
        !credentials.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
      ) {
        setError('Invalid email address.')
        return
      } else {
        setError('')
      }
    }

    if (currentStepIndex === 2) {
      if (credentials.password.length <= 0) {
        setError('Empty password field.')
        return
      } else {
        setError('')
      }
    }

    if (!isLastStep) return next()

    setLoading('Loading')

    const res = await axios.post(
      'http://127.0.0.1:8000/api/register',
      {
        email: credentials.email,
        password: credentials.password,
        role_id: credentials.type === 'user' ? 1 : 2
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    )

    if (res?.data?.status === 'success') {
      setlocal('token', res?.data?.authorisation?.token)

      navigate('/')
    }

    setLoading('')
  }

  return (
    <main className="auth-page">
      <form className="auth-card" onSubmit={handleRegister}>
        <h1 className="auth-card-title">Register</h1>

        {error && <p className="error">{error}</p>}
        {loading && <p className="loading">{loading}</p>}

        {step}

        {!isFirstStep && (
          <div className={'auth-card-nav'}>
            <Button variant={'secondary'} onClick={back} type="button">
              Back
            </Button>

            <Button
              variant={isLastStep ? 'primary' : 'secondary'}
              type={isLastStep ? (credentials.canSubmit ? 'submit' : 'button') : 'submit'}
            >
              {isLastStep ? 'Register' : 'Next'}
            </Button>
          </div>
        )}
      </form>
    </main>
  )
}
