import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../layout.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../App.vue')
      }
    ]
  }
];

export default routes; 