import '../index.css'
import { Link } from 'react-router-dom'
import Input from '../../../components/input'
import Button from '../../../components/buttons'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setlocal } from '../../../util'
import axios from 'axios'

export default function Index() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')
  const navigate = useNavigate()

  async function handleLogin(e) {
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

    setLoading('Loading')

    try {
      const res = await axios.post(
        'http://127.0.0.1:8000/api/login',
        {
          email: credentials.email,
          password: credentials.password
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

        navigate(0)
      } else {
        setError('Invalid credentials')
      }
    } catch (error) {
      setError('Invalid credentials')
      setLoading('')
    }

    console.log(res?.data)

    setCredentials({
      email: '',
      password: ''
    })

    setLoading('')
  }

  return (
    <main className="auth-page">
      <form className="auth-card" onSubmit={handleLogin}>
        <h1 className="auth-card-title">Login</h1>

        <div className="auth-card-content">
          {error && <p className="error">{error}</p>}
          {loading && <p className="loading">{loading}</p>}

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

        <Button variant={'primary'} className="auth-card-btn" type="submit">
          Login
        </Button>
      </form>
    </main>
  )
}
