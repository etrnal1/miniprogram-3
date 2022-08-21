// pages/post-comment/post-comment.js
import {DBPost} from '../../db/DBPost.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comments:'',
    useKeyboradFlag:true,
    keyboardInputValue:'',
    sendMoreFlag:false,
    chooseFiles:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var options=options.id
    this.dbPost=new DBPost();
    var comments=this.dbPost.getCommentData(options);
    this.setData({
      comments:comments
    });
  },
/**
 * 点击发送照片
 */
  chose(){
    wx.chooseImage({
      count: 9,
      sizeType: ['original','compressed'],
      sourceType: ['album','camera'],
      success: (res)=>{
        console.log(res.tempFilePaths)
        this.setData({
          //图片的临时地址
          chooseFiles:res.tempFilePaths
        })
      },
      fail: ()=>{},
      complete: ()=>{}
    });
    console.log('选择照片')
  },
  switchInputType(){
    console.log("按住说话事件")
  },
  submitComment(){
    console.log('我是input 事件选项')
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },
  /**
   * 页面分享
   */
  onShareAppMessage:function(){
    return {
      title:'记忆里的春天',
      dec:'描述信息',
      path:"/pages/post-comment/post-comment"

    }
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