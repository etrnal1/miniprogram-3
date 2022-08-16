// pages/post-detail/post-detail.js
// var DBPost=require("../../db/DBPost.js").DBPost;
import { DBPost } from '../../db/DBPost.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
    post:''
  },

  /**
   * 生命周期函数--监听页面加载
   * 实例化PostId,使用this.dbPost即可引用这个对象
   */
  onLoad(options) {

     
      var postId=options.id;
      console.log("文章id: "+postId)
      var dbPost=new DBPost();
      
      var func=dbPost.test(postId);
      var postData=dbPost.getPostItemById(postId);
     // console.log(dbPost)
     // console.log("----------下面为函数方法---------------")
      console.log(func)
      console.log(postData)
      //存储数据
       this.setData({
         post:postData
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