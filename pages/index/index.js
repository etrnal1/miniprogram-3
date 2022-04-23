// index.js
// 获取应用实例
// import reques from "../utils/request.js"   
const app = getApp()

Page({
  data: {
    "title":'健康宝',
    "bigtitle":'大状态检查',
    motto: 'Hello Xueyue',
    message:'binggo',
    datalist:'',
    weibo:'我的微博',
    movie:'',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
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
    wx.request({
      url: 'https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4',
      success: (res)=> {
        console.log(res.data.data.hot)
        this.setData({
          datalist:res.data.data.hot
        })
      }
      ,
      fail:()=>{
        console.log(fail)
      }
    })
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
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
