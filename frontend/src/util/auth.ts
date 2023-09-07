export const authToken = (): string | undefined => {
  return document.cookie.split(';').find(h => h.slice(0, 6) === 'token=')?.split('=')?.[1]
}

export const requireAuth = (): boolean => {
  if (authToken() !== undefined) {
    return true
  } else {
    window.location.replace('/login')
    return false
  }
}
