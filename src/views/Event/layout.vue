<template>
  <div
    class="
      py-8
      px-8
      max-w-sm
      mx-auto
      bg-white
      rounded-xl
      shadow-md
      space-y-2
      sm:py-4
      sm:flex
      sm:items-center
      sm:space-y-0 sm:space-x-6
      float-center
    "
    v-if="eventObject"
  >
    <router-link :to="{ name: 'details' }">Details</router-link>|
    <router-link :to="{ name: 'register' }">Register</router-link>|
    <router-link :to="{ name: 'edit' }">Edit</router-link>

    <router-view :eventObject="eventObject" />
  </div>
</template>

<script>
import eventService from "@/services/eventService.js";
import NProgress from "nprogress";

export default {
  name: "EventLayout",
  props: ["id"],
  beforeRouteEnter(routeTo, routeFrom, next) {
    NProgress.start();
    next((comp) => {
      eventService
        .getEvent(comp.id)
        .then((response) => {
          comp.eventObject = response.data;
          console.log(comp.eventObject);
        })
        .catch((error) => {
          console.log("error", error);
          next({
            name: "notFound",
            params: { resource: "event" },
          });
        })
        .finally(() => {
          NProgress.done();
        });
    });
  },
  data() {
    return { eventObject: null };
  },
};
</script>
