import Vue from 'vue'
import Router from 'vue-router'
import Pais from '@/components/Pais'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/pais',
      name: 'pais',
      component: Pais
    }

  ]
})