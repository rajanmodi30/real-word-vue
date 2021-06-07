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
  >
    OOPS! {{ resource }} Not Found
  </div>
</template>
<script>
export default {
  name: "notFound",
  props: {
    resource: {
      type: String,
      require: true,
      default: "page",
    },
  },
};
</script>
