const  BOTONES = document.querySelectorAll('.btnScroll');
const SCROLL_LEFT = document.getElementById("scrollIz");
const SCROLL_RIGTH = document.getElementById("scrollDer");
const CONTENEDOR = document.getElementById("contenedor_imgNC");

function hover(){
    SCROLL_RIGTH.style.transition="all 0ms";
    SCROLL_RIGTH.src="./assets/icons/Next.png";
    SCROLL_RIGTH.style.rotate="0deg";
    SCROLL_RIGTH.style.scale="105%";
    CONTENEDOR.scrollLeft += 1265;

         if (CONTENEDOR.scrollLeft === 1900.800048828125) {
             CONTENEDOR.scrollLeft = 0;
        }
}
function unHover(){
    SCROLL_RIGTH.src="./assets/icons/Back.png";
    SCROLL_RIGTH.style.transition="all 300ms";
    SCROLL_RIGTH.style.rotate="180deg";
    SCROLL_RIGTH.style.scale="100%";
}
function hoverL(){
    SCROLL_LEFT.style.transition="all 0ms";
    SCROLL_LEFT.src="./assets/icons/Next.png";
    SCROLL_LEFT.style.rotate="-180deg";
    SCROLL_LEFT.style.scale="105%";
    CONTENEDOR.scrollLeft -= 1265;
}
function unHoverL(){
    SCROLL_LEFT.src="./assets/icons/Back.png";
    SCROLL_LEFT.style.transition="all 300ms";
    SCROLL_LEFT.style.rotate="0deg";
    SCROLL_LEFT.style.scale="100%";
    if (CONTENEDOR.scrollLeft === 0) {
        CONTENEDOR.scrollLeft += 1900.800048828125;
   }
}
SCROLL_RIGTH.addEventListener('mousedown',hover);
SCROLL_RIGTH.addEventListener('mouseup',unHover);
SCROLL_LEFT.addEventListener('mousedown',hoverL);
SCROLL_LEFT.addEventListener('mouseup',unHoverL);