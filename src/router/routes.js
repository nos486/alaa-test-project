
const routes = [
  {
    path: '/',
    component: () => import('layouts/UnauthorizedLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/UnauthorizedLayout.vue'),
    children: [
      { path: '', name : "Login", component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '/home',
    component: () => import('layouts/AuthorizedLayout.vue'),
    children: [
      { path: '',name : "Home", component: () => import('pages/Home.vue') }
    ]
  },
  {
    path: '/profile',
    component: () => import('layouts/AuthorizedLayout.vue'),
    children: [
      { path: '', name : "Profile", component: () => import('pages/Profile.vue') }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]



export default routes
