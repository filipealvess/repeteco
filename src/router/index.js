import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = () => import('../views/Home.vue');
const MatchDetails = () => import('../views/MatchDetails.vue');
const NotFound = () => import('../views/NotFound.vue');

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/match/:id',
      component: MatchDetails,
      props: route => {
        const matchID = Number.parseInt(route.params.id);
        const idIsInteger = Number.isInteger(matchID);

        return idIsInteger ? { id: matchID } : { id: -1 };
      }
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});

export default router;
