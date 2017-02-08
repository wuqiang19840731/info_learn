var login = {};

/** 
 * 超簡易ログイン認証
 * @param loginForm formエレメント
 * @return 成功時true,失敗時false
 */
login.doLogin = function doLogin(loginForm) {

	if((loginForm.user_email.value != 'wuqiang19840731@yahoo.co.jp') && (loginForm.user_password.value == 'wq840731')){
		return login.doError('ユーザー名かパスワードが間違っています、入力し直してください。');
	}

    //空チェック
    if(loginForm.user_email.value == '') {
        return login.doError('ユーザー名を入力してください。');
    }
    if(loginForm.user_password.value == '') {
        return login.doError('パスワードを入力してください。');
    }

    //エラーなし
    return true;
    window.location.href = "profile_form.html" ;
}

/**
 * エラー時の動作
 * @param msg エラーメッセージ
 * @return falseを返す
 */
login.doError = function doError(msg) {
    alert(msg);
    return false;
}