import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../pages/Home.vue"),
    },
    {
      path: "/post",
      component: () => import("../pages/OpenedPost.vue"),
    },
    {
      path: "/profile/:id",
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
  ],
});

export default router;
