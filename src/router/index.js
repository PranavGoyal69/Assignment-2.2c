import { createRouter, createWebHistory } from 'vue-router'
import Menu from '../components/Menu.vue';
import Order from '../components/Order.vue';
import Reservation from '../components/Reservation.vue';
import Customer from '../components/Customer.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/reservation',
      name: 'reservation',
      component: Reservation
    },
    {
      path: '/customer',
      name: 'customer',
      component: Customer
    },
    {
      path: '/feedback',
      name: 'feedback',
      component:  () => import('../views/Feedback.vue')
    },
   
  ]
})

export default router
