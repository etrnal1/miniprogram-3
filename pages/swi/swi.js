// pages/swi/swi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie:'',
    movies:[]
  },
  current:1,
  /**
   * 推荐接口
   */

  /**
   * 测试轮播图
   */
//    handleAjax(){
//     wx.request({
//       url: 'https://api.juooo.com/theatre/index/getTheatreBanner?theatre_id=16&version=6.1.68&referer=2',
//       success:(res)=> {
//         // this.setData({
//         //   datalist:res.data.data.hot
//         // })
//        this.setData({
//         movie:res.data.data
//        })
//       }
//     })

//  },

renderGoods(){
  wx.request({
    url: "https://api.juooo.com/Show/Search/getShowList?page=1&theatre_id=16&category=0&time=1650615707095&version=6.1.68&referer=1&sign=7e829ffe6573f34026f6f39909b91841",
    success:(res)=> {
      console.log(res.data)
      // console.log(url)
      // this.setData({
      //   datalist:res.data.data.hot
      // })
     this.setData({
       movies:1
      // movies:res.data.data.list
      // movies:[...this.data.movies,...res]
      // Console.log(url)
     })
    }
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.renderGoods()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.request({
      url: 'https://api.juooo.com/theatre/index/getTheatreBanner?theatre_id=16&version=6.1.68&referer=2',
      success:(res)=> {
        // this.setData({
        //   datalist:res.data.data.hot
        // })
       this.setData({
        movie:res.data.data
       })
      }
    }),
    wx.request({
      url: 'https://api.juooo.com/Show/Search/getShowList?page=1&theatre_id=16&category=0&time=1650615707095&version=6.1.68&referer=1&sign=7e829ffe6573f34026f6f39909b91841',
      success:(res)=> {
        console.log(res.data)
        // this.setData({
        //   datalist:res.data.data.hot
        // })
       this.setData({
        movies:res.data.data.list
       })
      },
      fail:(err)=>{
        console.log(err)
		
		}

    })

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
      console.log('我到底了')
      console.log(this.current)
      this.current++
      // url: "https://api.juooo.com/Show/Search/getShowList?page=${this.current}&theatre_id=16&category=0&time=1650615707095&version=6.1.68&referer=1&sign=7e829ffe6573f34026f6f39909b91841",
      // console.log(url)
      // this.renderGoods()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
