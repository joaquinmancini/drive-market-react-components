import { Button } from '../button/Button'
import './header.css'

type User = {
  name: string
}

export interface HeaderProps {
  user?: User
  onLogin?: () => void
  onLogout?: () => void
  onCreateAccount?: () => void
  className?: string
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  className
}: HeaderProps) => (
  <header
    className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md p-4 ${className}`}
  >
    <div className='storybook-header'>
      {/* Lo usamos momentaneamente para simular el cambio de mobil a desktop */}
      <div className=' text-red-400 sm:text-black'>
        <svg
          width='32'
          height='32'
          viewBox='0 0 32 32'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g fill='none' fillRule='evenodd'>
            <path
              d='M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z'
              fill='#FFF'
            />
            <path
              d='M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z'
              fill='#555AB9'
            />
            <path
              d='M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z'
              fill='#91BAF8'
            />
          </g>
        </svg>
        <h1>Drive Market</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className='welcome'>
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size='small' onClick={onLogout} label='Log out' />
          </>
        ) : (
          <>
            <Button size='small' onClick={onLogin} label='Log in' />
            <Button
              primary
              size='small'
              onClick={onCreateAccount}
              label='Sign up'
            />
          </>
        )}
      </div>
    </div>
  </header>
)
