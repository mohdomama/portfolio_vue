import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Blog from '@/components/Blog'
import Downloads from '@/components/Projects'
import Resume from '@/components/Resume'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Downloads
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
