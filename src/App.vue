<template>
  <v-app>
    <the-site-header></the-site-header>
    <v-content>
      <router-view></router-view>
    </v-content>
    <the-site-footer></the-site-footer>
  </v-app>
</template>

<script>
  import TheSiteHeader from '@/components/Layout/TheSiteHeader.vue';
  import TheSiteFooter from '@/components/Layout/TheSiteFooter.vue';

  export default {
    name: 'App',
    components: {
      TheSiteHeader,
      TheSiteFooter,
    },
  };
</script>
