$('.login100-form-btn').click(function (event){
    var GoogleProcessCode = $("#GoogleCode").val();
    var GoogleSessionCode = "<?php echo $secret;?>";
    $.ajax({
        type: 'POST',
        url: 'process',
        data: {GoogleProcessCode:GoogleProcessCode, GoogleSessionCode:GoogleSessionCode, CodeChack:""},
        success: CallBack,
        error: CError,
    });
    function CallBack(response){
        if(response.indexOf("GoogleProcessCodeSuccess") >= 0){
            swal("İşlem Başarılı !", "Güvenlik kodu başarıyla doğrulandı...", "success");
            $("#GoogleCode").val("");
        }else if(response.indexOf("GoogleProcessCodeUnSuccess") >= 0){
            /*setTimeout(function() {
                location.reload();
            }, 1000);*/
            swal("İşlem Başarısız !", "Güvenlik kodu doğrulanamadı !!!", "error");
            $("#GoogleCode").val("");
        }
    }
    function CError(){
        alert("Server Side kaynaklı bir hatadan dolayı tüm işlemler iptal edilmiştir.");
    }
});
(function ($) {
    "use strict";
    /*==================================================================*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }else {
                $(this).removeClass('has-val');
            }
        })    
    })
    /*==================================================================*/
    var input = $('.validate-input .input100');
    $('.validate-form').on('submit',function(){
        var check = true;
        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }
        return check;
    });
    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });
    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }
    function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
    }
    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    }
    /*==================================================================*/
    var showPass = 0;
    $('.btn-show-pass').on('click', function(){
        if(showPass == 0) {
            $(this).next('input').attr('type','text');
            $(this).find('i').removeClass('zmdi-eye');
            $(this).find('i').addClass('zmdi-eye-off');
            showPass = 1;
        }
        else {
            $(this).next('input').attr('type','password');
            $(this).find('i').addClass('zmdi-eye');
            $(this).find('i').removeClass('zmdi-eye-off');
            showPass = 0;
        }
    });
})(jQuery);