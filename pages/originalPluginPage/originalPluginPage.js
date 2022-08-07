//logs.js
const backgroundAudioManager = wx.getBackgroundAudioManager()
var plugin = requirePlugin("myPlugin"); 
Page({
  data: {
  },
  onLoad: function (options) {
    wx.getSystemInfo({
      success: res => {
        let isIOS = res.system.indexOf("iOS") > -1;
        let navHeight = 0;
        if (!isIOS) {
          navHeight = 48;
        } else {
          navHeight = 44;
        }
        this.setData({
          status: res.statusBarHeight,
          //navHeight: navHeight,
          navHeight: 10,
          statusBarHeight: res.statusBarHeight + navHeight
        })
      }
    })
    plugin.init({
      appid: "3Vlm9jyKSsfOkRoaIWUzeNO043qt8B",
      // textToSpeech: true,
      // guideList: [],
      welcome: '请问需要什么帮助',
      // background: "#eee",
      // guideCardHeight: 40,
      // operateCardHeight: 145,
      // history: true,
      // historySize: 60,
      navHeight: this.data.statusBarHeight,
      success: () => {
        this.setData({
          flag: true
        })
      },
      fail: error => {}
    });
  },
  getQueryCallback: function (e) {
   
  },
  goBackHome: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  back:function() {
    this.goBackHome()
  }
})
