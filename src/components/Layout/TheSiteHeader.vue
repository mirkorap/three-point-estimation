<template>
  <v-app-bar
      app
      color="primary"
      dark>
    <div class="d-flex align-center">
      <v-img
          class="shrink mr-2"
          contain
          src="@/assets/logo.svg"
          transition="scale-transition"
          width="180">
      </v-img>
    </div>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'TheSiteHeader',
  };
</script>

<style scoped>

</style>
