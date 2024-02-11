// ------------ MouseOver -----------------//

// ------ Ejemplo 1 ----//

document.getElementById("mouseoverDiv").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#e74c3c";
});

document.getElementById("mouseoverDiv").addEventListener("mouseout", function() {
    this.style.backgroundColor = "#3498db";
});

// ------ Ejemplo 2 ----//

document.getElementById("cambiarImagen").addEventListener("mouseover", ()=>{
    document.getElementById("cambiarImagen").src = "img/log_new.jpg";
})

document.getElementById("cambiarImagen").addEventListener("mouseout", ()=>{
    document.getElementById("cambiarImagen").src = "img/log_old.jpg";
})

// ------ Ejemplo 3 ----//
document.getElementById("MostarMensaje").addEventListener("mouseover", ()=>{
    alert('Has pasado el mouse por encima');
})


// ------------ Focus -----------------//
// ------ Ejemplo 1 ----//
var form = document.getElementById("nombreForm")
form.addEventListener("focus", ()=>{
    if (form.value === '') {
        form.style.border = '3px solid red';
    } else {
        form.style.border = '3px solid blue';
    }
})

// ------ Ejemplo 2 ----//
document.getElementById("clave").addEventListener("focus", ()=>{
    document.getElementById("infoContrasena").style.display = 'block';
})
document.getElementById("clave").addEventListener("focusout", ()=>{
    document.getElementById("infoContrasena").style.display = 'none';
})

// ------ Ejemplo 3 ----//
document.getElementById("apellidoForm").addEventListener("focus", ()=>{
    document.getElementById("infoDUI").style.display = 'block';
})
var formA = document.getElementById("apellidoForm")
formA.addEventListener("focusout", ()=>{
    document.getElementById("infoDUI").style.display = 'none';
    if (formA.value.length <= 8) {
        alert("El campo no tiene los requisitos necesarios, por favor completa los datos!")
    }
})

// ------------ Click -----------------//
// ------ Ejemplo 1 ----//
var elemento = document.getElementById("elementoMostrarOcultar")
document.getElementById("mostrarOcultar").addEventListener("click", ()=>{
    elemento.style.display = (elemento.style.display === 'none' || elemento.style.display === '') ? 'block' : 'none';
})

// ------ Ejemplo 2 ----//
let colores = ["red", "green", "blue"];
let indiceColor = 0;
var color = document.getElementById("cambiarColor")
color.addEventListener("click",()=>{
    color.style.backgroundColor = colores[indiceColor];
    indiceColor = (indiceColor + 1) % colores.length;
})

// ------ Ejemplo 3 ----//
document.getElementById("btnlog_old").addEventListener("click",()=>{
    document.getElementById("cambiarImagenBtn").src = "img/log_old.jpg";
    document.getElementById("cambiarImagenBtn").style.display = "block";
})
document.getElementById("btnlog_new").addEventListener("click",()=>{
    document.getElementById("cambiarImagenBtn").src = "img/log_new.jpg";
    document.getElementById("cambiarImagenBtn").style.display = "block";
})