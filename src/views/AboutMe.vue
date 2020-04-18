<template>
  <div class="mt-5 px-5">
    <v-row>
      <v-col cols="12">
        <h1 class="display-1 text-center">
          About me
        </h1>
      </v-col>
    </v-row>

    <v-row class="body-1">
      <v-col cols="12">
        <p>
          I have always considered programming primarily a passion rather than a job. On the other
          hand, this is the main reason that drives developers to learn new languages, new
          technologies and methodologies every day. Without this hunger for knowledge, it is not
          possible to reach high goals in this profession.
        </p>
        <p>
          My passion to date has led me to develop server-side web applications using technologies
          such as: PHP, MySQL, Symfony, Magento and WordPress, but I also like to experiment with
          other languages and technologies such as: JavaScript, Vue, Node, TypeScript and VB. I am a
          big supporter of the Agile methodology and of the principles present in the Manifesto,
          which have strongly inspired me in the creation of a series of books that well express (I
          hope) the advantages of adhering to these principles.
        </p>
        <p>
          I leave below the references to my social profiles to follow me in my next publications.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col
          v-for="(link, index) in links"
          :key="index"
          cols="12"
          sm="auto">
        <v-btn
            block
            color="primary"
            :href="link.url"
            outlined
            target="_blank">
          <v-icon>{{ link.icon }}</v-icon>
          {{ link.text }}
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: 'AboutMe',
    data() {
      return {
        links: [
          { url: 'https://github.com/mirkorap', text: 'Github', icon: 'mdi-github' },
          { url: 'https://www.linkedin.com/in/mirko-rapisarda', text: 'Linkedin', icon: 'mdi-linkedin' },
          { url: 'https://medium.com/@mirko.rapisarda', text: 'Medium', icon: 'mdi-alpha-m' },
        ],
      };
    },
  };
</script>

<style scoped>

</style>
