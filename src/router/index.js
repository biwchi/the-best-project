import { createRouter, createWebHistory } from "vue-router";
import { routeNames } from "./routeNames";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: routeNames.SignIn,
      component: () => import("../pages/Authentication.vue")
    },
    {
      path: "/layout",
      name: routeNames.Layout,
      component: () => import("../pages/Main.vue"),
      redirect: {name: routeNames.Home},
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
          path: "/post",
          component: () => import("../pages/OpenedPost.vue"),
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


export default router;