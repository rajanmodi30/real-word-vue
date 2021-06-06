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
    <div class="text-center space-y-2 sm:text-left">
      <div class="space-y-0.5">
        <p class="text-lg text-black font-semibold">
          @ {{ eventObject.time }} on {{ eventObject.date }} By
          {{ eventObject.location }}
        </p>
        <p class="text-gray-500 font-medium">{{ eventObject.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import eventService from "@/services/eventService.js";

export default {
  name: "EventDetails",
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
      });
  },
  data() {
    return { eventObject: null };
  },
};
</script>
