function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // 仮のユーザー名とパスワード
  if (user === "admin" && pass === "1234") {
    // 成功時：商品ページへ移動
    window.location.href = "product.html";
  } else {
    // 失敗時：エラーメッセージ表示
    document.getElementById("error").textContent = "ユーザー名またはパスワードが間違っています。";
  }
}
