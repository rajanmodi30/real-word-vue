<template>
  <router-link :to="{ name: 'EventDetails', params: { id: event.id } }">
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
    >
      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">
            Event @ {{ event.time }} on {{ event.date }}
          </p>
        </div>
      </div>
    </div>
    <br />
  </router-link>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: Object,
  },
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
