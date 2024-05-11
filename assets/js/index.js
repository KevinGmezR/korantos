const contactanos = document.getElementById("contactBtn");
const ventana = document.getElementById("ventanaContact");
const cerrar = document.getElementById("cancelarContact");


const facebookBtn = document.getElementById("facebookContact");
const instagramBtn = document.getElementById("instagramContact");
const whatsappBtn = document.getElementById("whatsappContact");
const correoBtn = document.getElementById("correoContact");
const telBtn = document.getElementById("telContact");

    ventana.style.display="none";
function ventanaContact(){
    ventana.style.opacity="0%";
    ventana.style.scale="50%"
    ventana.style.display="flex";
    setTimeout(() => {
        ventana.style.opacity="100%";
        ventana.style.scale="100%"
    }, 100);
}

function cerrarVentanaContact(){
    ventana.style.scale="50%";
    ventana.style.opacity="20%;"
    setTimeout(() => {
        ventana.style.opacity="0%";
    }, 100);
    setTimeout(() => {
        ventana.style.display="none";
    }, 200);
}

contactanos.addEventListener('click',ventanaContact);
cerrar.addEventListener('click',cerrarVentanaContact);

/* FUNCIONES BTN CONTACTANOS */

function facebook(){
    window.location.href="https://www.facebook.com/";
}
function instagram(){
    window.location.href="https://www.instagram.com/";
}
function whatsapp(){
    window.location.href="https://api.whatsapp.com/send?phone=573118160908&text=Hola%20*KORANTO*,%20vengo%20de%20su%20pagina%20web.";
}
function correo(){
    window.location.href="mailto:korantos@gmail.com";
}
function tel(){
    window.location.href="tel:+573118160908";
}

facebookBtn.addEventListener('click',facebook);
instagramBtn.addEventListener('click',instagram);
whatsappBtn.addEventListener('click',whatsapp);
correoBtn.addEventListener('click',correo);
telBtn.addEventListener('click',tel);

