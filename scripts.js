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

