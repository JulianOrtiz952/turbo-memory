document.addEventListener("DOMContentLoaded", function(){
    var loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function(event){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username=="admin"&&password=="1234"){
        window.location.href = "dashboard.html";
    }
    else{
        alert("Usuario o contraseña incorrectos");
    }
    })
});

var registroForm = document.getElementById("registroForm");
if(registroForm){
    registroForm.addEventListener("submit", function(event){
    event.preventDefault();
    var newUser = document.getElementById("newUser").value;
    var newPassword = document.getElementById("newPassword").value;
    alert("Usuario registrado" + new newUser);
    window.location.href = "index.html"
    })
}

var linkEstudiantes = document.getElementById("linkEstudiantes");
var linkAsignaturas = document.getElementById("linkAsignaturas");

var contenedorEstudiantes = document.getElementById("contenedorEstudiantes");
var contenedorAsignaturas = document.getElementById("contenedorAsignaturas");

linkEstudiantes.addEventListener("click", function(event){
    event.preventDefault();
    contenedorEstudiantes.classList.add("active");
    contenedorAsignaturas.classList.remove("active");
});

linkAsignaturas.addEventListener("click", function(event){
    event.preventDefault();
    contenedorAsignaturas.classList.add("active");
    contenedorEstudiantes.classList.remove("active");
});