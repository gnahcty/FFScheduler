import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/DefaultLayout.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
          meta: {
            title: '首頁'
          }
        },
        {
          path: '/login',
          name: 'login',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "login" */ '@/views/LoginView.vue'),
          meta: {
            title: '登入'
          }
        },
        {
          path: '/register',
          name: 'register',
          component: () => import(/* webpackChunkName: "login" */ '@/views/RegisterView.vue'),
          meta: {
            title: '註冊'
          }
        },
        {
          path: '/playing',
          name: 'now playing',
          component: () => import(/* webpackChunkName: "playing" */ '@/views/NowPlaying.vue'),
          meta: {
            title: '片單'
          }
        },
        {
          path: '/details',
          name: 'film details',
          component: () => import('@/views/FilmDetails.vue'),
          meta: {
            title: '電影簡介'
          }
        },
        {
          path: '/calendar',
          name: 'calendar',
          component: () => import('@/views/CalendarView.vue'),
          meta: {
            title: '場次'
          }
        },
        {
          path: '/favorites',
          name: 'favorites',
          component: () => import('@/views/LikedFilms.vue'),
          meta: {
            title: '收藏'
          }
        },
        {
          path: '/scheduler',
          name: 'scheduler',
          component: () => import('@/views/SchedulerView.vue'),
          meta: {
            title: '排程'
          }
        }
      ]
    }
  ]
})

export default router
