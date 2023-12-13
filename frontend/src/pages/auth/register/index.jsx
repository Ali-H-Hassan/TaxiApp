import '../index.css'
import { useState } from 'react'
import Button from '../../../components/buttons'
import useMultistepForm from './multi-form.jsx'
import UserType from './user-type.jsx'
import Email from './email.jsx'

export default function Index() {
  const [credentials, setCredentials] = useState({ email: '', password: '', type: '' })
  const [error, setError] = useState('')

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserType updateFields={setCredentials} />,
      <Email updateFields={setCredentials} value={credentials.email} />,
      <div>hi</div>,
      <div>2</div>
    ])

  function handleRegister(e) {
    e.preventDefault()
    console.log(credentials)

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

    if (!isLastStep) return next()
    alert('Successful Account Creation')
  }

  return (
    <main className="auth-page">
      <form className="auth-card" onSubmit={handleRegister}>
        <h1 className="auth-card-title">Register</h1>

        {error && <p className="error">{error}</p>}

        {step}

        {!isFirstStep && (
          <div className={'auth-card-nav'}>
            <Button variant={'secondary'} onClick={back} type="button">
              Back
            </Button>

            <Button variant={isLastStep ? 'primary' : 'secondary'} type="submit">
              {isLastStep ? 'Register' : 'Next'}
            </Button>
          </div>
        )}
      </form>
    </main>
  )
}
