<template>
  <div class="event-details" v-if="eventObject">
    Event
    <span
      >@ {{ eventObject.time }} on {{ eventObject.date }} By
      {{ eventObject.location }}</span
    >
    <h2>{{ eventObject.title }}</h2>
    <br />
  </div>
</template>

<script>
import eventService from "@/services/eventService.js";

export default {
  name: "EventDetails",
  props: ["id"],
  created() {
    eventService
      .getEvent(123)
      .then((response) => {
        this.eventObject = response.data;
        console.log(this.eventObject);
      })
      .catch((error) => {
        console.log("error", error);
      });
  },
  data() {
    return { eventObject: null };
  },
};
</script>

<style scoped>
.event-details {
  padding: 20px;
  cursor: pointer;
  margin-bottom: 18px;
  margin: auto;
  width: 50%;
}
</style>
