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

  function handleLogin(e) {
    e.preventDefault()

    console.log(credentials)
  }

  return (
    <main className="auth-page">
      <form className="auth-card">
        <h1 className="auth-card-title">Login</h1>

        <div className="auth-card-content">
          <Input
            label={'Email:'}
            placeHolder={'mohamad@gmail.com'}
            onChange={(e) => {
              setCredentials({ ...credentials, email: e.target.value })
            }}
            type="email"
          />

          <Input
            label={'Password:'}
            placeHolder={'************'}
            onChange={(e) => {
              setCredentials({ ...credentials, password: e.target.value })
            }}
            type="password"
          />

          <p className="auth-card-content-p">
            Don’t have an account?{' '}
            <Link to={'/auth/register'} className="underlined">
              Register here.
            </Link>
          </p>
        </div>

        <Button variant={'primary'} className="auth-card-btn" onClick={handleLogin}>
          Login
        </Button>
      </form>
    </main>
  )
}
