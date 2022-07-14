export default ({ router, store }) => {
  router.beforeEach((to, from, next) => {
    if (store.getters["userService/accessToken"] === "" && to.path !== "/login") {
      next({
        path: "/login",
      });
    } else {
      next()
    }
  });
}
