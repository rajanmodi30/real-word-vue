import { createRouter, createWebHistory } from "vue-router";
import EventsList from "@/views/EventsList.vue";
import notFound from "@/views/notFound.vue";
import EventDetails from "@/views/Event/details.vue";
import registerEvent from "@/views/Event/register.vue";
import editEvent from "@/views/Event/edit.vue";
import EventLayout from "@/views/Event/layout.vue";

const routes = [
  {
    path: "/",
    name: "EventsList",
    component: EventsList,
    props: (route) => ({
      page: parseInt(route.query.page) || 1,
    }),
  },
  {
    path: "/events/:id",
    name: "EventDetails",
    props: true,
    component: EventLayout,
    children: [
      {
        path: "",
        name: "details",
        component: EventDetails,
      },
      {
        path: "register",
        name: "register",
        component: registerEvent,
      },
      {
        path: "edit",
        name: "edit",
        component: editEvent,
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/:catchAll(.*)",
    component: notFound,
  },
  {
    path: "/404/:resource",
    name: "notFound",
    component: notFound,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
