### 一、项目介绍

**项目名称**：京东pc客户端

**项目描述**：模拟京东PC端的电商网站页面，DIV+CSS布局设计，完成共两个页面：首页、登录页。

**开发工具**：VS Code 

**项目目的**: 能够熟练德地使用html、css、js设计网页，实现页面布局以及交互动画

***



### 二、项目目录结构及介绍

<img src="https://cdn.jsdelivr.net/gh/saberxyL/markdown_pic/markdown_pic/202409081445273.png" style="zoom:50%;" />

**css文件：**

* `iconfont`: 存放整个项目过程中所使用的字体图标所需文件
* `index.css`: 首页的页面样式
* `login.css`: 登录页样式
* `reset.css`: 重置样式表

**images**: 

​	存放首页和登录页所用到的图片、logo

**js**：

* `index.js`: 首页的js文件
* `login.js`: 登录页的js文件

**index.html**：存放首页html结构

**login.html**: 存放登录页的html结构



### 三、页面详情

该栏目包含对页面布局、动交互画、技术实现的介绍

#### 1、首页

首页分为头部、主体、商品页、页底

首先在`index.html`中引入网页图标、重置样式文件、字体图标、css文件以及js文件

##### 头部

==页面内容==：logo、搜索框、购物车、二维码、导航栏。

![](https://cdn.jsdelivr.net/gh/saberxyL/markdown_pic/markdown_pic/202409081531595.png)

==交互动画==以及==技术实现原理==：

* 搜索框：

  HTML布局：div+input,div存放默认内容，input接收用户输入内容

  ```html
  <div class="form">
      <div class="search-bg">苹果手机</div>
      <input type="text" class="text" style="background-color: transparent;">
      <span class="photo-search-btn"></span> <!--小相机 -->
      <button class="button">
          <i class="iconfont icon-fangdajing"></i> <!-- 放大镜 -->
      </button>
      <!-- 搜索提示框 -->
      <div class="search-helper"></div> 
  </div>
  ```

  * 获取（失去）焦点字体变色。

    <img src="https://cdn.jsdelivr.net/gh/saberxyL/markdown_pic/markdown_pic/202409082008485.png" style="zoom: 80%;" />

  `实现原理`：获取`search-bg`标签，添加onfocus()事件监听器:更改颜色，添加onblur()事件监听器：恢复颜色

  

  * 输入内容输入框默认内容清空，若是内容为空，失去焦点恢复默认内容。

    <img src="https://cdn.jsdelivr.net/gh/saberxyL/markdown_pic/markdown_pic/202409082102976.png" style="zoom:80%;" />

  `实现原理`：获取`text`标签、`search-bg标签`，给`text`添加oninput()事件监听器,有内容输入时就`search-bg.innerHTML = '';`

  

  * 模糊搜索框：输入内容则有提示信息，鼠标经过提示信息有行变色效果。

    <img src="https://cdn.jsdelivr.net/gh/saberxyL/markdown_pic/markdown_pic/202409082106520.png" style="zoom:80%;" />

  `实现原理`：①、定义好一个数组`let searchArr = ['小米手机', '华为手机', '苹果手机', '小米电视', '小米平板', '苹果12', '苹果13', '苹果手表'];`

  ​		   ②、获取`text`标签、`search-bg标签`、`search-helper标签`，给`text`添加oninput()事件监听器，有内容输入时，就清空下拉框，因为oninput()是实时捕捉内容的，如果不清空，下拉框的提示信息就会有堆积问题，所以要每次键入文字时就清空一次。

  ​		  ③、遍历`searchArr`数组,通过`if (searchArr[i].indexOf(text.value) == -1)`来筛选包含输入内容的数组单元，并且每找到一项符合条件的数组单元，就在下拉框中创建新标签，并且修改`search-helper.display`为`block`,最后的行变色，是通过给新增标签添加`hover伪链接`实现的

  ​		  ④、最后就是鼠标失去焦点时将`search-helper.display`改为`none`

  * 鼠标经过相机变色，经过放大镜，背景色变深

    <img src="https://cdn.jsdelivr.net/gh/saberxyL/markdown_pic/markdown_pic/202409091010601.png" style="zoom: 80%;" />

  `实现原理`: ①、相机变色是通过雪碧图来实现的，通过改变`background-position`属性的属性值来切换到不同的颜色的相机图片

  ​		②、放大镜图标采用的是字体图标，所用到的字体图标库就是阿里巴巴矢量图标库。背景色就通过伪链接实现

* 购物车
  
  * 鼠标经过显示购物车提示框
  
    <img src="https://cdn.jsdelivr.net/gh/saberxyL/markdown_pic/markdown_pic/202409091043158.png" style="zoom:80%;" />
  
    `实现原理`：两个盒子，一盒子装'我的购物车',一个装'购物车状态'，只要鼠标经过第一个盒子，就修改第二个盒子的`display`属性值即可。
  
* 二维码：
  
  * 点击关闭按钮可关闭二维码
  
    <img src="https://cdn.jsdelivr.net/gh/saberxyL/markdown_pic/markdown_pic/202409091048470.png" style="zoom: 50%;" />
  
    `实现原理`：给关闭按钮的盒子绑定一个点击事件监听器，在点击后，修改二维码盒子的`display`属性值即可。
  
* 导航栏：
  * 鼠标经过字体变色
  
    `实现原理`：使用`houver`伪链接修改字体颜色即可。



##### 主体

==页面内容==：左侧菜单、轮播图、限时秒杀

<img src="https://cdn.jsdelivr.net/gh/saberxyL/markdown_pic/markdown_pic/202409091348544.png" style="zoom: 50%;" />

* 左侧菜单

  * 鼠标经过每一行，行背景变色，经过每一项，每一项字体变色

    <img src="https://cdn.jsdelivr.net/gh/saberxyL/markdown_pic/markdown_pic/202409091416638.png" style="zoom:50%;" />

    `实现原理`: 直接通过伪链接的方式实现

* 轮播图

  先设置一个切图函数，同将其与小圆点绑定，只要 切图，都会改变小圆点状态

  * 每隔三秒自动换图，换图时，小圆点跟随

  `实现原理`：设置一个定时器，每隔三秒就调用一次切图函数，通过修改类名来实现将需要的图片显示，不需要的图片隐藏，这里用到的时`opacity`属性，平且通过`transition`属性添加了一个淡入淡出的效果，同时呢，在切换图片的时候改变对应小圆点的选中状态，其他小圆点的状态恢复，也使用过修改类名的方式。

  * 鼠标经过小圆点且当相应的图片

  `实现原理`: 给小圆点添加一个鼠标经过事件，经过就修改小圆点状态，同时要重置计时器

  * 点击左右按钮切图

  `实现原理`：非别给左右连个按钮添加点击事件，调用切图函数，同样需要重置计时器。

  * 鼠标划入轮播图，停止播放

  `实现原理`：给片添加鼠标经过事件和鼠标离开事件，经过就清除定时器，离开又重新启动定时器

* 限时秒杀
  * 将一天分为12场，两个小时为一场，双数为 '秒杀场' 开始，单数为 '秒杀场' 结束，例如：14：00场，现实时间在13：00~14：00时，倒计时模块为 ”秒杀即将开始“ ，时长一小时的倒计时；时间在14：00~15：00范围内时，倒计时模块为 "该场秒杀距离结束" 的倒计时，时长同样为一个小时。

​	`实现原理`：首先获取当前时间，通过` (Math.ceil(currentHour / 2) * 2) % 24`计算出距离当前时间最近的下一场限时秒杀，以及通过`currentHour % 2 === 0 && currentHour !== 24`来判断当前是否为秒杀时间，然后分别对这两种状态做处理。如果在秒杀时间内就计算出秒杀结束的时间，否则计算出秒杀开始的时间，因为用的是时间戳，所以将时间用公式转换一下。

对于`(Math.ceil(currentHour / 2) * 2) % 24`这个公式如何计算出秒杀时间，我举个例子：

1. 如果当前时间是13:00，那么 `Math.ceil(13 / 2)` 是7，`7 * 2` 是14，所以结果是14，表示下一场秒杀是14:00场，当前处于倒计时即将开始的状态。

2. 如果当前时间是14:30，那么 `Math.ceil(14 / 2)` 是7，`7 * 2` 是14，所以结果是14，表示当前正处于14:00场的秒杀中，并且倒计时模块显示的是距离结束的时间。

   * 限时秒杀右侧的商品栏点击按钮有一个无缝切换的效果，每点击一次就向与点击方向相反的方向滑动三张图片的距离

     <img src="https://cdn.jsdelivr.net/gh/saberxyL/markdown_pic/markdown_pic/202409091513912.png" style="zoom:50%;" />

   `实现原理`：给两个点击按钮添加不同的点击事件。首先分析一下如何实现图片移动，每一张图片都有自己最初的一个位置，通过修改`tanslateX`属性值，可以改变其距离最初位置的距离，所以定义两个变量，一个用来存储移动距离，一个用来存书移动次数，因为图片数量是有限的，所以移动到端点后，我们希望立即衔接第一张图片，所以当移动次数达到上限后，就将移动距离给初始化即可，最后添加一个`transition`属性，使得切图有过渡效果。还有一个问题就是如何让那些已经移出去的图片隐藏起来，只显示在展示框内的图片，只需要给父盒子添加`overflow：hidden`即可



##### 商品页

==页面内容==：导航栏、商品框、侧边楼层、吸顶搜索框

* 导航栏

  * 被选中的栏目，有变色效果、

  <img src="https://cdn.jsdelivr.net/gh/saberxyL/markdown_pic/markdown_pic/202409091901520.png" style="zoom:50%;" />

  `实现原理`：整个导航栏采用ul+li布局，通过js给其设置选中效果，给每一个添加点击事件：改变当前背景色以及字体颜色，然后将其他li的状态初始化即可

* 商品页

  * 鼠标经过整体透明度降低

  `实现原理`：给商品盒子布局好之后，给盒子添加伪链接修改其透明度，并且使用`transition`过渡一下

* 侧边楼层

  楼层中的图标采用的是字体图标的方式

  * 对应单元到达对应位置后字体颜色变红。

  <img src="https://cdn.jsdelivr.net/gh/saberxyL/markdown_pic/markdown_pic/202409092049687.png" style="zoom:50%;" />

  `实现原理`：添加滑动事件即`document.onscroll()`，获取 '为你推荐' 模块顶部到页面最上面的距离和底部到页面最上面的距离，再获取鼠标滚动距离，当鼠标滚动距离在两个距离范围内时，就改变字体颜色

  * 上滑页面，楼层到到某个位置就回弹一下。

  `实现原理`：同样添加鼠标滑动事件，当鼠标滑动距离大于 '为你推荐' 模块顶部到页面最上面的距离时，就将楼层定位从绝对定位改为固定定位，并且将`top`值从0增加到75px，用`animation`属性做动画效果

  

* 吸顶搜索框

  ![](https://cdn.jsdelivr.net/gh/saberxyL/markdown_pic/markdown_pic/202409092117422.png)

  * 到达页面某个位置后从顶部向下滑出

    `实现原理`：通过鼠标滚动事件，获取想要位置距离顶部的距离以及鼠标滚动距离，当滚动距离到达这个值后，将搜索框的类名由`search`改为`search-fix`, `search-fix`就是用来将搜索框样式重写的，将需要修改样式的部分重写，其他的继承`search`的样式，就像`.search .form {原内容}`就变成了`.search-fix .form {新内容}`，通过这种方法，将吸顶搜索框样式写出来，最后将`search-fix`的定位从绝对定位改为固定定位，然后，将`top`值从一个负值变为0，再用`animation`做动画效果，这样吸顶出来的效果就是从顶部慢慢显露出来。

##### 页底

页底主要内容在html布局和css样式上面，完成效果如下

<img src="https://cdn.jsdelivr.net/gh/saberxyL/markdown_pic/markdown_pic/202409092129334.png" style="zoom: 50%;" />

其中最下面的一排图标采用的是雪碧图

<img src="https://cdn.jsdelivr.net/gh/saberxyL/markdown_pic/markdown_pic/202409092131738.png" style="zoom:50%;" />

至此首页完成

#### 登录页

登录页分为左右两个部分，左侧有登录菜单，输入框，提交按钮，其他登录方式，右侧为扫码登录

布局中的分割线采用的方式为添加一个盒子定位到相应位置做的，也可以使用`after`和`before`伪链接实现

<img src="https://cdn.jsdelivr.net/gh/saberxyL/markdown_pic/markdown_pic/202409111021994.png" style="zoom: 50%;" />

##### 登录菜单

点击登录菜单，菜单选项字体变色，且输入框样式改变

`实现原理`：点击字体变色，给两个选项盒子添加一个点击事件即可，点击之后更改字体颜色，并且将另外一个标签字体颜色恢复，然后再将对应的盒子的`display`属性更改即可

<img src="https://cdn.jsdelivr.net/gh/saberxyL/markdown_pic/markdown_pic/202409121327305.png" style="zoom: 80%;" />

##### 密码登录

密码登录模块时，输入密码可以通过右侧小眼睛来控制密码的可看状态

<img src="https://cdn.jsdelivr.net/gh/saberxyL/markdown_pic/markdown_pic/202409121337068.png" style="zoom: 50%;" />

`实现原理`：给眼睛所在标签帮定一个点击事件通过点击事件来更改密码框的`type`属性值，并设置一个flag值，默认为1（可见状态），当点击之后，如果flag=1，就将`type属性值改为passward`，然后将flag值改为0，反之将`type属性值改为text`，flag改为1.

##### 手机登录

手机登录模块时，可以选择号码所属地区。

<img src="https://cdn.jsdelivr.net/gh/saberxyL/markdown_pic/markdown_pic/202409121338216.png" style="zoom: 50%;" />

`实现原理`：在HTML中写好一个表单，将其定位到手机号左侧，即可。需要注意的是将文本输入框的左边距调整，不然会出现输入的号码被表单覆盖的现象

##### 登录按钮

登陆按钮默认鼠标无法点击状态，在两个输入框都有内容后才能够点击

<img src="https://cdn.jsdelivr.net/gh/saberxyL/markdown_pic/markdown_pic/202409121410530.png" style="zoom: 50%;" />

<img src="https://cdn.jsdelivr.net/gh/saberxyL/markdown_pic/markdown_pic/202409121424672.png" style="zoom:50%;" />

`实现原理`:初始化`cursor`属性为`not-allowed`,写一个函数，用于判断按钮是否可点击，判断两个输入框是否有内容，都有则将其`cursor`属性值从`not-allowed`改为`pionter`.



##### 其他登录方式

* qq、微信、立即注册,都一个鼠标经过显示下划线的效果，经过qq、微信还有一个变色效果

![](https://cdn.jsdelivr.net/gh/saberxyL/markdown_pic/markdown_pic/202409121817508.png)

`实现原理`：添加伪链接将`text-decoration`改为`underline`，然后对应修改一下`color`属性值就行

* 扫码登陆，就只需要布局好就行了
