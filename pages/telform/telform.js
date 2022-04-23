// pages/telform/telform.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    telnumber:''
  },
fixName:function(){
  this.setData({
    show:True
  })
},
formSubmit:function(e){
  console.log(e)
},
onChange(evt){
  // 获取手机号信息 
  console.log(evt.detail)
  this.setData({
    telnumber:evt.detail
  })
},

submitForm(){
  console.log('确认手机号验证码')
  console.log('获取手机号------')
  console.log(this.data.telnumber)
  wx.setStorageSync('tel', this.data.telnumber)
},
// showPopup
showPopup(){
  this.setData({show:true})
},
onClose(){
  this.setData({show:false})
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