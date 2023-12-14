import axios from 'axios'

/**
 * get a value by a key from local storage
 *
 * @param key
 * @returns
 */
export function getlocal(key) {
  const value = window.localStorage.getItem(key)

  return value
}

/**
 * set a value to local storage
 *
 * @param key
 * @returns
 */
export function setlocal(key, val) {
  window.localStorage.setItem(key, val)
}

/**
 * remove a value from local storage
 *
 * @param key
 * @returns
 */
export function removelocal(key) {
  window.localStorage.removeItem(key)
}

/**
 * removes the user from the fron-end and log him out from the backend
 *
 * @returns
 */
export async function logoutUserFromWindow() {
  const token = getlocal('token')

  await axios.post(
    'http://127.0.0.1:8000/api/logout',
    {},
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }
  )

  removelocal('token')
}
