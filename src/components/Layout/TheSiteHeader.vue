<template>
  <v-app-bar
      app
      class="d-flex justify-center d-sm-block"
      color="primary"
      dark>
    <div>
      <v-img
          class="shrink mr-2"
          contain
          src="@/assets/logo.svg"
          transition="scale-transition"
          width="180">
      </v-img>
    </div>
    <v-spacer></v-spacer>
    <div class="hidden-xs-only">
      <v-btn
          v-for="link in links"
          :key="link.name"
          :title="link.text"
          :to="{ name: link.name }"
          class="ma-2"
          text>
        {{ link.text }}
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'TheSiteHeader',
    data() {
      return {
        links: [
          { name: 'home', text: 'Homepage' },
          { name: 'how-it-works', text: 'How it works' },
          { name: 'about-me', text: 'About me' },
        ],
      };
    },
  };
</script>

<style scoped>

</style>
