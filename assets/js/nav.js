const ANCORE = document.querySelectorAll('a');

    ANCORE[0].style.backgroundColor="#9DFF50";
    ANCORE[0].style.borderTopRightRadius="4px";
    ANCORE[0].style.borderBottomLeftRadius="4px";
    ANCORE[0].style.borderTopLeftRadius="20px";
    ANCORE[0].style.borderBottomRightRadius="20px";
    ANCORE[0].style.color="#000000";
    ANCORE[0].style.fontWeight="600";

function Ainicio(){
    ANCORE[0].style.backgroundColor="#9DFF50";
    ANCORE[0].style.borderTopRightRadius="4px";
    ANCORE[0].style.borderBottomLeftRadius="4px";
    ANCORE[0].style.borderTopLeftRadius="20px";
    ANCORE[0].style.borderBottomRightRadius="20px";
    ANCORE[0].style.color="#000000";
    ANCORE[0].style.fontWeight="600";

    for (let index = 1; index < ANCORE.length; index++) {
        const element = ANCORE[index];

        element.style.backgroundColor="transparent";
        element.style.borderRadius="0";
        element.style.fontWeight="400";
        element.style.color="white";
        
    }
    window.scrollBy({top:900,left:0,behavior:"smooth"});
    BTN_UP.style.display="inline-block";
}
function Aservicios(){
    ANCORE[1].style.backgroundColor="#9DFF50";
    ANCORE[1].style.borderTopRightRadius="4px";
    ANCORE[1].style.borderBottomLeftRadius="4px";
    ANCORE[1].style.borderTopLeftRadius="20px";
    ANCORE[1].style.borderBottomRightRadius="20px";
    ANCORE[1].style.color="#000000";
    ANCORE[1].style.fontWeight="600";

    for (let index = 0; index < ANCORE.length; index++) {
        const element = ANCORE[index];

        element.style.backgroundColor="transparent";
        element.style.borderRadius="0";
        element.style.fontWeight="400";
        element.style.color="white";
        ANCORE[1].style.backgroundColor="#9DFF50";
        ANCORE[1].style.borderTopRightRadius="4px";
        ANCORE[1].style.borderBottomLeftRadius="4px";
        ANCORE[1].style.borderTopLeftRadius="20px";
        ANCORE[1].style.borderBottomRightRadius="20px";
        ANCORE[1].style.color="#000000";
        ANCORE[1].style.fontWeight="600";
        
    }
    window.scrollBy({top:1990,left:0,behavior:"smooth"});
    BTN_UP.style.display="inline-block";
}

function Aportafolio(){
    ANCORE[2].style.backgroundColor="#9DFF50";
    ANCORE[2].style.borderTopRightRadius="4px";
    ANCORE[2].style.borderBottomLeftRadius="4px";
    ANCORE[2].style.borderTopLeftRadius="20px";
    ANCORE[2].style.borderBottomRightRadius="20px";
    ANCORE[2].style.color="#000000";
    ANCORE[2].style.fontWeight="600";

    for (let index = 0; index < ANCORE.length; index++) {
        const element = ANCORE[index];

        element.style.backgroundColor="transparent";
        element.style.borderRadius="0";
        element.style.fontWeight="400";
        element.style.color="white";
        ANCORE[2].style.backgroundColor="#9DFF50";
        ANCORE[2].style.borderTopRightRadius="4px";
        ANCORE[2].style.borderBottomLeftRadius="4px";
        ANCORE[2].style.borderTopLeftRadius="20px";
        ANCORE[2].style.borderBottomRightRadius="20px";
        ANCORE[2].style.color="#000000";
        ANCORE[2].style.fontWeight="600";
        
    }
    BTN_UP.style.display="inline-block";
}
function Aprecios(){
    ANCORE[3].style.backgroundColor="#9DFF50";
    ANCORE[3].style.borderTopRightRadius="4px";
    ANCORE[3].style.borderBottomLeftRadius="4px";
    ANCORE[3].style.borderTopLeftRadius="20px";
    ANCORE[3].style.borderBottomRightRadius="20px";
    ANCORE[3].style.color="#000000";
    ANCORE[3].style.fontWeight="600";

    for (let index = 0; index < ANCORE.length; index++) {
        const element = ANCORE[index];

        element.style.backgroundColor="transparent";
        element.style.borderRadius="0";
        element.style.fontWeight="400";
        element.style.color="white";
        ANCORE[3].style.backgroundColor="#9DFF50";
        ANCORE[3].style.borderTopRightRadius="4px";
        ANCORE[3].style.borderBottomLeftRadius="4px";
        ANCORE[3].style.borderTopLeftRadius="20px";
        ANCORE[3].style.borderBottomRightRadius="20px";
        ANCORE[3].style.color="#000000";
        ANCORE[3].style.fontWeight="600";
        
    }
    BTN_UP.style.display="inline-block";
}
function AsobreNosotros(){
    ANCORE[4].style.backgroundColor="#9DFF50";
    ANCORE[4].style.borderTopRightRadius="4px";
    ANCORE[4].style.borderBottomLeftRadius="4px";
    ANCORE[4].style.borderTopLeftRadius="20px";
    ANCORE[4].style.borderBottomRightRadius="20px";
    ANCORE[4].style.color="#000000";
    ANCORE[4].style.fontWeight="600";

    for (let index = 0; index < ANCORE.length; index++) {
        const element = ANCORE[index];

        element.style.backgroundColor="transparent";
        element.style.borderRadius="0";
        element.style.fontWeight="400";
        element.style.color="white";
        ANCORE[4].style.backgroundColor="#9DFF50";
        ANCORE[4].style.borderTopRightRadius="4px";
        ANCORE[4].style.borderBottomLeftRadius="4px";
        ANCORE[4].style.borderTopLeftRadius="20px";
        ANCORE[4].style.borderBottomRightRadius="20px";
        ANCORE[4].style.color="#000000";
        ANCORE[4].style.fontWeight="600";
        
    }
    BTN_UP.style.display="inline-block";
}
ANCORE[0].addEventListener('click',Ainicio);
ANCORE[1].addEventListener('click',Aservicios);
ANCORE[2].addEventListener('click',Aportafolio);
ANCORE[3].addEventListener('click',Aprecios);
ANCORE[4].addEventListener('click',AsobreNosotros);


