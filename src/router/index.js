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
          path: '/categories',
          name: 'categories',
          component: () => import(/* webpackChunkName: "categories" */ '@/views/CategoryList.vue'),
          meta: {
            title: '影展單元'
          }
        },
        {
          path: '/categories/:name',
          name: 'categories_:name',
          component: () =>
            import(/* webpackChunkName: "categories" */ '@/views/CategoryDetail.vue'),
          meta: {
            title: '影展單元'
          }
        },
        {
          path: '/details/:id',
          name: 'film details',
          component: () => import('@/views/FilmDetails.vue'),
          meta: {
            title: '電影簡介'
          }
        },
        {
          path: '/calendar/:date',
          name: 'calendar',
          component: () => import('@/views/EventCalendar.vue'),
          meta: {
            title: '場次'
          }
        },
        {
          path: '/favorites',
          name: 'favorites',
          component: () => import('@/views/WatchList.vue'),
          meta: {
            title: '收藏'
          }
        },
        {
          path: '/scheduler',
          name: 'scheduler',
          component: () => import('@/views/UserScheduler.vue'),
          meta: {
            title: '排程'
          }
        },
        {
          path: '/export',
          name: 'export',
          component: () => import('@/views/ExportList.vue'),
          meta: {
            title: '匯出'
          }
        },
        {
          path: '/:pathMatch(.*)*',
          name: 'NotFound',
          component: () => import('@/views/ExportList.vue')
        }
      ]
    }
  ]
})
router.afterEach((to) => {
  document.title = to.meta.title
})
export default router
