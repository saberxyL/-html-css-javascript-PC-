// 模糊查询开始===================================================
let searchBag = document.querySelector('.search-bg'); // 获取搜索框
let text = document.querySelector('.text'); // 获取输入框
let searchHelper = document.querySelector('.search-helper'); // 获取搜索下拉框
let searchP = searchHelper.querySelectorAll('p');
// 定义数组，存储搜索的内容
let searchArr = ['小米手机', '华为手机', '苹果手机', '小米电视', '小米平板', '苹果12', '苹果13', '苹果手表'];

//添加监听器
text.onfocus = function() {
    searchBag.style.color = '#c8c8c8'; // 输入框获取焦点时，改变搜索框内字体颜色
    if ( text.value != '' ) {
        searchHelper.style.display = 'block';
    }
}
text.onblur = function() {
    searchBag.style.color = '#989898';
    if ( text.value === '' ) {
        searchBag.innerHTML = '苹果手机'; 
    }
    searchHelper.style.display = 'none'; // 输入框失去焦点时，隐藏搜索下拉框
}
text.oninput = function() {
    searchBag.innerHTML = ''; // 输入框输入时，清空搜索框内的字
    searchHelper.innerHTML = ''; // 输入框输入时，清空搜索下拉框
    for (let i = 0; i < searchArr.length; i++) {
        if(searchArr[i].indexOf(text.value) != -1) { 
            searchHelper.innerHTML += '<p>'+ searchArr[i] +'</p>'; 
            searchHelper.style.display = 'block';
        }
    }
    // 如果输入框为空，隐藏搜索下拉框
    if ( text.value === '' ) {
        searchHelper.style.display = 'none'; 
    }
}
// 模糊查询结束===================================================

// 购物车下拉框开始===============================================
let shopDown = document.querySelector('.shopDown');
let shopUp = document.querySelector('.shopUp');
let shopCar = document.querySelector('.shopCar');
shopUp.onmouseover = function() {
    shopDown.style.display = 'block';
    shopUp.style.borderColor = '#c81623 #c81623 #fff';
}
shopDown.onmouseover = function() {
    shopDown.style.display = 'block';
    shopUp.style.borderColor = '#c81623 #c81623 #fff';
}
shopCar.onmouseout = function() {
    shopDown.style.display = 'none'; 
    shopUp.style.borderColor = '#eee';
}
// 购物车下拉框结束===============================================

// 头部二维码关闭开始==============================================
let hEwm = document.querySelector('.ewm-h');
let ewmClose = document.querySelector('.icon-close');
ewmClose.onclick = function() {
    hEwm.style.display = 'none';
}
// 头部二维码关闭结束==============================================

// 轮播图开始=====================================================
let sliderList = document.querySelector('.slider_list');
let imgLis = document.querySelectorAll('.slider_list img');
let bannerMove = document.querySelector('.banner-move');
let bPrev = document.querySelector('.prev');
let bNext = document.querySelector('.next');
let count = 0;

// 动态生成小圆点
for (let i = 0; i < imgLis.length; i++) {
    let li = document.createElement('li');
    bannerMove.appendChild(li);
}
bannerMove.children[0].className = 'active';  // 默认第一个小圆点为选中状态
// 淡入
function sliderOn() {
    imgLis[count].className = 'slider_active'; 
    bannerMove.children[count].className = 'active';
}

// 淡出
function sliderOff() {
    for ( let i = 0; i < imgLis.length; i++ ) {
        bannerMove.children[i].className = null;
    }
    imgLis[count].className = '';
}

// 切换上一张图
function prevImage() {
    sliderOff();
    (count == 0) ? count = imgLis.length - 1 : count--;
    sliderOn();
}

// 切换下一张图
function nextImage() {
    sliderOff();
    (count == imgLis.length - 1) ? count = 0 : count++;
    sliderOn();
}

// -自动换图-
let cutImgTime = setInterval(nextImage, 3000);

//定时器重置 
function timeReset() {
    clearInterval(cutImgTime);
    cutImgTime = setInterval(nextImage, 3000);
}

// -按钮换图-
bPrev.onclick = function(){
    timeReset();
    prevImage();
}
bNext.onclick = function(){
    timeReset();
    nextImage();
}

// 鼠标滑入（滑出），停止（启动）换图
for ( let i = 0; i < imgLis.length; i++) {
    imgLis[i].onmouseover = function() {
        clearInterval(cutImgTime);
    }
    imgLis[i].onmouseout = function() {
        cutImgTime = setInterval(nextImage, 3000);
    }
}

// 鼠标经过圆形按钮切图
for ( let i = 0; i < imgLis.length; i++) {
    bannerMove.children[i].onmouseover = function() {
        sliderOff();
        count = i;
        sliderOn();
    }
}
// 轮播图结束=====================================================

// 京东秒杀开始===================================================
function updateCountdown() {
    let nextSeckill = document.querySelector('.cutDown_start').querySelector('strong'); 
    let countdownspan = document.querySelector('.countDown_main').querySelectorAll('span'); 

    const nowTime = new Date(); 
    const currentHour = nowTime.getHours(); // 获取当前小时数
    let nextSeckillHour = (Math.ceil(currentHour / 2) * 2) % 24; // 下一个秒杀开始时间
    if (nextSeckillHour === 0) nextSeckillHour = 24;
    const isSeckillHour = currentHour % 2 === 0 && currentHour !== 24; // 当前时间是否为秒杀时间

    let countdownTime;
    if ( isSeckillHour ) {
        // 获取秒杀结束时间
        const endSeckillTime = new Date(nowTime.getFullYear(), nowTime.getMonth(), nowTime.getDate(), currentHour + 1, 0, 0, 0);
        countdownTime = (endSeckillTime - nowTime) / 1000;
    } else { 
        const startSeckillTime = new Date(nowTime.getFullYear(), nowTime.getMonth(), nowTime.getDate(), nextSeckillHour, 0, 0, 0);
        countdownTime = (startSeckillTime - nowTime) / 1000; 
    }

    let h = parseInt(countdownTime / 60 / 60 % 24);
    h = h < 10 ? '0' + h : h; 
    let m = parseInt(countdownTime / 60 % 60);
    m = m < 10 ? '0' + m : m;
    let s = parseInt(countdownTime % 60);
    s = s < 10 ? '0' + s : s;
    nextSeckill.innerHTML =  (nextSeckillHour < 10 ? '0' + nextSeckillHour : nextSeckillHour) + ":00";
    countdownspan[0].innerHTML = h;
    countdownspan[1].innerHTML = m;
    countdownspan[2].innerHTML = s;
}

// 每秒更新倒计时
let countdown_time = setInterval(updateCountdown, 1000);

// 初始化倒计时
updateCountdown();
// 京东秒杀结束===================================================

// 京东秒杀轮播开始===============================================
let sPrev = document.querySelector('.sPrev');
let sNext = document.querySelector('.sNext');
let seckillSlider = document.querySelectorAll('.seckill_slider a')
let s_x = 0;
let s_num = 0;
sPrev.onclick = function() {
    s_num--;
    s_x += 255; 
    for (let i = 0; i < seckillSlider.length; i++) {
        if ( s_num < 0 ) {
            s_x = -255*4;
            s_num = 4;
        } 
        seckillSlider[i].style.transform = `translateX(${s_x}px)`;
    }
}
sNext.onclick = function() {
    s_num++;
    s_x -= 255;
    for (let i = 0; i < seckillSlider.length; i++) {
        if ( s_num == 5 ) {
            s_x = 0;
            s_num = 0;
        }
        seckillSlider[i].style.transform = `translateX(${s_x}px)`;
    }
}
// 京东秒杀轮播结束===============================================

// 京东便宜包邮轮播开始===========================================
let cPrev = document.querySelector('.cPrev');
let cNext = document.querySelector('.cNext');
let cheaperSlider = document.querySelectorAll('.cheaper_slider a')
let c_x = 0;
let c_num = 0;
cPrev.onclick = function() {
    c_num--;
    c_x += 255; 
    for (let i = 0; i < cheaperSlider.length; i++) {
        if ( c_num < 0 ) {
            c_x = -255*4;
            c_num = 4;
        } 
        cheaperSlider[i].style.transform = `translateX(${c_x}px)`;
    }
}
cNext.onclick = function() {
    c_num++;
    c_x -= 255;
    for (let i = 0; i < cheaperSlider.length; i++) {
        if ( c_num == 5 ) {
            c_x = 0;
            c_num = 0;
        }
        cheaperSlider[i].style.transform = `translateX(${c_x}px)`;
    }
}
// 京东便宜包邮轮播开始===========================================

// 电梯定位切换开始===============================================
let header = document.querySelector('.header');
let home = document.querySelector('.home');
let elevator = document.querySelector('.elevator');
let rfu = document.querySelector('.rfu');
let elevatorA = elevator.querySelectorAll('a');
let search = document.querySelector('.search');
document.onscroll = function() {
    // 获取滚动条垂直滚动距离 142+490
    let top = document.documentElement.scrollTop || document.body.scrollTop;
    // 获取header的高度
    let headerHeight = header.offsetHeight;
    // 获取home的高度
    let homeHeight = home.offsetHeight;
    // 获取为你推荐的高度
    let rfuHeight = rfu.offsetHeight;

    if( top >= headerHeight + homeHeight ) {
        elevator.className = 'elevator elevator_fix';
        elevatorA[3].style.color = '#c81623';
        search.className = 'search-fix';
    } else {
        elevator.className = 'elevator';
        elevatorA[3].style.color = '';
        search.className = 'search';
    }

    if ( (top >= headerHeight + homeHeight) && (top < headerHeight + homeHeight + rfuHeight) ) {
        elevatorA[0].style.color = '#c81623';
    } else {
        elevatorA[0].style.color = '';
    }
}
// 电梯定位切换结束===============================================

// 为你推荐顶部开始===============================================
let feedTabLis = document.querySelectorAll('.feed-tab li');
for (let i = 0; i < feedTabLis.length; i++) {
    feedTabLis[i].onclick = function() {
        for (let j = 0; j < feedTabLis.length; j++) {//color: #e1251b;
            feedTabLis[j].children[0].className = 'item1';
            feedTabLis[j].children[1].className = 'item2';
        }
        feedTabLis[i].children[0].className = 'Item1';
        feedTabLis[i].children[1].className = 'Item2';
    }
}
// 为你推荐顶部结束===============================================

// 商品透明度变换开始=============================================
let goodsLists = document.querySelectorAll('.goods_list li');
for ( let i = 0; i < goodsLists.length; i++ ) {
    let img = goodsLists[i].querySelector('img');
    goodsLists[i].onmouseover = function() {
        img.style.opacity = 0.8;
    }
    goodsLists[i].onmouseout = function() {
        img.style.opacity = 1;
    } 
} 
// 商品透明度变换结束=============================================