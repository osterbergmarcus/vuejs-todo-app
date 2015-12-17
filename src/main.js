import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)


export var router = new VueRouter()

router.map({
  '/App': {
    component: App
  }
})

router.redirect({
  '*': '/App'
})

router.start(App, '#app')
