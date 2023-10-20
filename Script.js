
function login() {
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;
    if(usuario === "Oliver-Romo" && contraseña === "1a2b3C") {
           window.location.href = "Formulario.html?message=Bienvenido," + usuario;
        } else if(usuario === "Daniel-Folio" && contraseña === "7#23A") {
            window.location.href = "Formulario.html?message=Bienvenido," + usuario;
         } else {
        document.getElementById('result').innerText = usuario+'No estas en la lista Pa o la contraseña es incorrecta!';
    }   
}
