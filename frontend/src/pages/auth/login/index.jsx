import '../index.css'
import { Link } from 'react-router-dom'
import Input from '../../../components/input'
import Button from '../../../components/buttons'

export default function Index() {
  return (
    <main className="auth-page">
      <form className="auth-card">
        <h1 className="auth-card-title">Login</h1>

        <div className="auth-card-content">
          <Input
            label={'Email:'}
            placeHolder={'mohamad@gmail.com'}
            onChange={() => {}}
            type="email"
          />
          <Input
            label={'Password:'}
            placeHolder={'************'}
            onChange={() => {}}
            type="password"
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
