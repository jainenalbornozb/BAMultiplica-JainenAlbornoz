let nombre_usuario = prompt("¡Hola! ¿Cómo te llamas?");

console.log(nombre_usuario);

alert("¡Hola" + nombre_usuario + "bienvenido a Cultmovies!");

document.getElementById("titulopagina");

let paginatitulo = document.getElementById("titulopagina");

console.log(paginatitulo);

let contenidotitulo = paginatitulo.innerText ;
console.log(contenidotitulo);
paginatitulo.innerText ="Cine de culto";

function validar(event) {
    event.preventDefault();
  
    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let sugerencias = document.getElementById("sugerencias");
    let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let error = false;
  
    document.getElementById("validar_nombre").innerHTML = "";
    document.getElementById("validar_email").innerHTML = "";
    document.getElementById("validar_sugerencias").innerHTML = "";

    if (nombre.value === "") {
        document.getElementById("validar_nombre").innerHTML = "Debe completar su nombre";
        error = true;
        nombre.focus();
      }
    
      if (!validEmail.test(email.value)) {
        document.getElementById("validar_email").innerHTML = "Ingrese un formato de email válido";
        error = true;
        email.focus();
      }
      if (sugerencias.value === "") {
        document.getElementById("validar_sugerencias").innerHTML = "Debe completar su sugerencia";
        error = true;
        nombre.focus();
      }
    if (!error) {
        alert("Datos enviados");
      
        nombre.value = "";
        email.value = "";
        sugerencias.value = "";
      }
    }