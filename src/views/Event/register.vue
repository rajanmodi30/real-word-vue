<template>
  <div>Register Here</div>
  <button @click="register">Click To Register</button>
</template>

<script>
export default {
  name: "registerEvent",
  methods: {
    register() {
      this.$router.push({
        name: "details",
      });
    },
  },
};
</script>
