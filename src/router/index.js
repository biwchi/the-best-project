import { createRouter, createWebHistory } from "vue-router";
import { routeNames } from "./routeNames";
import { auth } from "../firebase/config"
import { onAuthStateChanged } from "firebase/auth"
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/auth",
      name: routeNames.SignIn,
      component: () => import("../pages/Authentication.vue"),
      redirect: { name: routeNames.Login },
      children: [
        {
          path: "/login",
          name: routeNames.Login,
          component: () => import('../components/Login.vue')
        },
        {
          path: "/Register",
          name: routeNames.Register,
          component: () => import('../components/Register.vue')
        },
      ]
    },
    {
      path: "/layout",
      name: routeNames.Layout,
      component: () => import("../pages/Main.vue"),
      redirect: { name: routeNames.Home },
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "/",
          name: routeNames.Home,
          component: () => import("../pages/Home.vue")
        },
        {
          path: "/profile/:userId",
          name: "profile",
          component: () => import("../pages/ProfileView.vue"),
          children: [
            {
              path: "posts/:post",
              name: "profilePost",
              component: () => import("../pages/ProfilePostsView.vue"),
            },
          ],
        },
      ]
    },
  ],
});

function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach( async (to) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (requiresAuth && !(await getCurrentUser())) {
    return '/auth'
  }
})

export default router;