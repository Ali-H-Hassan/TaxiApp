export function getlocal(key) {
  const value = window.localStorage.getItem(key)

  return value
}

export function setlocal(key, val) {
  window.localStorage.setItem(key, val)
}

export function removelocal(key) {
  window.localStorage.removeItem(key)
}
