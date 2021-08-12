import { RouteMeta, RouteRecordRaw } from 'vue-router';

interface Meta extends RouteMeta {
  access?: string[];
  title: string;
  showInMenu?: boolean;
}

// constraint custom route and meta property
type AppRouteRecordRaw = RouteRecordRaw & {
  children?: AppRouteRecordRaw[],
  hidden?: boolean;
  meta: Meta
}

const routes: AppRouteRecordRaw[] = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../layout.vue'),
    redirect: { name: 'home' },
    meta: {
      title: 'layout',
    },
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../App.vue'),
        meta: {
          title: 'home'
        }
      }
    ]
  }
];

export default routes; 