export default function () {
  return {
    userId: localStorage.getItem("userId") || "",
    user: {},
    accessToken: localStorage.getItem("accessToken") || "",
    userFormData: {}
  }
}


