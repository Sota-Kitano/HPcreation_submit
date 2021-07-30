'use strict'

// 送信チェック

function ButtonClick() {
  var name;
  var telNum;
  var mail;
  var contents;
  name=document.mail_form.your_name;
  telNum=document.mail_form.tel_num;
  mail=document.mail_form.mail_address;
  contents=document.mail_form.contents;
  
  if(name.value==""){
  alert("名前を入力してください");
  name.focus();
  return false;
  }
  if(telNum.value=="") {
  alert("電話番号を入力してください");
  telNum.focus();
  return false;
  }
  if(mail.value=="") {
  alert("メールアドレスを入力してください");
  mail.focus();
  return false;
  }
  if(contents.value=="") {
  alert("電話番号を入力してください");
  contents.focus();
  return false;
  }
  alert ('送信しますか?');
  return true;
  }
