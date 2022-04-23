function CheckAuth(callback){

    wx.getUserProfile({
        desc: 'desc',
        success:(res)=>{
          console.log(res.userInfo)
          wx.setStorageSync('token', res.userInfo)
          wx.navigateTo({
            url: '/pages/telform/telform',
          })
        }
      })
    // 获取手机号
    // wx.checkStorageSync
    // wx.checkStorageSync
    // if(wx.getStorageSync('tel')){
    //     //处理正常业务
    //     callback()
    // }else{
    //     if(wx.getStorageSync('token')){
    //         wx.navigateTo({
    //             url: '/pages/auth/auth',
    //           })
    //     }else{

    //         console.log(wx.getStorageSync())
    //         wx.navigateTo({
    //           url: '/pages/telform/telform',
    //         })
    //     }
    // }
}
export default CheckAuth