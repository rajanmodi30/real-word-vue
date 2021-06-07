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

export default {
  name: "EventLayout",
  props: ["id"],
  created() {
    eventService
      .getEvent(this.id)
      .then((response) => {
        this.eventObject = response.data;
        console.log(this.eventObject);
      })
      .catch((error) => {
        console.log("error", error);
        this.$router.push({
          name: "notFound",
          params: { resource: "event" },
        });
      });
  },
  data() {
    return { eventObject: null };
  },
};
</script>
