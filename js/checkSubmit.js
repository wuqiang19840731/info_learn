  function checkSubmit(){
  	var user = document.getElementById("user_email").value;
    var password = document.getElementById("user_password").value;
    var managerUser = "manager@yahoo.co.jp";
    var managerPw = "manager";
    var users = "user@yahoo.co.jp";
    var usersPw = "userPassword";
    
    if((user === users && password === usersPw)||(user === managerUser && password === managerPw) && validate()){ 
  	  return true;
	}
	else{
	  alert("ユーザー名かパスワードが間違っています！");
	  return false;
	}
}

 var code; //認証番号   
  function createCode() {
      code = "";
      var codeLength = 4;//認証番号桁数   
      var checkCode = document.getElementById("checkCode");
      var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a'
      							,'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');//認証番号配列   
   
      for (var i = 0; i < codeLength; i++) {
          var charIndex = Math.floor(Math.random() * 62);
          code += selectChar[charIndex];
      }
      if (checkCode) {
          checkCode.className = "code";
          checkCode.value = code;
      }
  }
   
  function validate() {
      var inputCode = document.getElementById("authentication").value;
      if (inputCode.length <= 0) {
          alert("認証番号を入力してください！");
          createCode();//リフラッシュ 
          return false;
      } else if (inputCode != code) {
          alert("認証番号間違いっています！");
      createCode();//リフラッシュ 
      document.getElementById("authentication").value="";  
      return false;
      } 
      return true;
  }
