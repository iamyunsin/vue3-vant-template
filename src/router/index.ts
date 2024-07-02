import TabLayout from '@/layouts/TabLayout.vue';  
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: TabLayout,
    redirect: '/home',
    children: [
      { 
        path: '/home', 
        meta: {
          title: '首页',
          showTitle: true,
          showTab: true,
        },
        component: () => import('@/views/Home.vue') 
      },
      { 
        path: '/settings', 
        meta: {
          title: '设置',
          showTitle: true,
          showTab: true,
        },
        component: () => import('@/views/Home.vue') 
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;