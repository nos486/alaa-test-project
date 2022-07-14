import {axios} from "boot/axios";


export function login(context, data) {
  return new Promise((resolve, reject) => {
    axios.post("/login", data).then((response) => {
      console.log(response.data.data.user)
      context.commit("setUser", response.data.data.user)
      context.commit("setAccessToken", response.data.data.access_token)
      resolve(response.data);
    }).catch(err => {
      reject(err);
    })
  })
}

export function logout(context, data) {
  //todo check with server
  context.commit("setAccessToken", "")
}

export function getProfile(context, userId) {
  return new Promise((resolve, reject) => {
    axios.get("/user/" + userId).then((response) => {
      context.commit("setUser", response.data.data)
      resolve(response.data.data);
    }).catch(err => {
      reject(err);
    })
  })
}

export function updateProfile(context, {id, data}) {
  return new Promise((resolve, reject) => {
    axios.put("/user/" + id, data).then((response) => {
      resolve(response.data);
    }).catch(err => {
      reject(err);
    })
  })
}


export function getUserFormData(context) {
  return new Promise((resolve, reject) => {
    axios.get("/megaroute/getUserFormData").then((response) => {
      context.commit("setUserFormData", response.data.data)
      resolve(response.data.data);
    }).catch(err => {
      reject(err);
    })
  })
}
