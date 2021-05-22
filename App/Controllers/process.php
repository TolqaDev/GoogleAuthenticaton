<?php
require_once 'Api/GoogleAuthenticator.php';
$ga = new GoogleAuthenticator();
if(isset($_POST['CodeChack'])){
    $checkResult = "";
    $code = $_POST['GoogleProcessCode'];
    $secret = $_POST['GoogleSessionCode'];
    $checkResult = $ga->verifyCode($secret, $code, 2);
    if ($checkResult){
        $_SESSION['googleCode']	= $code;
        echo "GoogleProcessCodeSuccess";
    }else{
        echo "GoogleProcessCodeUnSuccess";
    }
}?>