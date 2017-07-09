import Vue from 'vue';
import Router from 'vue-router';

import Hello from '@/components/Hello';

import Intro from '@/components/Intro';
import IntroGroup from '@/components/IntroGroup';
import IntroMember from '@/components/IntroMember';

import Login from '@/components/Login';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/intro',
      name: 'Intro',
      component: Intro,
      children: [
        {
          path: '/intro/group',
          name: 'IntroGroup',
          component: IntroGroup,
        },
        {
          path: '/intro/member',
          name: 'IntroMember',
          component: IntroMember,
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
