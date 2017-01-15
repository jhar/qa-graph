import {
  GOOGLE_SIGN_IN,
  GOOGLE_SIGN_OUT
} from './constants'

export const googleSignIn = (result) => ({
  token: result.credential.accessToken,
  type: GOOGLE_SIGN_IN,
  user: result.user
})

export const googleSignOut = () => ({
  type: GOOGLE_SIGN_OUT
})
