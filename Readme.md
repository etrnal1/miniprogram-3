# 小程序开发
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

### 布局示例子

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



### 小程序组件

- 模版语法
- 

​	  

```html
<text></text>
<view>{{ 10>20 ?'aaaa':'bbbb'}}</view>
```



#### 列表渲染

```
wx:for-item="keywinitem" wx:for-index ="" wx:key="keys"

wx:if 
```



#### 条件渲染

#### 事件绑定

```
<button type="primary" bindtap="handleTap"></button>
```

### Demo.js

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







div 

​	div 失去效用 

   绑定在属性上

  

```

```



## 练习小程序

<input class='input' placeholder='please input'/>
<input  class="input" placeholder="please input">