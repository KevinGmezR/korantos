const inicio = document.getElementById("nameCompany");
const imagenesInicio = document.getElementById("contenedor_imagenes_header");
const boton = document.getElementById("a_portafolio");
const closePort = document.getElementById("closePortafolio");
const inicioAncore = document.getElementById("a_inicio");
const portafolioAncore = document.getElementById("a_portafolio");
const Ancore = document.querySelectorAll('.navA');
const portBox = document.getElementById("portafolioBox");
    portBox.style.display="none";
function mostrar_portafolio(){
    portBox.style.display="inline-block";
    inicio.style.transform="translate(-50%,0%)";
    imagenesInicio.style.transform="translate(-70%,0%)";
    setTimeout(() => {
        inicio.style.opacity="10%";
        imagenesInicio.style.opacity="10%";
    }, 100);
    setTimeout(() => {
        inicio.style.display="none";
        imagenesInicio.style.display="none";
    }, 200);
}
function cerrar_portafolio(){
    inicio.style.display="inline-block";
    imagenesInicio.style.display="inline-block";
    portBox.style.display="none";
    inicio.style.opacity="100%";
    imagenesInicio.style.opacity="100%";

    setTimeout(() => {
        inicio.style.transform="translate(0%,-50%)";
        imagenesInicio.style.transform="translate(3%,-40%)";
    }, 100);

    Ancore[0].style.backgroundColor="#9DFF50";
    Ancore[0].style.borderTopRightRadius="4px";
    Ancore[0].style.borderBottomLeftRadius="4px";
    Ancore[0].style.borderTopLeftRadius="20px";
    Ancore[0].style.borderBottomRightRadius="20px";
    Ancore[0].style.color="#000000";
    Ancore[0].style.fontWeight="600";

    for (let index = 1; index < Ancore.length; index++) {
        const element = Ancore[index];

        element.style.backgroundColor="transparent";
        element.style.borderRadius="0";
        element.style.fontWeight="400";
        element.style.color="white";
    }
}

boton.addEventListener('click',mostrar_portafolio);
closePort.addEventListener('click',cerrar_portafolio);