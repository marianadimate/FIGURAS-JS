function circulo(){
    let figura = document.getElementById("figura");
    figura.classList.toggle("circulo");
    figura.classList.remove("rectangulo","triangulo");
}

function rectangulo(){
    let figura = document.getElementById("figura");
    figura.classList.toggle("rectangulo");
    figura.classList.remove("circulo","triangulo");

}
function triangulo(){
    let figura = document.getElementById("figura");
    figura.classList.toggle("triangulo");
    figura.classList.remove("circulo","rectagulo");

    

}
function girar(){
    let figura = document.getElementById("figura");
    figura.classList.toggle("girar");
    figura.classList.remove("circulo","rectagulo");


}
function arriba(){
    let figura = document.getElementById("figura");
    figura.classList.toggle("arriba");
    


}
function abajo(){
    let figura = document.getElementById("figura");
    figura.classList.toggle("abajo");
    

}
function izquierda(){
    let figura = document.getElementById("figura");
    figura.classList.toggle("izquierda");
   

}
function derecha(){
    let figura = document.getElementById("figura");
    figura.classList.toggle("derecha");
}
function ocultar(){
    let figura = document.getElementById("figura");
    figura.classList.toggle("ocultar");
}
function gif(){
    let figura = document.getElementById("figura");
    figura.classList.toggle("gif");
}
function degradado(){
    let figura = document.getElementById("figura");
    figura.classList.toggle("degradado");

}
function panel(){
    const panel = document.querySelector(".panelizq");
    panel.classList.toggle("activo");

}
function panels(){
    const panel = document.querySelector(".panels");
    panel.classList.toggle("activoA");

}
    
    