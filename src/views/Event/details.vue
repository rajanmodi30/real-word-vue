<template>
  <div class="text-center space-y-2 sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg text-black font-semibold">
        @ {{ eventObject.time }} on {{ eventObject.date }} By
        {{ eventObject.location }}
      </p>
      <p class="text-gray-500 font-medium">{{ eventObject.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventDetails",
  props: ["eventObject"],
};
</script>
