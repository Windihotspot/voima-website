import AboutPage from '@/views/AboutPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import LandingPage from '@/views/LandingPage.vue'
import OurStory from '@/views/OurStory.vue'
import ServicesPage from '@/views/ServicesPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },
    {
      path: '/our-story',
      name: 'our-story',
      component: OurStory
    }
  ]
})

export default router
