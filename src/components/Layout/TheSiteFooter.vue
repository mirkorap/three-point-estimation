<template>
  <v-footer class="font-weight-medium mt-8">
    <v-row class="text-center hidden-xs-only">
      <v-col cols="12">
        {{ new Date().getFullYear() }} —
        <a
            href="https://github.com/mirkorap/three-point-estimation"
            rel="noopener"
            target="_blank">
          <strong>Three-point Estimation</strong>
        </a>
      </v-col>
    </v-row>

    <v-bottom-navigation
        :value="true"
        app
        background-color="primary"
        class="hidden-sm-and-up"
        color="white"
        fixed
        grow>
      <v-btn
          v-for="link in links"
          :key="link.name"
          :title="link.text"
          :to="{ name: link.name }">
        <v-icon>{{ link.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-footer>
</template>

<script>
  export default {
    name: 'TheSiteFooter',
    data() {
      return {
        links: [
          { name: 'home', text: 'Homepage', icon: 'mdi-home' },
          { name: 'how-it-works', text: 'How it works', icon: 'mdi-information' },
          { name: 'about-me', text: 'About me', icon: 'mdi-contacts' },
        ],
      };
    },
  };
</script>

<style scoped>

</style>
