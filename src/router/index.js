import { START_LOCATION, createRouter, createWebHashHistory } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import { useToast } from 'primevue/usetoast'
import { useListStore } from '@/stores/listStore'
import { useGeneralStore } from '@/stores/generalStore.js'

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
            title: '首頁',
            needAuth: false
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
            title: '登入',
            needAuth: false
          }
        },
        {
          path: '/register',
          name: 'register',
          component: () => import(/* webpackChunkName: "login" */ '@/views/RegisterView.vue'),
          meta: {
            title: '註冊',
            needAuth: false
          }
        },
        {
          path: '/categories',
          name: 'categories',
          component: () => import(/* webpackChunkName: "categories" */ '@/views/CategoryList.vue'),
          meta: {
            title: '影展單元',
            needAuth: false
          }
        },
        {
          path: '/categories/:name',
          name: 'categories_:name',
          component: () =>
            import(/* webpackChunkName: "categories" */ '@/views/CategoryDetail.vue'),
          meta: {
            title: '影展單元',
            needAuth: false
          }
        },
        {
          path: '/details/:id',
          name: 'film details',
          component: () => import('@/views/FilmDetails.vue'),
          meta: {
            title: '電影簡介',
            needAuth: false
          }
        },
        {
          path: '/calendar/:date',
          name: 'calendar',
          component: () => import('@/views/EventCalendar.vue'),
          meta: {
            title: '場次',
            needAuth: false
          }
        },
        {
          path: '/favorites',
          name: 'favorites',
          component: () => import('@/views/WatchList.vue'),
          meta: {
            title: '收藏',
            needAuth: true
          }
        },
        {
          path: '/scheduler',
          name: 'scheduler',
          component: () => import('@/views/UserScheduler.vue'),
          meta: {
            title: '排程',
            needAuth: true
          }
        },
        {
          path: '/:pathMatch(.*)*',
          name: 'NotFound',
          component: () => import('@/views/NotFound.vue'),
          meta: {
            title: 'OOPS!',
            needAuth: false
          }
        }
      ]
    }
  ]
})


router.afterEach((to) => {
  document.title = to.meta.title
})

router.beforeEach(async (to, from, next) => {
  const user = useUserStore()
  const list = useListStore()
  const state = useGeneralStore()

  if(!['/register', '/login','/favorites'].includes(to.path)){
    state.isLoading = true
  }

  // 進網站第一次路由跳轉時，確認是否有 token
  if (from === START_LOCATION) {
    await user.getProfile()
  }
  //  if user is logged in and going to register or login page, redirect to home page
  if (user.isLoggedIn && ['/register', '/login'].includes(to.path)) {
    useToast().add({ severity: 'success', summary: '已登入', detail: '', life: 1000 })
    next('/')
    // if user is not logged in and going to a page that requires login, redirect to login page
  } else if (!user.isLoggedIn && to.meta.needAuth) {
    useToast().add({ severity: 'error', summary: '錯誤', detail: '請先登入', life: 1000 })
    state.isLoading = true
    next('/login')
  } else {
    list.getList()
    next()
  }
})
export default router
