import '../index.css'
import { Link } from 'react-router-dom'
import Input from '../../../components/input'
import Button from '../../../components/buttons'
import { useState } from 'react'

export default function Index() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('')

  function handleLogin(e) {
    e.preventDefault()

    if (
      credentials.email.length === 0 ||
      !credentials.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    ) {
      setError('Invalid email address.')
      return
    }

    if (credentials.password.length <= 0) {
      setError('Empty password field.')
      return
    }

    console.log(credentials)

    setCredentials({
      email: '',
      password: ''
    })
  }

  return (
    <main className="auth-page">
      <form className="auth-card" onSubmit={handleLogin}>
        <h1 className="auth-card-title">Login</h1>

        <div className="auth-card-content">
          <p className="error">{error}</p>

          <Input
            label={'Email:'}
            placeHolder={'mohamad@gmail.com'}
            value={credentials.email}
            onChange={(e) => {
              setCredentials({ ...credentials, email: e.target.value })
            }}
            type="email"
            required={true}
          />

          <Input
            label={'Password:'}
            placeHolder={'************'}
            value={credentials.password}
            onChange={(e) => {
              setCredentials({ ...credentials, password: e.target.value })
            }}
            type="password"
            required={true}
          />

          <p className="auth-card-content-p">
            Don’t have an account?{' '}
            <Link to={'/auth/register'} className="underlined">
              Register here.
            </Link>
          </p>
        </div>

        <Button variant={'primary'} className="auth-card-btn">
          Login
        </Button>
      </form>
    </main>
  )
}
