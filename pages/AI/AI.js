// pages/AI/AI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist:[
      'lol'
    ],
    myname:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that = this;
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
        that.setData({
          status:res.statusBarHeight,
          navHeight:navHeight,
          statusBarHeight:res.statusBarHeight+navHeight
      })
        // this.setData({
         
        // });
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

    console.log("聊天时加载消息.........")
   
    console.log("-----------")
    console.log(e.detail);
    this.setData({
      myname: e.detail.data.answer,
      
  })
    
  },


  // getQueryCallback回调 返回query与结果
  // getQueryCallback: function (e) {
  //   var listData = this.data.listData
  //   listData.push(e.detail)
  //   if (listData.length === 10) {
  //     wx.navigateTo({
  //       url: '../components/newsPage/newsPage',
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
    console.log('我是下拉事件单')
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
    console.log('我是下拉事件单')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log('我是下拉事件单')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log('我是下拉事件单')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('我是上拉事件单')

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

    console.log('分享的时候触发')
  }
})