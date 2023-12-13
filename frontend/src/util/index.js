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
