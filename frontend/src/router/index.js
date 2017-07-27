import Vue from 'vue';
import Router from 'vue-router';

import Hello from '@/components/Hello';

import Intro from '@/components/Intro';
import IntroGroup from '@/components/IntroGroup';
import IntroMember from '@/components/IntroMember';

import Post from '@/components/Post';
import PostKey from '@/components/PostKeyword';
import Show from '@/components/PostShow';

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
    },
    {
      path: '/post/:month',
      name: 'PostKey',
      component: PostKey,
    },
    {
      path: '/post/:month/:id',
      name: 'Show',
      component: Show,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
