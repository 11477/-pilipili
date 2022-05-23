import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/index/HomeView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/register/RegisterView'),
    meta:{
      unShowNav:true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/LoginView'),
    meta:{
      unShowNav:true
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "about" */ '../views/search/SearchView'),
    meta:{
      unShowNav:false,
      unShowSearch:true
    }
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "about" */ '../views/user/UserView')
  },
  {
    path: '/video/:VideoID',
    name: 'video',
    template: '<div>video</div>',
    component: () => import(/* webpackChunkName: "about" */ '../views/video/VideoView'),
    meta:{
      unShowNav:false,
    }
  },
  {
    path: '/upload/home',
    name: 'uploadHome',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/upload/UploadHome'),
    meta:{
      unShowNav:true
    },
  },
  {
    path: '/upload/frame',
    name: 'uploadFrame',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/upload/UploadFrame'),
    meta:{
      unShowNav:true
    },
  },
  {
    path: '/administrator',
    name: 'administrator',
    component: () => import(/* webpackChunkName: "about" */ '../views/administrator/AdminView'),
    meta:{
      unShowNav:true
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
