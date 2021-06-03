<template>
  <div class="event-details"></div>
</template>

<script>
import { eventService } from "@services/eventService.js";

export default {
  name: "eventDetails",
  props:id,
    created() {
eventService.getEvent(id).then

    },
    data(){return eventDetail:null}
};
</script>
