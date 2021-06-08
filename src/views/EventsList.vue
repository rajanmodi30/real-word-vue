<template>
  <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
  <router-link
    :to="{ name: 'EventsList', query: { page: page + 1 } }"
    v-if="hasNextPage"
  >
    Next
  </router-link>
  <router-link
    :to="{ name: 'EventsList', query: { page: page - 1 } }"
    v-show="page > 1"
  >
    Prev
  </router-link>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import eventService from "@/services/eventService.js";
import NProgress from "nprogress";
export default {
  name: "EventsList",
  props: ["page"],
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
      pagelimit: 5,
      currentPageEvent: 0,
    };
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    NProgress.start();
    next((comp) => {
      eventService
        .getEvents(comp.pagelimit, parseInt(routeTo.query.page) || 1)
        .then((data) => {
          comp.events = data.data;
          comp.currentPageEvent = data.headers["x-total-count"];
          console.log("data", data.data);
        })
        .catch((error) => {
          console.log("error", error);
          next({ name: "notFound", params: { resource: "no internet" } });
        })
        .finally(() => {
          NProgress.done();
        });
    });
  },
  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.currentPageEvent / 2);
      return this.page < totalPages;
    },
  },
};
</script>
