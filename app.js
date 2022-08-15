
App({
    onLaunch:function(){
        var storageData=wx.getStorageSync('postList');
       // wx.clearStorageSync();
        console.log(storageData)
        if(!storageData){
            console.log('clear data')
            var dataObj=require("data/data.js")
           // wx.clearStorageSync();
            wx.setStorageSync('postList', dataObj.postList)
           
         console.log('save data success')
        }
    }
})
// //wx8c631f7e9f2465e1
// var plugin = requirePlugin("myPlugin");
// App({
  
//     onLaunch: function () {
//       wx.login({
//         success: (res) => {
//             // 通过code换取openid
//             if (res.code) {
//                 wx.request({
//                     url: "",
//                     method: "post",
//                     data: {
//                         code: res.code,
//                     },
//                     success: (res) => {
//                         if (res.data && res.data.openid) {
//                             // 获取的openid存入storage，方便之后使用
                         
//                             wx.setStorageSync("openId", res.data.openid);
                           
//                         }
//                     },
//                 });
//             }
//         },
//         fail: () => {},
//         complete: () => {},
//     });
//         plugin.init({
//             appid: "3Vlm9jyKSsfOkRoaIWUzeNO043qt8B", //小程序示例账户，仅供学习和参考
//             openid: "openId", //用户的openid，必填项，可通过wx.login()获取code，然后通过后台接口获取openid
//             welcome:["请问您需要什么帮助"],
//             welcomeImage: 'http://inews.gtimg.com/newsapp_bt/0/10701537095/1000',
//             userHeader: "", // 用户头像
//             userName: "", // 用户昵称
//             //navHeight: 88,
//         //    textToSpeech
//             textToSpeech: 1,
//             background: "rgba(247,251,252,1)",
//             //background: "rgba(131, 165, 192)",
//             // 聊天提示语的高度 过低会被隐藏
//             guideCardHeight: 100,
//             operateCardHeight: 100,
//             history: false,
//             //文本评论展示
//             hideMovableButton:true,
//             //自定义导航栏
//             navHeight: 20,
//             // 定义输入框的输入内容
//             inputPlaceHolder:"请输入相关问题/或语音说话",
//             robotHeader:
//             "https://res.wx.qq.com/mmspraiweb_node/dist/static/miniprogrampageImages/talk/leftHeader.png",
//         userHeader:
//             "https://res.wx.qq.com/mmspraiweb_node/dist/static/miniprogrampageImages/talk/rightHeader.png",
            
//             guideList:["企业服务总线","风险数据集市 服务器宕机","服务方查询工具","企业数据总线","逻辑集中","会计平台"],
          
//             anonymous: false, // 是否允许匿名用户评价，默认为false，设为true时，未传递userName、userHeader两个字段时将弹出登录框
//             success: () => { this.setData({
//                 flag: true,
//             });}, //非必填
//             fail: (error) => {}, //非必填
//         });
//     },
//     onShow:function(){},
//     onHide:function(){}
// });