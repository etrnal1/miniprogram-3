//wx8c631f7e9f2465e1
var plugin = requirePlugin("chatbot");
App({
  
    onLaunch: function () {
      wx.login({
        success: (res) => {
            // 通过code换取openid
            if (res.code) {
                wx.request({
                    url: "",
                    method: "post",
                    data: {
                        code: res.code,
                    },
                    success: (res) => {
                        if (res.data && res.data.openid) {
                            // 获取的openid存入storage，方便之后使用
                            wx.setStorageSync("openId", res.data.openid);
                        }
                    },
                });
            }
        },
        fail: () => {},
        complete: () => {},
    });
        plugin.init({
            appid: "3Vlm9jyKSsfOkRoaIWUzeNO043qt8B", //小程序示例账户，仅供学习和参考
            openid: "openId", //用户的openid，必填项，可通过wx.login()获取code，然后通过后台接口获取openid
            userHeader: "", // 用户头像
            userName: "", // 用户昵称
           // navHeight: 88,
           textToSpeech: 1,
            background: "rgba(247,251,252,1)",
      guideCardHeight: 40,
      operateCardHeight: 90,
      history: true,
      navHeight: 0,
            robotHeader:
            "https://res.wx.qq.com/mmspraiweb_node/dist/static/miniprogrampageImages/talk/leftHeader.png",
            userHeader:
            "https://res.wx.qq.com/mmspraiweb_node/dist/static/miniprogrampageImages/talk/rightHeader.png",
            guideList:["外协值班",
            "应用值班",
            "今天天气如何","听音乐"],
            welcome:["请问有什么需要帮助的吗"],
            anonymous: false, // 是否允许匿名用户评价，默认为false，设为true时，未传递userName、userHeader两个字段时将弹出登录框
            success: () => { this.setData({
                flag: true,
            });}, //非必填
            fail: (error) => {}, //非必填
        });
    },
});