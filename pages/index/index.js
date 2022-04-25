// index.js
// 获取应用实例
// import reques from "../utils/request.js"   
const app = getApp()

Page({
  data: {
    option1: [
      { text: '正在热映', value: 0 },
     
      { text: '即将上映', value: 2 },
      
    ],
    option2: [
      { text: '默认排序', value: 'a' },
      { text: '距离排序', value: 'b' },
      { text: '热点排序', value: 'c' }
    ],
    options3:[
      {text:'选择地区',value:'a'},
      {text:'选择地区',value:'a'},
      {text:'选择地区',value:'a'}
    ],
    value4:'',
    value1: 0,
    value2: 'a',
    value3:  'k',
    message:'binggo',
    movieurl:'',
    datalist:'',
    movielist:'',
    weibo:'我的微博',
    movie:'',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  /**
   * 触发点击事件
   */
  dropdwon(evt){
    console.log(evt.detail)
    this.setData({
      value4:evt.detail
    })
    if (evt.detail=='2'){
      console.log('即将上映')
      wx.request({
        url:"https://m.maoyan.com/ajax/comingList?ci=10&token=&limit=10",
        success: ( res)=>{
         console.log(res.data)
          this.setData({
            movielist:res.data.coming
          })

        },
        faile:( )=>{

        }
      })
    }else{
     
      wx.request({
        url:"https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4",
        success: ( res)=>{
         console.log(res.data)
          this.setData({
            movielist:res.data.data.hot
          })

        },
        faile:( )=>{

        }
      })
     

    }
  },

   //点击触发事件
  //  hit(evt){
  //   //  console.log('hello')
  //   //  console.log(evt)
   
  //    wx.request({
  //      url: 'https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4',
  //      success: (res)=> {
  //        console.log(res.data.data.hot)
  //        this.setData({
  //          datalist:res.data.data.hot
  //        })
  //      }
  //      ,
  //      fail:()=>{
  //        console.log(fail)
  //      }
  //    })
  //  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },


  handleEvent(){
    console.log('搜索关键字')
  }
  ,
  onPullDownRefresh:function()
{
  console.log('下拉出发')
}
  ,
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  onReady(){
    console.log(this.data.option1.value)
    console.log(this.data.option1['value'])
    wx.request({
      url: 'https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4',
      success: (res)=> {
        console.log(res.data.data.hot)
        this.setData({
          movielist:res.data.data.hot
        })
      }
      ,
      fail:()=>{
        console.log(fail)
      }
    })
    // wx.request({
    //   url:'https://i.maoyan.com/ajax/mostExpected?limit=10&offset=0&token=&optimus_uuid=146A2E60C39111ECB9D91741925E401CA020890587F24CCC89FB226E33E26FEA&optimus_risk_level=71&optimus_code=10',
    //   // url: 'us_uuid=146A2E60C39111ECB9D91741925E401CA020890587F24CCC89FB226E33E26FEA&optimus_risk_level=71&optimus_code=10',
    //   success: (res)=> {
    //     console.log(res)
    //     console.log(res.data)
    //     console.log('数据展示')
    //     let comming = res.data.comming
    //     // console.log(res['success'])
    //     // console.log(res.data['comming'])
    //
    //     // console.log(res.data)
    //     // console.log(res.coming)
    //     this.setData({
    //       movielist:comming
    //     })
    //   }
    //   ,
    //   fail:()=>{
    //     console.log('this is fail')
    //   }
    // })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  // 点击跳转视频地址
  clickvideo(e){
    console.log(this.data.movielist)
    console.log(e)
    console.log("--------")
    console.log(e.currentTarget.dataset.smile)  
    let index =e.currentTarget.dataset.smile
    let movie = this.data.movielist
    console.log(movie[0])
    console.log(movie[0]['videourl'])
    this.setData({
      movieurl:movie[index]['videourl']
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
