import CheckAuth from "../../utils/auth"
import Toast from "../../miniprogram_npm/@vant/weapp/toast/toast";
// import Dialog from "../../miniprogram_npm/@vant/weapp/dialog/dialog";
// Dialog.alert({
//   title: '标题',
//   message: '弹窗内容',
// }).then(() => {
//   console.log('close')
//   // on close
// })


// pages/scroll_view/scroll_view.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    columns:['北京','上海','深圳','河南','广东']

  },
  onChange(event) {
    const { picker, value, index } = event.detail;
    // Toast(`当前值：${value}, 当前索引：${index}`);
    Toast(`当前值：${value}, 当前索引：${index}`);
  },


  // onChange(event){
  //   const {picker,value,index }= event.detail
  //   console.log(event.deltail)
  //   // Toast(`当前值:${value},当前索引${index}`);
  // },

  /**
   * 
   */
  handleAdd(){
    CheckAuth(()=>{
      console.log('准备一切工作')
    })
    
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
    console.log(wx.getStorageSync('token'))

   
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