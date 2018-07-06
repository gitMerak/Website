
$(document).ready(function(){
    //提交表单进行证验
    $("#registerForm").submit(function(){
        var flag = true;
        if (!checkUser()) flag = false;
        // if (!checkEmail()) flag = false;
        // if (!checkMobile()) flag = false;
        if (!checkPwd()) flag = false;
        // if (!checkRepwd()) flag = false;
        return flag;
    });


    //绑定失去焦点事件
    $("#user").blur(checkUser);
    // $("#email").blur(checkEmail);
    // $("#mobile").blur(checkMobile);
    // $(".user_id_password").blur(checkPwd);
    $("#pwd").blur(checkRepwd);




    /*用户名验证*/
    function checkUser(){
        var user=$("#user").val();
        var userId=$("#unameTip");
        userId.html("");
        var reg=/^[a-zA-Z][\w_]{4,16}$/;
        if(reg.test(user)==false){
            userId.html("你的用户名过短，不允许注册！");
            return false;
        }
        return true;
    }
   /* /!*验证邮箱*!/
    function checkEmail(){
        var email=$("#email").val();
        var email_prompt=$("#email_prompt");
        email_prompt.html("");
        var reg=/^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
        if(reg.test(email)==false){
            email_prompt.html("Email格式不正确，例如web@sohu.com");
            return false;
        }
        return true;
    }*/
    // /*验证手机号码*/
    // function checkMobile(){
    //     var mobile=$("#mobile").val();
    //     var mobileId=$("#mobile_prompt");
    //     mobileId.html("");
    //     var regMobile=/^1\d{10}$/;
    //     if(regMobile.test(mobile)==false){
    //         mobileId.html("手机号码不正确，请重新输入");
    //         return false;
    //     }
    //     mobileId.html("");
    //     return true;
    // }
    /*密码验证*/
    function checkPwd(){
        var pwd=$("#pwd").val();
        var pwdId=$("#possword");
        var reg=/^(\d{9,16})|((?! )(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9_]{6,16})$/;
        pwdId.html("");
        if(reg.test(pwd)==false){
            if(reg.test(pwd).value().length<6){
                pwdId.html("密码不能小于6个字符");
            }
            if(reg.test(pwd).value().length>16){
                pwdId.html("密码不能大于16个字符");
            }
            return false;
        }
        return true;
    }
    // //确认密码
    // function checkRepwd(){
    //     var repwd=$("#repwd").val();
    //     var pwd=$("#pwd").val();
    //     var repwdId=$("#repwd_prompt");
    //     repwdId.html("");
    //     if(pwd!=repwd){
    //         repwdId.html("两次输入的密码不一致");
    //         return false;
    //     }
    //     return true;
    // }


})











