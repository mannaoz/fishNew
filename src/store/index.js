import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex,VueAxios,axios)

export default new Vuex.Store({
  state: {
    TxSearchViewshow:false,
    TxContentViewshow:false,
    TxContentView:null,
    NewsList:null,
    HotList:null,
    imgacg:null,
    videolist:null,
    oneList:[
      {
        name:'要闻',
        link:'/txnews'
      },
      {
        name:'视频',
        link:'/txnews/shiping'
      },
      {
        name:'广东',
        link:'/txnews/guangdong'
      },
      {
        name:'抗疫',
        link:'/txnews/kangyi'
      },
      {
        name:'推荐',
        link:'/txnews/tuijian'
      },
      {
        name:'娱乐',
        link:'/txnews/yule'
      },
      {
        name:'体育',
        link:'/txnews/tiyu'
      },
      {
        name:'游戏',
        link:'/txnews/youxi'
      },
      {
        name:'军事',
        link:'/txnews/junshi'
      },
    ],
    pinlun:{},
    txuser:{
      name:'未登陆用户',
      paw:'未登陆用户'
    }
  },
  mutations: {
    settxuser(state,val){
      state.txuser=val
    },
    changeTxSearchViewShow(state){
      state.TxSearchViewshow=!state.TxSearchViewshow
    },
    changeTxContentViewShow(state,val){
      state.TxContentViewshow=!state.TxContentViewshow
      state.TxContentView=val;
      // console.log(state.TxContentView)
    },
    setNewsList(state,val){
      state.NewsList=val
    },
    setbdpinlun(state,val){
      state.pinlun=JSON.parse(val)
    },
    setpinlun(state,key){
      if(state.pinlun[key.title.title] instanceof Array){
        state.pinlun[key.title.title].push({
          txt:key.conent,
          person:state.txuser.name,
          date:new Date().toString()
        })
      }else{
        state.pinlun[key.title.title] = new Array()
        state.pinlun[key.title.title].push({
          txt:key.conent,
          person:state.txuser.name,
          date:new Date().toString()
        })
      }
      sessionStorage.setItem('pinlun',JSON.stringify(state.pinlun))
      // console.log(state.pinlun)
    }
  },
  actions: {
    setList(content){
      axios('/api/topnews').then(res=>{
        content.state.NewsList=res.data.T1348647853363
      });
      axios('/api/hotnews').then(res=>{
        content.state.HotList=res.data.T1467284926140
      });
      axios('/api/imgacg').then(res=>{
        content.state.imgacg=res.data
      })
      axios('/api/keve').then(res=>{
        content.state.videolist=res.data
      })
    }
  },
  modules: {
  }
})
