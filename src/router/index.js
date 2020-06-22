import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/txnews',
    name: 'txnews',
    component:()=>import('../views/TxNews'),
    children:[
      {
        path:'/',
        name:'yaowen',
        component:()=>import('../views/TxNewsView/yaowen')
      },
      {
        path:'/txnews/shiping',
        name:'shiping',
        component:()=>import('../views/TxNewsView/shiping')
      },
      {
        path:'/txnews/guangdong',
        name:'guangdong',
        component:()=>import('../views/TxNewsView/guangdong')
      },
      {
        path:'/txnews/kangyi',
        name:'kangyi',
        component:()=>import('../views/TxNewsView/kangyi')
      },
      {
        path:'/txnews/tuijian',
        name:'tuijian',
        component:()=>import('../views/TxNewsView/tuijian')
      },
      {
        path:'/txnews/yule',
        name:'yule',
        component:()=>import('../views/TxNewsView/yule')
      },
      {
        path:'/txnews/tiyu',
        name:'tiyu',
        component:()=>import('../views/TxNewsView/tiyu')
      },
      {
        path:'/txnews/youxi',
        name:'youxi',
        component:()=>import('../views/TxNewsView/youxi')
      },
      {
        path:'/txnews/junshi',
        name:'junshi',
        component:()=>import('../views/TxNewsView/junshi')
      }
    ]
  },
  {
    path:'/txvideo',
    name:'txvideo',
    component:()=>import('../views/TxVideo')
  },
  {
    path:'/txhot',
    name:'txhot',
    component:()=>import('../views/TxHot')
  },
  {
    path:'/txperson',
    name:'person',
    meta:{
      isLogin:true
    },
    component:()=>import('../views/TxPerson')
  },
  {
    path:'/txlogin',
    name:'TxLogin',
    component:()=>import('../views/TxLogin')
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass:'active',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.matched.some(res=>res.meta.isLogin)){
    if(sessionStorage.getItem('txuser')){
      next()
    }else{
      next('/txlogin')
    }
  }else{
    next()
  }
});

export default router
