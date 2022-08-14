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

```js
<view>
	<swiper autoplay="{{ true }}" interval="2000" circular="{{ true }}">
		<swiper-item class="imgItem" item-id="" wx:for="{{ imglist }}" wx:key="{{ index }}">
			<image src="{{ item }}" alt="" />
		</swiper-item>
	</swiper>
</view>
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

#### 微信对话平台配置说明

#### 高级技能

#### 自定义接口配置

 

​    使用语义槽返回输出内容

| 序号 | 语义槽   | 词典         | 是否立即追问 | 追问话术 |      |
| ---- | -------- | ------------ | ------------ | -------- | ---- |
| 1    | 城市     |              |              |          |      |
| 2    | 应答消息 | sys.接口回填 |              |          |      |

####    接口无须是https  测试端口

![Snipaste_2022-08-07_20-33-41](F:\miniprogram-3\images\Snipaste_2022-08-07_20-33-41.png)

#### 配置区域 语义槽的里面的应答消息 要与接口参数配置的消息一致

------

![Snipaste_2022-08-07_21-03-57](F:\miniprogram-3\images\Snipaste_2022-08-07_21-03-57.png)

#### 输出参数

![Snipaste_2022-08-07_21-04-54](F:\miniprogram-3\images\Snipaste_2022-08-07_21-04-54.png)

```
保存预览一下，文章图片好像并没有发生任何变化。这是因为scaleToFill模式是缩放的默认模式，如果缺省了mode，则小程序也会以scaleToFill的模式来缩放图片。scaleToFill模式将改变图片的高宽比，强行让图片更改为样式指定的尺寸，使图片变形（如果原始图片的宽高比例和要缩放的目标宽高比例相同，则不会变形，只是整体上放大或者缩小了）。
```

### onShow

页面执行了onShow 函数后，逻辑层收到一个通知(Notify);逻辑层会以json的形式发送到View视图层,

视图层接收初始化数据后，开始渲染初始化数据，最后将数据呈现在开发者的眼前

"{{avatar}}" 一定在{{}}上加上双引号，否则小程序会报错

#### 数据绑定更新

```
setData 函数来数据绑定,立即为数据更新
使用this.setData的方式来调用这个方法
this.setDat 会改变this.data变量相同的key 值
setData执行后会通知逻辑层执行Rerender,并立刻重新渲染视图。

```

#### 页面加载执行



````js
  onLoad(options) {
      this.setData({
        title:"一根雪糕的经济原理"
      })
      console.log("onLoad:  一根雪糕的经济原理")
  },
````

件是视图层（wxml）到逻辑层（js）的通信方式。简单一些理解，事件可以让我们在js里处理一些用户在界面上的一些操作并对这些操作做出反馈。比如点击welcome页面“开启小程序之旅”按钮后，需要在js里调用MINA框架的API，使页面从welcome跳转到post

• 在组件上注册事件。注册事件将告诉小程序，我们要监听哪个组件的什么事件。在本例中，需要监听“开启小程序之旅”这个组件的tap事件。• 在js中编写事件处理函数响应事件。也就是说，监听到事件后，需要编写自己的业务。在本例中，我们将调用MINA框架的导航API，让welcome页面跳转到post页面。 

#### 绑定事件

```
    <!-- 监听时间 执行 -->
<view catchtap="onTapJump" class="Journey-container">
		<text>开启小程序之旅</text>
	</view>
```



```
onTapJump(event){
    wx.redirectTo({
      url:"../post/post",
      success:function(){
        console.log("jump success")
      }

    })
  },
```

 wx.redirectTo• 

wx.navigateTo• 

wx.switchTap(122100版本新增)

redirectTo将关闭当前页面，跳转到指定页面；navigateTo将保留当前页面，跳转到指定页面；而switchTap只能用于跳转到带tabbar的页面，并关闭其他所有非tabBar页面。



wx.navigateTo。保存运行代码后将发现，navigateTo跳转到post页面后，页面左上角有一个返回按钮

小程序最多只能有5层页面

### 缓存的应用



模板是小程序中的重点和难点，它将大幅度地提高代码的复用性与可维护性，避免开发者编写重复的代码



缓存的应用也是小程序中的一个特色，开发者的很多业务都需要借助缓存来实现，比如用户的令牌、城市列表数据等都可以写入小程序的缓存中。



本章我们还分别尝试使用ES5和ES6语法编写“数据库”访问类，开发者可以自行体会一下ES6编写Class的优越性







### 小程序的模板块

小程序只能将wxml 封装,无法将模版的业务逻辑(js)封装起来

使用模版，然后再新建模版文件在/pages/post 新建目录 post-item 作为模版文件模流，新建文件

post-item-tpl.wxml

post-item-tpl.wxss

模版相关内容被包括在<template></template>标签内，使用name 属性指定模版名

```
<import src="post-item/post-item-tol.wxml"/>
```

template的is属性指定要使用哪个模板，这里我们当然要使用postItemTpl这个模板

通过template的data属性，可以向template传递数据。这里将wx：for得到的item传入到template里，这样就可以在template内部使用这个item了。要注意的是，向模板里传入数据，同样要使用{{}}的数据绑定语法，比如data={{item}}。

不依赖item

{{...item}}可以将item这个对象展开。展开之后再传入到template里，就可以保证template不再依赖item这个变量名。