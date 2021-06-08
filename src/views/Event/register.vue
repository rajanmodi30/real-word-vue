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
  data() {
    return {
      unsavedChanges: true,
    };
  },
  beforeRouteLeave() {
    if (this.unsavedChanges) {
      const answer = window.confirm(
        "do you want to go? it has unsaved changes"
      );
      if (!answer) {
        return false;
      }
    }
  },
};
</script>
