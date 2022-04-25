// pages/userinfo/userinfo.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/index';
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userinfo:'',
      columns:['北京','上海','郑州'],
      head:'',
      mach:''
  },
  /*
    请求服务器的状态测试
   */
  clickservice(){
    wx.request({
      'url':'https://api.etrnal.com/say/',
      success:(res)=>{
        console.log('服务器状态')
        console.log(res.data.data.Info)
        // console.log(res.data.info)
        this.setData({
         mach:{'data':'tengxun'}
        })
      },
      fail:(err)=>{
        console.log(err)
    }

    })
  },

  /*点击更换头像*/
  clickimg(){
    console.log("更换头像")
    wx.chooseImage({
      count:1,
      sizeType:['original','compressed'],
      sourceType:['album','camera'], //可以指定相册或相机
      success:(res) =>{
        console.log(res)
        console.log('-----------------------------')
        console.log(res.tempFilePaths)
        console.log('-----------------------------')

        this.setData({
          userinfo:{
            ...this.data.userinfo,
            avatarUrl:res.tempFilePaths[0]
          }
          // head:res.tempFilePaths
        })
        // let info=wx.getStorageSync('token')
        // console.log(info['avatarUrl'])
      //   wx.setStorageSync('','{
      //       ...wx.getStorageSync('token'),
      //       avatarUrl:tempFilePaths[0]
      //
      // })
        // info
        wx.setStorageSync('token',{
          ...wx.getStorageSync('token'),
          avatraUrl:res.tempFilePaths[0]
        })


      }

    })
  }


  ,
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
    this.showuser()
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