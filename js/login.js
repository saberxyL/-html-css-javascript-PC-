// 标题按下变色
let lis = document.querySelectorAll('.title li');
let inputMethods = document.querySelectorAll('.input');
// 默认第一个li为红色
lis[0] .style.color = '#fa2c19';
for (let i = 0; i < lis.length; i++) {
    lis[i].onclick = function() {
        for (let j = 0; j < lis.length; j++) {
            lis[j].style.color = '#000';
            inputMethods[j].style.display = 'none'; // 隐藏所有输入框
        }
        this.style.color = '#fa2c19'; // 选中亮色
        inputMethods[i].style.display = 'block'; // 显示当前输入框
    }
} 

// 输入框
let userTextdivs = document.querySelectorAll('.userEnroll div');
let userInputs = document.querySelectorAll('.userEnroll input');
let phoneTextdivs = document.querySelectorAll('.phoneEnroll div');  
let phoneInputs = document.querySelectorAll('.phoneEnroll input');
let textArr1 = ['用户名/邮箱', '密码'];
let textArr2 = ['手机号', '验证码'];
// 登录按钮
let submit= document.querySelector('.submit');
// 登录按钮点击状态函数
function isClick( inputs ) { 
    let flag = 1;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === '') {
            flag = 0;
            break;
        }
    }
    if (flag === 1) {
        submit.style.backgroundColor = '#fa2c19';
        submit.style.cursor = 'pointer';
    } else {
        submit.style.backgroundColor = '#fd9d94';
        submit.style.cursor = 'not-allowed';
    }
}
// 输入框处理函数
function inputHandle(textDivs, Arr, inputs) {
    for (let i = 0; i < textDivs.length; i++) {
        // 点击div时，input获取焦点
        textDivs[i].onclick = function() {
            inputs[i].focus();
        }
        // input失去焦点时，div恢复内容
        inputs[i].onblur = function() {
            if (inputs[i].value === '') {
                textDivs[i].innerHTML = Arr[i];
            }
        }
        // input输入时, 清空内容
        inputs[i].oninput = function() {
            textDivs[i].innerHTML = '';
            isClick( inputs);
        }
    }
}
inputHandle(userTextdivs, textArr1, userInputs);
inputHandle(phoneTextdivs, textArr2, phoneInputs);
// 密码框显示隐藏
let eye = document.querySelector('.userEnroll i');
let flag = 1;
eye.onclick = function() {
    if (flag === 1) {
        eye.className = 'iconfont icon-eye-close';
        userInputs[1].type = 'password';
        flag = 0;
    } else {
        eye.className = 'iconfont icon-eye_open';
        userInputs[1].type = 'text';
        flag = 1;
    }
}
