// pages/post-detail/post-detail.js
// var DBPost=require("../../db/DBPost.js").DBPost;
import { DBPost } from '../../db/DBPost.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    post:'',
    collectionStatus:'',
    dbPost:''
  },

 
 
  onCommentTap(){
    wx.showToast({
      title:"测试评论事件"
    })
    // wx.navigateTo({
    //   url:"../post-comment/post-comment",
    // })
    // console.log('跳转评论页面')
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
      //存储数据
       this.setData({
         post:postData.data,
         dbPost:dbPost
       })
       console.log(this.data.post)

  },
   /**
   * 文章点赞功能
   * @param {*} event 
   */
    onUpTap:function(event){
      // wx.showToast({
      //   'title':'测试转发事件'
      // })
      var newData=this.data.dbPost.collect();
      console.log(newData)
      // var newData=this.dbPost.up();
      // this.setData({
      //   'post.upStatus':newDaata.upStatus,
      //   'post.upNum':newData.upNum
      // })
    }
    ,
  test(event){
    var newData=this.dbPost.collect();
    console.log(newData)
    // wx.showToast({
    //   title:"测试转发事件"
    // })
    // console.log('测试收藏事件')
    // wx.showToast({
    //   'title':'点赞成功',
    //   duration:1000,
    //   icon:"success",
    //   mask:true

    // })
    // this.setData({
    //   collectionStatus:true
    // })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log('----------*****')
    console.log(this.postData)
    console.log('----------*****')
    wx.setNavigationBarTitle({
     
      title: this.data.post.title,
      success: (result)=>{
        console.log('设置标题成功')
      },
      fail: ()=>{
        console.log('设置标题失败')
      },
      complete: ()=>{}
    });
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