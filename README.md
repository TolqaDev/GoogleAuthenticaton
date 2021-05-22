# TR / Google Authenticator PHP Entegrasyonu

<b>Kullanılan Altyapılar</b>
- HTML
- CSS3
- JavaScript
- PHP 7.4.16
- GoogleAuthenticator Library 

Google Authenticator sayesinde kullanıcı güvenliğinizi 2 kat arttırabilirsiniz.

- Düzenleme Yapılabilen Dökümanlar
```
- App/Config/*
- Page/index.php*
- Controllers/process.php
```

- Düzenleme Yapılamayan Dökümanlar
```
- Controllers/GoogleAuthenticator.php
```

- Döküman İşlemleri
```
 # setTimezone             // Saat Dilimi Belirleme
 # GoogleAuthenticator     // F2A Fonksionunu Çağırma İşlemi
 # createSecret            // Güvenlik Kodu Oluşturma
 # getCode                 // QR Kod İçerisindeki Kodu Alma
 # getQRCodeGoogleUrl      // Resim QR Kod Oluşturma
 # verifyCode              // Oluşturulan Kodu Duğrulama
 # setCodeLength           // Oluşturulan Kodun Uzunluğunu Belirleme
 # _base32Decode           // base32 Kod Şifreleme
 # _base32Encode           // base32 Kod Çözme
 # _getBase32LookupTable   // base32 Anahtar Kelime Haznesi
```

<br>Dosya içeriklerinde veya yapısında değişiklik yapacaksanız lütfen konu hakkında bilgi sahibi olduğunuzdan emin olun!
<br><br> Test ortamı için <a href="https://google.tolqa.dev">TIKLAYINIZ</a>
<br><b>NOT:</b> Kodunuz doğru olsada doğrulama yapamıyorsanız Plesk/cPanel TimeZone ayarlarınızın Mobil saatinize eşit olduğundan emin olun !!
# EN / Google Authenticator PHP integration

Coming Soon........
