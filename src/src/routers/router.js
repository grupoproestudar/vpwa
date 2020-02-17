import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/HomeView'
import Feedback from '@/views/FeedbackView'
import About from '@/views/AboutView'
import Contact from '@/views/ContactView'
import Group from '@/views/GroupListView'
import Mentoring from '@/views/MentoringView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/feedback/:id',
      name: 'feedback',
      component: Feedback
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/groups',
      name: 'groups',
      component: Group
    },
    {
      path: '/mentoring',
      name: 'mentoring',
      component: Mentoring
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
