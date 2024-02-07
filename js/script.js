function validaCampos(){

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if(usuario!= "carol" && senha != "100207"){
        alert("usuário e senha inválidos")
    }else{
        alert("seja bem vindo ", usuario)
    }
   
}