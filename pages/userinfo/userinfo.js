// pages/userinfo/userinfo.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/index';
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userinfo:'',
      columns:['北京','上海','郑州']
  },
showuser(){
    // console.log('show userinio')
    let info=wx.getStorageSync('token')
    // console.log(info)
    this.setData({
      userinfo:info
    })
},
  onChange(event){
    const {picker,value,index }= event.detail
    console.log(event.deltail)
    Toast(`当前值:${value},当前索引${index}`);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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