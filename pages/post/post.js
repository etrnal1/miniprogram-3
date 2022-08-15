// pages/post/post.js
// 一个页面从创关键到卸载同样会经历五个周期
//加载 显示 渲染 隐藏 卸载
//onLoad onShow onReady
//MINA
// 将模块引入post.js 中，模块对象赋值给dataObj
//引用文件扩展名js 不能用绝对路径 只在该文件使用
// var dataObj=require("../../data/data.js")
var DBPost=require("../../db/DBPost.js").DBPost;
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
    imglist:[
      "https://scpic.chinaz.net/files/pic/pic9/202101/apic30145.jpg",
      "https://scpic.chinaz.net/files/pic/pic9/202009/apic27858.jpg",
      "https://scpic.chinaz.net/files/pic/pic9/201803/wpic078.jpg"
    ]
  },
  onTapToDetail:function(event){
    var postId=event.currentTarget.dataset.postId;
    console.log(event)
    wx.navigateTo({
      url:"../post-detail/post-detail?id="+postId,
      //url: '../post/post-detail/post-detail',
    })
    console.log('-----跳转成功'+postId)
  },

  /**
   * 生命周期函数--监听页面加载
   * 页面只会调一次
   */
  onLoad:function() {
    // old data
      // this.setData({
      //   postList:dataObj.postList
       
      // })
      // new data
      var dbPost=new DBPost();
      this.setData({
        postList:dbPost.getAllPostData()
       
      })

      console.log("onLoad:  "+this.postList)
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
    wx.clearStorageSync();
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