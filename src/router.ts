import Vue from 'vue';
import Router from 'vue-router';
import CategoryPage from '@/views/pages/category/category.vue';
import PageNotFound from '@/views/pages/404/404.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'front-page',
      component: CategoryPage,
      meta: {
        title: 'TBB | Category',
      },
    },
    {
      path: '**',
      name: '404',
      component: PageNotFound,
      meta: {
        title: 'TBB | 404',
      },
    },
  ],
});
