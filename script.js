function Login(){
    var done=0
    var username=document.login.username.value;
    username=username.toLowerCase();
    var password=document.login.password.value;
    password=password.toLowerCase();
    
    if (username=="" && password=="1234"){window.location="Login.html";done1}
    if (done==0){alert("Usuário ou senha incorreto")}
    
}