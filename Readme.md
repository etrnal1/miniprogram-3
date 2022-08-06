# 小程序开发
## 该文档为开发版的文档
### webstorm 环境配置

##### 配置拼写免检查

##### 配置插件

## Git 环境准备

```sh
npm i vant-weapp -S --production
ssh -T git@github.com
git config --global user.name mac
git config --global user.email 192456@qq.com
Tag Mix -Links 作者：jugujugu https://www.bilibili.com/read/cv6656655/ 出处：bilibili
```

## 目录结构

    app.js    逻辑
    app.json  配置
    app.wxss  样式

## flex 布局

- flexible box 任何容器都可以为flex布局
  . 父盒子设为flex 布局以后,子元素的float clear
  veritalce-aligin 属性将失效

- 伸缩布局=弹性布局=伸缩盒布局=弹性和布局=flex布练习开发小程序

### 采用flex 布局的元素,成为flex 容器,他的所有子元素自动成为容器成员

### flex 父常见属性

1. flex-direction 主轴的方向
2. justify-content 设置主轴上的子元素排序
3. Flex-wrap 设置子元素是否换行
4. aligin-center 设置侧轴上的子要元素的排序方式
5. Align-iteems 设置多行
6. Flex-row

        解除SSL验证：git config --global http.sslVerify “false”
        再次 git push 即可

### 布局例子

```css
.container {
    display: flex;
    flex-direction: row;
    #居中布局 inital
    justify-content: flex-start;
}
```

Flex-start

Flex-edn

Center center 侧轴中间

Flex-grow

- row 从左到右
- Row-reverse 从右到左
- Column 靠左 从上到下
- column-reverse 靠左 从下到上

## 小程序文件

- wxml（html 文件）
- Wxss(文件样式)
- js(逻辑部分的文件)
- Json ()
- app.js (全局配置文件)
- app.json(全局陪着文件)

### 小程序语法

- 模版语法 {{}} [里面支持js 语法]
- wx:for w x:key.
- js 语法类型

```html

<view>{{ 10>20 ?'aaaa':'bbbb'}}</view>
<view wx:for="{{datalist}}" wx:key="{{index}}"">{{item}}</view>
```

wx.js

```js
page({
    #里面写需要传递的数;类似字典键值对[key
:
value
]
data:{
    datalist:[1, 2, 3]
}
})
```

#### 列表渲染

```
wx:for-item="keywinitem" wx:for-index ="" wx:key="keys"

wx:if 
```

#### 条件渲染

#### 事件绑定

Bindtap

```
<button type="primary" bindtap="handleTap"></button>
```

### Demo.js

- this.setdata({}). [重新进行数据赋值]

```js
this.setData({})
```

```js
handleTap()
{
    this.setData({
        myname: "xiaoming",
        isCreated: !this.data.isHidden
    })
}
,
```

#### catch 阻止冒泡

```js
capture - bind
绑定事件

```

### 绑定事件

````js
  bind - input

console.log("input", evt.detail)
````

### 微信请求(wx.request)

- evt 没有跨域限制
- 数据请求

进行请求网址对时候，小程序开发工具勾选不进行域名校验

```web-idl
 wx.request({
       url: 'https://www.baidu.com',
       success: function(res) {
         console.log(res.data)
       }
       ,
       fail:()=>{
         console.log(fail)
       }
     })
```

## Image

- widthFix
- overflow:hidden;【进行隐藏float】

```
image.replace("/w.h","")+@11_1e_1c_128w_180h
```

```css
.item {
    overflow: hidden;
}
```

## 轮播图 [swiper 组件]

swipe

- swiper 默认高度是150px 应该设置为314rpx
- Autoplay
- interval="3000"  设置时间为3000 毫秒

```

```

### 封装request

```js
function request() {
    return new Promise((resolve, reject) => {
        wx.request({
            url: 'url',
            success: (res) => {
                resolve(res.data)
            },
            fail: (err) => {
                reject(err)

            })

    })
    }
```

#### import from [引入其他js 文件的方法]

import from

```js
request({
    url: 'http://localhost:50000/users'
}).then(res => {
    console.log(res)
})
```

### OnReady

### OnReachBotton(上拉触底)

总数据可能在header 头里面

#### Wx.request

Header 属性存在该值

X-total-count:16

### 懒加载

```
# 数组的长度
if( ==){

}
```

### stopPullDownRefresh()

```
setTimeout(()=>{
	wx.stopPullDownRefresh()  //停止下拉刷新
},1000)
```

### 使用组件

#### 新建

#### 引用

### 获取用户授权

-  获取用户信息
-  跳转页面

```js
#
#获取微信用户信息
wx.getUserProfile({
    desc: 'desc',
    success: (res) => {
        console.log(res)

    }
}) 
```

```js
#进行跳转网页
wx.navigateTo({
    url: ""
})
```

```js
#存储用户信息
wx.setStorageSync('token', 'res.userInfo')
```

### vant weapp 引用

#### 先使用npm安装

```
 <van-field
      value="{{ value }}"
      placeholder="请输入用户名"
      border="{{ false }}"
      bind:change="onChange"
 />
```

### nginx 证书配置

```

/usr/sbin/nginx -t
/usr/sbin/nginx /etc/nginx/nginx.conf
```

# 疑难

- 小程序配置https 接口 调用能力
- rem 使用布局规范
- image 增加图片跳转规则

### 小程序配置https

申请证书

配置nginx 服务器

nginx 服务器转发端口

端口对应的目录起相应的服务接口

### 配置webstorm 不建索引

选择目录————>选择将目录标记为-->排除
即为不建立索引

### flex 布局

flex 弹性盒子

- flex-direction:row

  盒子横向排列

- justify-content

   左对齐

   flex-start

   center 项目居中对齐

   space-between 两边对齐

   space-round 边距离对齐

    - aligin-itemes

      stretch

### 项目属性

 order 属性为0

 order 数值越小越靠前 排列

- [ ] flex-grow 默认为不分配 默认值为0

### 小程序 上传 大图进行压缩

utils -images.js
上传大图需要调整图片压缩时间

```javascript 
  调整时间1000 的大小
  function getCanvasImage(canvasId, imagePath, imageW, imageH, getImgSuccess) {
//创建画布内容
var _self = this;
const ctx = wx.createCanvasContext(canvasId, _self);
//图片画上去，imageW和imageH是画上去的尺寸，图像和画布间隔都是0
ctx.drawImage(imagePath, 0, 0, imageW, imageH);
//这里一定要加定时器，给足够的时间去画（所以每次递归最少要耗时200ms，多次递归很耗时！）
    ctx.draw(false, setTimeout(function () {
//把当前画布指定区域的内容导出生成指定大小的图片，并返回文件路径
wx.canvasToTempFilePath({
          canvasId: canvasId,
          x: 0,
          y: 0,
          width: imageW,
          height: imageH,
          quality: 1, //最高质量
  success: (res) => {
//将取出的图片路径通过回调函数返回
getImgSuccess(res.tempFilePath);
}
})
}, 1000));   
}
```

  

## 微信小程序 对话插件的接入

#### 引入插件

AI.json 里面填入以下信息

```
{
  "usingComponents": {
    "chat": "plugin://chatbot/chat"
  }
}
```

 AI.wxml  里面设置

chat 组件外部必须指定容器, 并设置容器高度, 如果全屏展示, 设置高度为 100vh, 如果是自定义导航栏, 设置高度为(100vh - 导航栏的高度)即可. 

```

```



 generic:textMessage="customTextMessage"

   generic:weatherMessage="customWeatherMessage"

   generic:imageMessage="costomImageMessage"

   generic:guideCard="customGuideCard"

   generic:queryMessage="customQuery"

   generic:operateCard="customoperateCard"

```
  <view style="height: calc(100vh -1px);">
    <chat
      id="component-id"
      
      bind:backHome="goBackHome"
      generic:textMessage="customTextMessage"
      generic:weatherMessage="customWeatherMessage"
      generic:imageMessage="costomImageMessage"
      generic:guideCard="customGuideCard"
      generic:queryMessage="customQuery"
      generic:operateCard="customoperateCard"
    >
    </chat>
  </view>
```

#### 文本复写

{
    "usingComponents": {
        "customTextMessage": "../../components/customTextMessage/customTextMessage"
    }
}

#### 添加插件commenet 方便复写

```js
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
                            wx.setStorageSync("lol", res.data);
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
            welcome:["请问您需要什么帮助"],
            welcomeImage: 'http://inews.gtimg.com/newsapp_bt/0/10701537095/1000',
            userHeader: "", // 用户头像
            userName: "", // 用户昵称
           // navHeight: 88,
        //    textToSpeech
            textToSpeech: 1,
            background: "rgba(247,251,252,1)",
            //background: "rgba(131, 165, 192)",
            // 聊天提示语的高度 过低会被隐藏
            guideCardHeight: 40,
            operateCardHeight: 100,
            history: true,
            //文本评论展示
            hideMovableButton:true,
            //自定义导航栏
            navHeight: 20,
            // 定义输入框的输入内容
            inputPlaceHolder:"请输入相关问题/或语音说话",
            robotHeader:
            "https://res.wx.qq.com/mmspraiweb_node/dist/static/miniprogrampageImages/talk/leftHeader.png",
        userHeader:
            "https://res.wx.qq.com/mmspraiweb_node/dist/static/miniprogrampageImages/talk/rightHeader.png",
            
            guideList:["我想听广播","我想听起风了","北京天气"],
          
            anonymous: false, // 是否允许匿名用户评价，默认为false，设为true时，未传递userName、userHeader两个字段时将弹出登录框
            success: () => { this.setData({
                flag: true,
            });}, //非必填
            fail: (error) => {}, //非必填
        });
    },
});
```

