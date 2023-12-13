import '../index.css'
import { useState } from 'react'
import Button from '../../../components/buttons'
import useMultistepForm from './multi-form.jsx'
import UserType from './user-type.jsx'

export default function Index() {
  const [credentials, setCredentials] = useState({ email: '', password: '', type: '' })

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserType updateFields={setCredentials} />,
      <div>hi</div>,
      <div>2</div>
    ])

  function handleRegister(e) {
    e.preventDefault()
    console.log(credentials)

    if (!isLastStep) return next()
    alert('Successful Account Creation')
  }

  return (
    <main className="auth-page">
      <form className="auth-card" onSubmit={handleRegister}>
        <h1 className="auth-card-title">Register</h1>

        {step}
        <div className={'auth-card-nav'}>
          {!isFirstStep && (
            <>
              <Button variant={'secondary'} onClick={back} type="button">
                Back
              </Button>

              <Button variant={isLastStep ? 'primary' : 'secondary'} type="submit">
                {isLastStep ? 'Register' : 'Next'}
              </Button>
            </>
          )}
        </div>
      </form>
    </main>
  )
}
