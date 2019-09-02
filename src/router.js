import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Property from './views/Property.vue';
import News from './views/News.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
    	path: '/property',
    	name: 'property',
    	component: Property,
    },
    {
      path: '/news',
      name: 'news',
      component: News,
    }
  ],
});
