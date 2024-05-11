const contenedorComment = document.getElementById("contenedor_comentarios");
    var posición = contenedorComment.scrollWidth / 2;
    contenedorComment.scrollLeft = 385;
    contenedorComment.style.scrollBehavior="smooth";

const botonesTesti = document.querySelectorAll('.btnComment');
const atras = botonesTesti[0];
const siguiente = botonesTesti[1];

atras.addEventListener('click',()=>{
    contenedorComment.scrollLeft = 0;
})
siguiente.addEventListener('click',()=>{
    contenedorComment.scrollLeft += 385;
})