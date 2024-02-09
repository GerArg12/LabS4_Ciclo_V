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
