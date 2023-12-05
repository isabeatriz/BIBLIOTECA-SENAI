function login() {
   usuario = document.getElementById("user").value;
    //usuario=usuario.toLowerCase();
    senha= document.getElementById("pass").value;
    //senha=senha.toLowerCase();

    if (usuario=="bibliotecario" && senha=="1234") {
        alert("Senha OK");
        window.open("menu-bibliotecario.html");
    }
    
    else if (usuario==usuario && senha==senha){
        alert("Senha OK")
        window.open("menu.html")
    }
    else {
                 alert("Usuário ou senha errados")
    }
}

/*
function Login(){
    window.location.href ="menu.html"
}
function emprestimo(){
    window.location.href ="emprestimos.html"
}*/