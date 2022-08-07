//logs.js
// 重写组建的js
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
          navHeight: navHeight,
          statusBarHeight: res.statusBarHeight + navHeight
        })
      }
    }),

    plugin.init({
      wx.login({

      }),
      appid: "3Vlm9jyKSsfOkRoaIWUzeNO043qt8B",
      // textToSpeech: true,
      // guideList: [],
      welcome: '请问需要什么帮助',
      background: "#eee",
      //聊天气泡
      guideCardHeight: 70,
     // 设置输入语言 和语音位置的高度大小
      operateCardHeight: 70,
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
