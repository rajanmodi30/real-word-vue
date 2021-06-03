<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
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

export default {
  name: "Home",
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
          id: 123,
          category: "animal welfare",
          title: "Cat Adoption day",
          description: "Find you animal",
          location: "Meow Town",
          date: "January 15 1998",
          time: "12:00",
          petsAllowed: true,
          organizor: "Ket Lee",
        },
      ],
    };
  },
};
</script>
