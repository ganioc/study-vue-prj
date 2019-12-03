import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Help from '@/components/Help'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }

  ]
})
