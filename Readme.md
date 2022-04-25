# 小程序开发

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
3. Flex-wrap  设置子元素是否换行
4. aligin-center  设置侧轴上的子要元素的排序方式
5. Align-iteems 设置多行
6. Flex-row


        解除SSL验证：git config --global http.sslVerify “false”
        再次 git push 即可


### 布局例子

```css
.container{
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
- wx:for  w x:key. 
- js 语法类型

```html
<view>{{ 10>20 ?'aaaa':'bbbb'}}</view>
<view wx:for="{{datalist}}" wx:key="{{index}}"">{{item}}</view>
```



wx.js

```js
page({
	#里面写需要传递的数;类似字典键值对[key:value]
	data:{
		datalist:[1,2,3]
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
this.setData({

})
```



```js
handleTap(){
  this.setData({
    myname:"xiaoming",
    isCreated:!this.data.isHidden
  })
},
```

#### 	catch 阻止冒泡

```js
capture-bind 绑定事件

```

### 绑定事件

````js
  bind-input

console.log("input",evt.detail)
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
.item{
  overflow:hidden;
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
function request(){
	return new Promise((resolve,reject)=>{
		wx.request({
      url:'url',
      success:(res)=>{
        resolve(res.data)
      },
      fail:(err)=>{
        reject(err)
		
		})
	
	})
}
```

#### import from [引入其他js 文件的方法]

import from

```js
request({
  url:'http://localhost:50000/users'
}).then(res=>{
  console.log(res)
})
```

### OnReady

### OnReachBotton(上拉触底)

总数据可能在header  头里面

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

- ​	  获取用户信息
- ​    跳转页面

```js
##获取微信用户信息
wx.getUserProfile ({
	desc:'desc',
	success:(res)=>	{
			console.log(res)
	
	}
}) 
```

```js
#进行跳转网页
wx.navigateTo({
	url:""
})
```

```js
#存储用户信息
wx.setStorageSync('token','res.userInfo')
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

