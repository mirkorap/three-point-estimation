import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import HowItWorks from '@/views/HowItWorks.vue';
import AboutMe from '@/views/AboutMe.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: 'how-it-works',
    name: 'how-it-works',
    component: HowItWorks,
  },
  {
    path: 'about-me',
    name: 'about-me',
    component: AboutMe,
  },
  {
    path: '*',
    redirect() {
      return { name: 'home' };
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
