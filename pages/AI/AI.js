// pages/AI/AI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    guideList:[
      '北京天气',
      '图片回复',
      '你在干嘛'
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.getSystemInfo({
      success:res=>{
        console.log('systeminfo ----------')
        console.log(res.system)
       
        let isIos=res.system.indexOf("iOS") >-1;
        
        let navHeight=0;
        if(!isIos){
           console.log('未找到')
            navHeight=48;
        }else{
          console.log(isIos)
           console.log('该操作系统是ios 系统')
            navHeight=44;
        }
        this.setData({
          status:res.statusBarHeight,
          navHeight:navHeight,
          statusBarHeight:res.statusBarHeight+navHeight
        });
      }


    });
    console.log('---------hello')
   
  },
    goBackHome: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  //当使用小程序和微信聊天的时候 返回的对话内容
  getQueryCallback: function (e) {
    console.log(e.detail);
  },


  // getQueryCallback回调 返回query与结果
  // getQueryCallback: function (e) {
  //   var listData = this.data.listData
  //   listData.push(e.detail)
  //   if (listData.length === 10) {
  //     wx.navigateTo({
  //       url: '../newsPage/newsPage',
  //     })
  //   }
  // },
  // goBackHome回调 返回上一级页面
  goBackHome: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log('---------hello')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})