export function setUser(state, user) {
  state.userId = user.id
  state.user = user
  localStorage.setItem("userId", user.id)
}

export function setUserFormData(state, userFormData) {
  state.userFormData = userFormData
}

export function setAccessToken(state, accessToken) {
  state.accessToken = accessToken
  localStorage.setItem("accessToken", accessToken)
}
