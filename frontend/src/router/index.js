import Vue from 'vue';
import Router from 'vue-router';

import Hello from '@/components/Hello';

import Intro from '@/components/Intro';
import IntroGroup from '@/components/IntroGroup';
import IntroMember from '@/components/IntroMember';

import Post from '@/components/Post';
import PostJuly from '@/components/PostJuly';
import PostNone from '@/components/PostNone';

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
      path: '/post',
      name: 'Post',
      component: Post,
      children: [
        {
          path: '/post/july',
          name: 'PostJuly',
          component: PostJuly,
        },
        {
          path: '/post/none',
          name: 'PostNone',
          component: PostNone,
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
