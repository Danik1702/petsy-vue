import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/Home.vue'
import BreadsView from '../views/Breads.vue'
import CareCheckView from '../views/CareCheck.vue'
import ComparisonView from '../views/Comparison.vue'
import FilterView from '../views/Filter.vue'
import { ROUTES } from '@/constants'

const routes = [
  {
    path: '/',
    name: ROUTES.home,
    component: HomeView,
  },
  {
    path: '/breads',
    name: ROUTES.breeds,
    component: BreadsView,
  },
  {
    path: '/care-check',
    name: ROUTES.careCheck,
    component: CareCheckView,
  },
  {
    path: '/comparison',
    name: ROUTES.comparison,
    component: ComparisonView,
  },
  {
    path: '/filter',
    name: ROUTES.filter,
    component: FilterView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
