<template>
  <router-link :to="{ name: 'EventDetails', params: { id: event.id } }">
    <div class="event-card">
      Event
      <span>@ {{ event.time }} on {{ event.date }}</span>
      <h2>{{ event.title }}</h2>
      <br />
    </div>
  </router-link>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: Object,
  },
  // data() {
  //   return {

  //   };
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.event-card {
  padding: 20px;
  cursor: pointer;
  border: 1px solid black;
  margin-bottom: 18px;
  margin: auto;
  width: 50%;
}
</style>
