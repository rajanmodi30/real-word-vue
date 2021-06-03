<template>
  <div class="home">
    <h1>Events For Good</h1>
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
    ></EventCard>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import eventService from "@/services/eventService.js";

export default {
  name: "EventsList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    };
  },
  created() {
    eventService
      .getEvents()
      .then((data) => {
        this.events = data.data;
        console.log("data", data.data);
      })
      .catch((error) => {
        console.log("error", error);
        alert("could not fetch data");
      });
  },
};
</script>
