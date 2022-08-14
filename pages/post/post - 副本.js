// pages/post/post.js
// 一个页面从创关键到卸载同样会经历五个周期
//加载 显示 渲染 隐藏 卸载
//onLoad onShow onReady
//MINA
var dataObj=require("../../data/data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:"2022-08-14",
    title:"小时候的冰棍与雪糕",
    postImg:"",
    avatar:"",
    content:"冰棍与雪糕绝对不是同一个东西，3到五毛的雪糕犹如现在的哈根达斯，时过境迁",
    readingNum:92,
    collectionNum:108,
    commentNum:7,
    imglist:[
      "https://scpic.chinaz.net/files/pic/pic9/202101/apic30145.jpg",
      "https://scpic.chinaz.net/files/pic/pic9/202009/apic27858.jpg",
      "https://scpic.chinaz.net/files/pic/pic9/201803/wpic078.jpg"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   * 页面只会调一次
   */
  onLoad(options) {

      this.setData({
        title:"一根雪糕的经济原理"
      })
      console.log("onLoad:  一根雪糕的经济原理")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log("onReady:页面被等待")

  },

  /**
   * 生命周期函数--监听页面显示
   * 每次打开页面都触发
   */
  onShow() {
    console.log("on-show: 页面被显示")

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log("onHide:页面被隐藏")

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