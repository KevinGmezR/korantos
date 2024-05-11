const menu = document.getElementById("nav_mobile");
const abrirMenu = document.getElementById("menu");
const cerrarMenu = document.getElementById("close_menu");

    menu.style.display="none";
    cerrarMenu.display="none";

abrirMenu.addEventListener('click',()=>{
    cerrarMenu.style.display="block";
    abrirMenu.style.display="none";
    menu.style.display="flex";
    menu.style.position="absolute";
    menu.style.opacity="10%";
    menu.style.left="80%";
    setTimeout(() => {
        menu.style.left="68%";
        menu.style.opacity="100%";
    }, 100);
})
cerrarMenu.addEventListener('click',()=>{
    cerrarMenu.style.display="none";
    abrirMenu.style.display="block";
    menu.style.opacity="40%";
    menu.style.left="80%";
    setTimeout(() => {
        menu.style.display="none";
    }, 200);
})